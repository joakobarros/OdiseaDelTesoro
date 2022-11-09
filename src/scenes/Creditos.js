import Phaser from 'phaser'

export default class Creditos extends Phaser.Scene
{
	constructor()
	{
		super('Creditos')
	}

  create() {

    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondoPiedras');

    this.add.image(900, 400, 'logo').setScale(0.4);
  
    const text = this.add.text(100, 740, "The Keepers: Altamirano Irina, Barros Joaquín y Perot Alejo", {
      fontSize: "50px",
      fontFamily: 'Pixel'
    })
  
    var volver = this.add
    .image(this.cameras.main.centerX,920,'boton')
    .setInteractive()
    .on('pointerdown',()=> {
      this.sound.stopAll(); 
      this.scene.start("MainMenu"); 
    })
    .on('pointerover', ()=> {
      volver.setScale(5.3)
    })
    .on('pointerout', ()=> {
      volver.setScale(5)
    });
    volver.setScale(5);

    this.volvertxt = this.add.text(807, 870,
      "volver",
     { fontSize: "80px", fill: "#330C03", fontFamily: "Pixel",}
   );
  }
}