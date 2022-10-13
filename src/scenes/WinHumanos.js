import Phaser from 'phaser'

export default class WinHumanos extends Phaser.Scene
{
	constructor()
	{
		super('WinHumanos')
	}

    create() {

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'winHumanos');
      
            var Salir = this.add.image(1000,945,'salir').setInteractive()
            .on('pointerdown',()=> {
              this.sound.stopAll(); 
              this.scene.start("MainMenu")})
            .on('pointerover',()=> {Salir.setScale(5.1)})
            .on('pointerout',()=> {Salir.setScale(5)})
            Salir.setScale(5);;
    }
}