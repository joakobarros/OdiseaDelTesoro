import Phaser from 'phaser'

export default class Pausa extends Phaser.Scene
{
	constructor()
	{
		super('Pausa')
	}

	create() {

        var volver = this.add.image(this.cameras.main.centerX,500,'volver').setInteractive()
        .on('pointerdown',()=> {this.scene.start("mapa")})
        .on('pointerover',()=> {volver.setScale(5.1)})
        .on('pointerout',()=> {volver.setScale(5)})
        volver.setScale(5);
        
        var Salir = this.add.image(this.cameras.main.centerX,700,'salir').setInteractive()
        .on('pointerdown',()=> {
            this.sound.stopAll(); 
            this.scene.start("mainmenu")})
        .on('pointerover',()=> {Salir.setScale(5.1)})
        .on('pointerout',()=> {Salir.setScale(5)})
        Salir.setScale(5);
    }
}