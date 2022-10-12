import Phaser from 'phaser'

export default class Preloads extends Phaser.Scene
{
	constructor()
	{
		super('Preloads')
	}

	preload() {
        this.load.image("fondomenu", "assets/images/mainmenu.png");
        this.load.image("arquero", "assets/images/arqueroIdle.png");
        this.load.image("caballero", "assets/images/caballeroIdle.png");
        this.load.image("piromano","assets/images/piromanoIdle.png");
        this.load.image("mago","assets/images/mago.png");
        this.load.image("esqueletos","assets/images/esqueletos.png");
        this.load.image("polilla","assets/images/polilla.png");
        this.load.image("logo","assets/images/logo.png");
        this.load.image("jefe", "assets/images/jefe.png");
        this.load.image("mapa","assets/images/mapa.png");
        this.load.image("salaDisponible","assets/images/salaDisponible.png");
        this.load.image("mas", "assets/images/mas.png");
        this.load.image("menos", "assets/images/menos.png");
        this.load.image("creditos", "assets/images/creditos.png");
        this.load.image("jugar", "assets/images/jugar.png");
        this.load.image("opciones", "assets/images/opciones.png");
        this.load.image("pausa", "assets/images/pausa.png");
        this.load.image("salir", "assets/images/salir.png");
        this.load.image("volver", "assets/images/volver.png");
        this.load.image("continuar", "assets/images/continuar.png");
        this.load.image("atacar", "assets/images/atacar.png");
        this.load.image("winGuardian", "assets/images/winguardian.png")
        this.load.image("winHumanos", "assets/images/winhumanos.png")
        this.load.image("selector", "assets/images/selector.png")
        this.load.image("fondocombate", "assets/images/combatefondo.png")
        this.load.image("masAtaque", "assets/images/buffo2.png")
        this.load.image("vidaMax", "assets/images/buffo1.png")
        this.load.image("curarVida", "assets/images/buffo3.png")
        this.load.audio("musica", "assets/sounds/theSoundOfTheDungeon.wav")
        this.load.audio("daño", "assets/sounds/danio.wav")
        this.load.audio("golpe", "assets/sounds/golpejefe.wav")
        this.load.audio("muerte", "assets/sounds/muerte.wav")
      }
    
      create() {
        this.scene.start("MainMenu");
      }
    
}