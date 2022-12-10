import Phaser from 'phaser'

/*
   En el preload se cargan todos los assets (imagenes, spritesheets, sonidos) 
   y se definen las animacionmes de los personajes 
*/
export default class Preloads extends Phaser.Scene
{
	constructor()
	{
		super('Preloads')
	}

	preload() {
    this.load.image("fondomenu", "assets/images/mainmenu.png");
    this.load.image("logo","assets/images/logo.png");
    this.load.image("mapa","assets/images/mapa.png");
    this.load.image("salaDisponible","assets/images/salaDisponible.png");
    this.load.image("salaActual","assets/images/salaActual.png");
    this.load.image("salaPasada","assets/images/salaPasada.png");
    this.load.image("mas", "assets/images/mas.png");
    this.load.image("menos", "assets/images/menos.png");
    this.load.image("winGuardian", "assets/images/winguardian.png")
    this.load.image("winHumanos", "assets/images/winhumanos.png")
    this.load.image("selector", "assets/images/selector.png")
    this.load.image("fondocombate", "assets/images/combatefondo.png")
    this.load.image("fondoDescanso", "assets/images/descansoFondo.png")
    this.load.image("masAtaque", "assets/images/buffo2.png")
    this.load.image("vidaMax", "assets/images/buffo1.png")
    this.load.image("curarVida", "assets/images/buffo3.png")
    this.load.image("fondoPiedras", "assets/images/fondoPiedras.png")
    this.load.image("boton", "assets/images/button1.png")
    this.load.image("calavera", "assets/images/calavera.png")
    //// sonido
    this.load.audio("musica", "assets/sounds/theSoundOfTheDungeon.wav")
    this.load.audio("daño", "assets/sounds/danio.wav")
    this.load.audio("golpe", "assets/sounds/golpejefe.wav")
    this.load.audio("muerte", "assets/sounds/muerte.wav")
    //// spritesheets
    this.load.spritesheet("caballeroAtaque", "assets/images/caballeroAtaque.png",{frameWidth:64, frameHeight:64})
    this.load.spritesheet("caballeroIdle", "assets/images/caballeroIdle.png",{frameWidth:64, frameHeight:64})
    this.load.spritesheet("arqueroAtaque", "assets/images/arqueroAtaque.png",{frameWidth:54, frameHeight:64})
    this.load.spritesheet("arqueroIdle", "assets/images/arqueroIdle.png",{frameWidth:52, frameHeight:65})
    this.load.spritesheet("piromanoAtaque", "assets/images/piromanoAtaque.png",{frameWidth:64, frameHeight:64})
    this.load.spritesheet("piromanoIdle", "assets/images/piromanoIdle.png",{frameWidth:64, frameHeight:64})
    this.load.spritesheet("jefeAtaque", "assets/images/jefeAtaque.png",{frameWidth:176, frameHeight:120})
    this.load.spritesheet("jefeIdle", "assets/images/jefeIdle.png",{frameWidth:177, frameHeight:120})
    this.load.spritesheet("esqueletosIdle", "assets/images/esqueletosIdle.png",{frameWidth:64, frameHeight:64})
    this.load.spritesheet("esqueletosAtaque", "assets/images/esqueletosAtaque.png",{frameWidth:64, frameHeight:64})
    this.load.spritesheet("magoAtaque", "assets/images/magoAtaque.png",{frameWidth:64, frameHeight:64})
    this.load.spritesheet("magoIdle", "assets/images/magoIdle.png",{frameWidth:65, frameHeight:64})
    this.load.spritesheet("polillaIdle", "assets/images/polillaIdle.png",{frameWidth:64, frameHeight:64})
    this.load.spritesheet("polillaAtaque", "assets/images/polillaAtaque.png",{frameWidth:64, frameHeight:64})
  }
  
  create() {

    //////////////////////////////// animaciones
    this.anims.create({
      key: "cabAtk",
      frames: this.anims.generateFrameNumbers("caballeroAtaque",{start:0, end:4}),
      frameRate: 6, 
      repeat: 0,
    })
    this.anims.create({
      key: "cabIdle",
      frames: this.anims.generateFrameNumbers("caballeroIdle",{start:0, end:2}),
      frameRate: 2,
      repeat: -1,
    })

    this.anims.create({
      key: "arqAtk",
      frames: this.anims.generateFrameNumbers("arqueroAtaque",{start:0, end:5}),
      frameRate: 3,
      repeat: 0,
    })
    this.anims.create({
      key: "arqIdle",
      frames: this.anims.generateFrameNumbers("arqueroIdle",{start:0, end:2}),
      frameRate: 4,
      repeat: -1,
    })

    this.anims.create({
      key: "piroAtk",
      frames: this.anims.generateFrameNumbers("piromanoAtaque",{start:0, end:7}),
      frameRate: 3,
      repeat: 0,
    })
    this.anims.create({
      key: "piroIdle",
      frames: this.anims.generateFrameNumbers("piromanoIdle",{start:0, end:2}),
      frameRate: 4,
      repeat: -1,
    })

    this.anims.create({
      key: "esqAtk",
      frames: this.anims.generateFrameNumbers("esqueletosAtaque",{start:0, end:3}),
      frameRate: 4,
      repeat: 0,
    })
    this.anims.create({
      key: "esqIdle",
      frames: this.anims.generateFrameNumbers("esqueletosIdle",{start:0, end:3}),
      frameRate: 4,
      repeat: -1,
    })

    this.anims.create({
      key: "polAtk",
      frames: this.anims.generateFrameNumbers("polillaAtaque",{start:0, end:3}),
      frameRate: 4,
      repeat: -1,
    })
    this.anims.create({
      key: "polIdle",
      frames: this.anims.generateFrameNumbers("polillaIdle",{start:0, end:2}),
      frameRate: 3,
      repeat: -1,
    })

    this.anims.create({
      key: "magoAtk",
      frames: this.anims.generateFrameNumbers("magoAtaque",{start:0, end:3}),
      frameRate: 4,
      repeat: -1,
    })
    this.anims.create({
      key: "magoIdle",
      frames: this.anims.generateFrameNumbers("magoIdle",{start:0, end:2}),
      frameRate: 2,
      repeat: -1,
    })

    this.anims.create({
      key: "jefeAtk",
      frames: this.anims.generateFrameNumbers("jefeAtaque",{start:0, end:5}),
      frameRate: 5,
      repeat: -1,
    })
    this.anims.create({
      key: "jefeIdle",
      frames: this.anims.generateFrameNumbers("jefeIdle",{start:0, end:2}),
      frameRate: 2,
      repeat: -1,
    })

    this.scene.start("MainMenu");
  }
    
}