import { sharedInstance as events } from '../scenes/EventCenter'
import { initializeApp } from "firebase/app";
import {get, getDatabase, ref, set, child, update} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyA15wFzZLTz2rs_Zawak-KdMvfw7Rk4oqM",
  authDomain: "odisea-del-tesoro.firebaseapp.com",
  projectId: "odisea-del-tesoro",
  storageBucket: "odisea-del-tesoro.appspot.com",
  messagingSenderId: "404759614952",
  appId: "1:404759614952:web:478f42ac884011043c805d",
  measurementId: "G-FCT8F5HWZQ",
  databaseURL: "https://odisea-del-tesoro-default-rtdb.firebaseio.com/", // link que vincula la firebase con el juego
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export async function getData(){                             /////
    const dbRef = ref(db);                                      //
    get(child(dbRef, 'users/vicHum')).then((snapshot)=> {       //    funcion getData:
        if (snapshot.exists()) {                                //    
            console.log(snapshot.val());                        //      a traves del link se busca el dato vicHum y vicGuard
            const data = snapshot.val();                        //      que estan almacenados en la firebase para luego emitir un
            events.emit('dato-recibido', data)                  //      evento que es escuchado en el MainMenu, para mostrar los
        }                                                       //      datos en la pantalla, y en las escenas de victoria para
    })                                                          //      poder reemplzarlas con el pushData
    get(child(dbRef, 'users/vicGuard')).then((snapshot1)=> {    //      es necesario hacer 2 llamados diferentes al firebase 
        if (snapshot1.exists()) {                               //      para poder diferenciar los 2 datos de las victorias
            console.log(snapshot1.val());                       //
            const data1 = snapshot1.val();                      //
            events.emit('dato-recibido1', data1)                //
        }                                                       //
    })                                                          //
}                                                            /////

export async function pushData(contador, ganador){           /////
    if(ganador == "Humanos"){                                   //    funcion pushData:
        update(ref(db, 'users/'),{                              //  
            vicHum : contador                                   //      se llama en las escenas de victoria y tiene como parametros
        })                                                      //      la cantidad de victorias totales que se va a sobrescribir
    }else {                                                     //      en la firebase (contador) y el ganador que dice si ganaron 
        update(ref(db, 'users/'),{                              //      los humanos o el guardian
            vicGuard : contador                                 //
        })                                                      //      dependiendo del quien haya sido el ganador, es el dato
    }                                                           //      que se va a reemplazar
}                                                            /////