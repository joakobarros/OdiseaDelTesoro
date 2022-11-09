import Phaser from 'phaser'

export default class Pausa extends Phaser.Scene
{
	constructor()
	{
		super('Pausa')
	}

	create() {

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondoPiedras');

        var volver = this.add.image(this.cameras.main.centerX,400,'boton').setInteractive()
        .on('pointerdown',()=> {this.scene.start("Mapa")})
        .on('pointerover',()=> {volver.setScale(9.3)})
        .on('pointerout',()=> {volver.setScale(9)})
        volver.setScale(9);
        
        var Salir = this.add.image(this.cameras.main.centerX,700,'boton').setInteractive()
        .on('pointerdown',()=> {
            this.sound.stopAll(); 
            this.scene.start("MainMenu")})
        .on('pointerover',()=> {Salir.setScale(9.3)})
        .on('pointerout',()=> {Salir.setScale(9)})
        Salir.setScale(9);

        this.pausatxt = this.add
        .text(
            675, 310,
            "volver",
           { fontSize: "150px", fill: "#330C03", fontFamily: "Pixel",}
        );

        this.pausatxt = this.add
        .text(
            730, 605,
            "salir",
           { fontSize: "150px", fill: "#330C03", fontFamily: "Pixel",}
        );
    }
}