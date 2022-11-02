import Phaser from 'phaser'

import { Personaje } from "../Controladores/Personajes";

export default class Descanso extends Phaser.Scene
{

hum1;
hum2;
hum3;
criaturas;
mapa;
tcant;

	constructor()
	{
		super('Descanso')
	}

    init(data) {
        this.hum1 = data.hum1;
        this.hum2 = data.hum2;
        this.hum3 = data.hum3;
        this.mapa = data.mapa;
        this.criaturas = data.criaturas;
    }
    
create() {
  
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondoDescanso');
  
  /////////////////////////////////////////////////////////// carteles
  var texto1 = this.add.text(330,580, "cura +1", {
    fontSize: "50px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  var texto2 = this.add.text(800,580, "vida máxima +1", {
    fontSize: "50px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  var texto3 = this.add.text(1420,580, "ataque +1", {
    fontSize: "50px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  this.tcant = this.add.text(520, 80, "Selecciona una de las mejoras", {
    fontSize: "70px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })

  /////////////////////////////////////////////////////////// sprites humanos
  this.hum1 = new Personaje(
    this.hum1.nombre,
    this.hum1.ataque,
    this.hum1.vida,
    this.hum1.vidaMax,
    this,
    500,
    890,
    this.hum1.key_asset,
    this.hum1.tipo
  );
  this.hum2 = new Personaje(
    this.hum2.nombre,
    this.hum2.ataque,
    this.hum2.vida,
    this.hum2.vidaMax,
    this,
    950,
    890,
    this.hum2.key_asset,
    this.hum2.tipo
  );
  this.hum3 = new Personaje(
    this.hum3.nombre,
    this.hum3.ataque,
    this.hum3.vida,
    this.hum3.vidaMax,
    this,
    1450,
    890,
    this.hum3.key_asset,
    this.hum3.tipo
  );
  this.hum1.setScale(4);
  this.hum2.setScale(4);
  this.hum3.setScale(4);  
  
  ////////////////////////////////////////////////// botones power up
  var ataque = this.add
    .image(1530,450,'masAtaque').setInteractive()
    .on('pointerdown',()=> {
      this.hum1.ataque += 1;
      this.hum2.ataque += 1;
      this.hum3.ataque += 1;
      this.scene.start("Mapa", { 
        hum1: this.hum1, 
        hum2: this.hum2, 
        hum3: this.hum3, 
        mapa: this.mapa, 
        criaturas: this.criaturas 
      });
    })
  .on('pointerover', ()=> {
    ataque.setScale(0.6)
  })
  .on('pointerout', ()=> {
    ataque.setScale(0.5)
  });
  ataque.setScale(0.5); 
          
  var vidaMax = this.add
    .image(970,450,'vidaMax').setInteractive()
    .on('pointerdown',()=> {
      this.hum1.vidaMax += 1; 
      this.hum2.vidaMax += 1;
      this.hum3.vidaMax += 1;
      this.scene.start("Mapa", { 
        hum1: this.hum1, 
        hum2: this.hum2, 
        hum3: this.hum3, 
        mapa: this.mapa, 
        criaturas: this.criaturas 
      })
    })
  .on('pointerover', ()=> {
    vidaMax.setScale(0.6)
  })
  .on('pointerout', ()=> {
    vidaMax.setScale(0.5)
  });
  vidaMax.setScale(0.5);
            
  var vida = this.add
    .image(420,450,'curarVida').setInteractive()
    .on('pointerdown',()=> {
      if (this.hum1.vida < this.hum1.vidaMax){
        this.hum1.vida += 1;
      }
      if (this.hum2.vida < this.hum2.vidaMax){
        this.hum2.vida += 1;
      }
      if (this.hum3.vida < this.hum3.vidaMax){
        this.hum3.vida += 1;
      }
      this.scene.start("Mapa", { 
        hum1: this.hum1, 
        hum2: this.hum2, 
        hum3: this.hum3, 
        mapa: this.mapa, 
        criaturas: this.criaturas 
      });
    })
  .on('pointerover', ()=> {
    vida.setScale(0.6)
  })
  .on('pointerout', ()=> {
    vida.setScale(0.5)
  });
  vida.setScale(0.5);
  }
}