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
  databaseURL: "https://odisea-del-tesoro-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export async function getData(){
    const dbRef = ref(db);
    get(child(dbRef, 'users/vicHum')).then((snapshot)=> {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            const data = snapshot.val();
            events.emit('dato-recibido', data)
        }
    })
    get(child(dbRef, 'users/vicGuard')).then((snapshot1)=> {
        if (snapshot1.exists()) {
            console.log(snapshot1.val());
            const data1 = snapshot1.val();
            events.emit('dato-recibido1', data1)
        }
    })    
}

export async function pushData(contador, ganador){
    if(ganador == "Humanos"){
        update(ref(db, 'users/'),{
            vicHum : contador
        })
    }else {
        update(ref(db, 'users/'),{
            vicGuard : contador
        })
    }
    
}