import Phaser from 'phaser'

export default class MainMenu extends Phaser.Scene
{
	constructor()
	{
		super('MainMenu')
	}

	create() {

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondomenu');
    
        let audio = this.sound.add('musica', {loop: true});
        audio.play();
    
         var jugar = this.add.image(this.cameras.main.centerX,700,'jugar').setInteractive()
        .on('pointerdown',()=> { this.scene.start("SelectorHumanos"); })
        .on('pointerover', ()=> {jugar.setScale(5.1)})
        .on('pointerout', ()=> {jugar.setScale(5)});
        jugar.setScale(5);
    
    
        var creditos = this.add.image(this.cameras.main.centerX,900,'creditos').setInteractive()
        .on('pointerdown',()=> {this.scene.start("Creditos")})
        .on('pointerover', ()=> {creditos.setScale(5.1)})
        .on('pointerout', ()=> {creditos.setScale(5)});
        creditos.setScale(5);
      
      }
}