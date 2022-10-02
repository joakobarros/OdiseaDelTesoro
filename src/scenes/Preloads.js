import Phaser from 'phaser'

export default class Preloads extends Phaser.Scene
{
	constructor()
	{
		super('Preloads')
	}

	preload() {
        this.load.image("fondomenu", "public/assets/images/mainmenu.png");
        this.load.image("arquero", "public/assets/images/arqueroIdle.png");
        this.load.image("caballero", "public/assets/images/caballeroIdle.png");
        this.load.image("piromano","public/assets/images/piromanoIdle.png");
        this.load.image("mago","public/assets/images/mago.png");
        this.load.image("esqueletos","public/assets/images/esqueletos.png");
        this.load.image("polilla","public/assets/images/polilla.png");
        this.load.image("logo","public/assets/images/logo.png");
        this.load.image("jefe", "public/assets/images/jefe.png");
        this.load.image("mapa1","public/assets/images/mapa1.png");
        this.load.image("mapa2", "public/assets/images/mapa2.png");
        this.load.image("mapa3", "public/assets/images/mapa3.png");
        this.load.image("mapa4", "public/assets/images/mapa4.png");
        this.load.image("mapa5", "public/assets/images/mapa5.png");
        this.load.image("mas", "public/assets/images/mas.png");
        this.load.image("menos", "public/assets/images/menos.png");
        this.load.image("creditos", "public/assets/images/creditos.png");
        this.load.image("jugar", "public/assets/images/jugar.png");
        this.load.image("opciones", "public/assets/images/opciones.png");
        this.load.image("pausa", "public/assets/images/pausa.png");
        this.load.image("salir", "public/assets/images/salir.png");
        this.load.image("volver", "public/assets/images/volver.png");
        this.load.image("continuar", "public/assets/images/continuar.png");
        this.load.image("atacar", "public/assets/images/atacar.png");
        this.load.image("winGuardian", "public/assets/images/winguardian.png")
        this.load.image("winHumanos", "public/assets/images/winhumanos.png")
        this.load.image("selector", "public/assets/images/selector.png")
        this.load.image("fondocombate", "public/assets/images/combatefondo.png")
        this.load.image("masAtaque", "public/assets/images/buffo2.png")
        this.load.image("vidaMax", "public/assets/images/buffo1.png")
        this.load.image("curarVida", "public/assets/images/buffo3.png")
        this.load.audio("musica", "public/assets/sounds/theSoundOfTheDungeon.wav")
        this.load.audio("daño", "public/assets/sounds/danio.wav")
        this.load.audio("golpe", "public/assets/sounds/golpejefe.wav")
        this.load.audio("muerte", "public/assets/sounds/muerte.wav")
      }
    
      create() {
        this.scene.start("MainMenu");
      }
    
}