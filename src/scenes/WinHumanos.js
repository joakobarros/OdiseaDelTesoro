import Phaser from 'phaser'

export default class WinHumanos extends Phaser.Scene
{
	constructor()
	{
		super('WinHumanos')
	}

  create() {

    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'winHumanos');

    this.tcant = this.add.text(522, 170, 'Victoria de los Humanos', {
      fontSize: "65px",
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

    this.volvertxt = this.add.text(805, 880,
      "salir",
      { fontSize: "100px", fill: "#330C03", fontFamily: "Pixel",}
    );
  }
}