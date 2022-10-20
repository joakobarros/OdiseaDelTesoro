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
   this.load.image("salaActual","assets/images/salaActual.png");
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
   this.load.image("fondoDescanso", "assets/images/descansoFondo.png")
   this.load.image("masAtaque", "assets/images/buffo2.png")
   this.load.image("vidaMax", "assets/images/buffo1.png")
   this.load.image("curarVida", "assets/images/buffo3.png")
   this.load.audio("musica", "assets/sounds/theSoundOfTheDungeon.wav")
   this.load.audio("daño", "assets/sounds/danio.wav")
   this.load.audio("golpe", "assets/sounds/golpejefe.wav")
   this.load.audio("muerte", "assets/sounds/muerte.wav")
   this.load.spritesheet("caballeroAtaque", "assets/images/caballeroAtlas.png",{frameWidth:64, frameHeight:64})
   this.load.spritesheet("arqueroAtaque", "assets/images/arqueroAtlas.png",{frameWidth:52, frameHeight:60})
   this.load.spritesheet("piromanoAtaque", "assets/images/piromanoAtlas.png",{frameWidth:64, frameHeight:64})
   this.load.spritesheet("jefeAtaque", "assets/images/jefeAtlas.png",{frameWidth:98, frameHeight:75})
   this.load.spritesheet("esqueletosIdle", "assets/images/esqueletosAtlas.png",{frameWidth:70, frameHeight:61})
   this.load.spritesheet("magoAtaque", "assets/images/magoAtlas.png",{frameWidth:64, frameHeight:64})

   ///////// provisional
   this.load.image("arqueroV", "assets/images/ArqueroV.png")
   this.load.image("caballeroV", "assets/images/CaballeroV.png")
   this.load.image("piromanoV", "assets/images/PiromanoV.png")
   this.load.image("jefeV", "assets/images/jefeV.png")
   this.load.image("esqueletosV", "assets/images/EsqueletosV.png")
   this.load.image("polillaV", "assets/images/polillaV.png")
   this.load.image("magoV", "assets/images/MagoV.png")
  }
    
  create() {

//////////////////////////////// animaciones
  this.anims.create({
    key: "cabAtk",
    frames: this.anims.generateFrameNumbers("caballeroAtaque",{start:0, end:4}),
    frameRate: 4,
    repeat: -1,
  })

  this.anims.create({
    key: "arqAtk",
    frames: this.anims.generateFrameNumbers("arqueroAtaque",{start:0, end:3}),
    frameRate: 4,
    repeat: -1,
  })

  this.anims.create({
    key: "piroAtk",
    frames: this.anims.generateFrameNumbers("piromanoAtaque",{start:0, end:7}),
    frameRate: 4,
    repeat: -1,
  })

  this.anims.create({
    key: "esqAtk",
    frames: this.anims.generateFrameNumbers("esqueletosIdle",{start:0, end:3}),
    frameRate: 15,
    repeat: 1,
  })

  this.anims.create({
    key: "jefeAtk",
    frames: this.anims.generateFrameNumbers("jefeAtaque",{start:0, end:5}),
    frameRate: 10,
    repeat: 1,
  })

  this.scene.start("MainMenu");
  }
    
}