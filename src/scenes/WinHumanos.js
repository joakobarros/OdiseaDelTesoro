import Phaser from 'phaser'
import { getPhrase } from '../services/translations'
import {getData, pushData} from '../services/dataBase'
import { sharedInstance as events } from '../scenes/EventCenter'

export default class WinHumanos extends Phaser.Scene
{
	constructor()
	{
		super('WinHumanos')
	}

  create() {

    getData();
    events.on('dato-recibido', this.dato, this);

    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'winHumanos');

    this.tcant = this.add.text(522, 170, getPhrase('Victoria de los Humanos'), 
      {
        fontSize: "65px",
        fill: "#774407",
        fontFamily: "Pixel",
      }
    );
    
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
      }
    );

    this.vH ++;
    pushData(this.vH, "Humanos");
  }

  dato(data){
    this.vH = data
  }
}