import Phaser from 'phaser'
import { getPhrase } from '../services/translations'

export default class WinGuardian extends Phaser.Scene
{
	constructor()
	{
		super('WinGuardian')
	}

  create() {

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
  }      
}