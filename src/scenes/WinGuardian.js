import { getDatabase } from 'firebase/database';
import Phaser from 'phaser'
import { getPhrase } from '../services/translations'
import {getData, pushData} from '../services/dataBase'
import { sharedInstance as events } from '../scenes/EventCenter'

export default class WinGuardian extends Phaser.Scene
{
	constructor()
	{
		super('WinGuardian')
	}

  create() {

    getData();                                                 // para cargar el nuevo dato al Firebase, primero se hace un getData
    events.on('dato-recibido1', this.dato1, this);             // para traer el dato almacenado en el servidor y usarlo en esta escena
    
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'winGuardian');

    this.tcant = this.add.text(517, 170, getPhrase('Victoria del Guardian'), 
    {
      fontSize: "75px",
      fill: "#774407",
      fontFamily: "Pixel",
    });
    
    var Salir = this.add.image(950,945,'boton').setInteractive()
    .on('pointerdown',()=> {
      this.sound.stopAll(); 
      this.scene.start("MainMenu")})
    .on('pointerover',()=> {Salir.setScale(5.1)})
    .on('pointerout',()=> {Salir.setScale(5)})
    Salir.setScale(5);

    this.volvertxt = this.add.text(805, 880, getPhrase('Salir'),
    { 
      fontSize: "100px", 
      fill: "#330C03", 
      fontFamily: "Pixel",
    });

    this.vG ++;                         // despues al dato recivido se le suma uno
    pushData(this.vG, "Guardian");      // y con el pushData se pasan como parametros el puntaje y el ganador
                                        // para que sean usador en script del data base y subirlo al servidor
  }                                     
                                        // el proceso para el dato de los humanos es el mismo pero en la pantalla de WinHumanos
  dato1(data1){                     
    this.vG = data1
  }
}