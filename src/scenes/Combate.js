import Phaser from 'phaser'
import { Personaje } from '../Controladores/Personajes';
import { sharedInstance as events } from '../scenes/EventCenter'


export default class Combate extends Phaser.Scene
{

 hum1;
 hum2;
 hum3;
 criaturasT;
 criat1;
 criat2;
 criat3;
 turno;
 Tturno;
 ataque = "";
 vidaH1;
 vidaH2;
 vidaH3;
 vidaC1;
 vidaC2;
 vidaC3;
 daño;
 muerte;
 mapa
 turnoTipo = "HUMANO";
 criaturas;
 humanos;


	constructor()
	{
		super('Combate')
	}

	init(data) {
        this.hum1 = data.hum1;
        this.hum2 = data.hum2;
        this.hum3 = data.hum3;
        this.mapa = data.mapa;
        this.criaturasT = data.criaturas;
        this.criat1 = data.criat1;
        this.criat2 = data.criat2;
        this.criat3 = data.criat3;
        console.log(data);
    }
  
create() {
  
    this.turno = 1;

    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondocombate');
  
  ////////////////////////////////////////////// sonidos
  this.daño = this.sound.add('daño', {loop: false});
  this.muerte = this.sound.add('muerte', {loop: false});
      
  
  ////////////////////////////////////////////// carteles de salud
  this.vidaH1 = this.add.text(160,753,this.hum1.vida + "/" + this.hum1.vidaMax, {
    fontSize: "50px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  this.vidaH2 = this.add.text(420, 753, this.hum2.vida + "/" + this.hum2.vidaMax, {
    fontSize: "50px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  this.vidaH3 = this.add.text(700, 753, this.hum3.vida + "/" + this.hum3.vidaMax, {
    fontSize: "50px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  this.vidaC1 = this.add.text(1170, 753, this.criat1.vida + "/" + this.criat1.vidaMax, {
    fontSize: "50px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  this.vidaC2 = this.add.text(1430, 753, this.criat2.vida + "/" + this.criat2.vidaMax, {
    fontSize: "50px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  this.vidaC3 = this.add.text(1670, 753, this.criat3.vida + "/" + this.criat3.vidaMax, {
    fontSize: "50px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  this.Tturno = this.add.text(850, 150, "turno: " + this.turno, {
    fontSize: "80px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  ////////////////////////////////////////////// selector de sprites humanos
  this.hum1 = new Personaje(this.hum1.nombre, this.hum1.ataque, this.hum1.vida, this.hum1.vidaMax, this, 200, 535, this.hum1.key_asset, this.hum1.tipo)
  this.hum2 = new Personaje(this.hum2.nombre, this.hum2.ataque, this.hum2.vida, this.hum2.vidaMax, this, 450, 535, this.hum2.key_asset, this.hum2.tipo)
  this.hum3 = new Personaje(this.hum3.nombre, this.hum3.ataque, this.hum3.vida, this.hum3.vidaMax, this, 700, 535, this.hum3.key_asset, this.hum3.tipo)
  this.hum1.setScale(4);
  this.hum2.setScale(4);
  this.hum3.setScale(4);

  this.humanos= [this.hum1,this.hum2,this.hum3];

  ////////////////////////////////////////////// selector de sprites criaturas
  this.criat1 = new Personaje(this.criat1.nombre, this.criat1.ataque, this.criat1.vida, this.criat1.vidaMax, this, 1200, 535, this.criat1.key_asset, this.criat1.tipo)
  this.criat2 = new Personaje(this.criat2.nombre, this.criat2.ataque, this.criat2.vida, this.criat2.vidaMax, this, 1450, 535, this.criat2.key_asset, this.criat2.tipo)
  this.criat3 = new Personaje(this.criat3.nombre, this.criat3.ataque, this.criat3.vida, this.criat3.vidaMax, this, 1700, 535, this.criat3.key_asset, this.criat3.tipo)
  this.criat1.setScale(4);
  this.criat2.setScale(4);
  this.criat3.setScale(4);

  this.criaturas= [this.criat1,this.criat2,this.criat3];

  
  var atacar = this.add.image(950,910,'atacar').setInteractive()
  .on('pointerdown',()=> {this.ataque = "si" })
  .on('pointerover',()=> {atacar.setScale(5.1)})
  .on('pointerout',()=> {atacar.setScale(5)})
  atacar.setScale(5)

/////////// EVENTOS
  events.on('Personaje_atacado', this.handlePersonajeAtacado, this)
  events.on('ataque_uno_a_otro', this.handleAtaque, this)

  
}
  
  
update(){
  
  ///////////////////////////////////////////////// win condition
    if (this.hum1.vida <= 0 && this.hum3.vida <= 0 && this.hum2.vida <= 0) {
      setTimeout(()=>{ this.scene.start("WinGuardian")},1000)
    }

    if (this.criat1.vida <= 0 && this.criat2.vida <= 0 && this.criat3.vida <= 0) {
      setTimeout(()=>{ 
        this.turno = 1;
        this.scene.start("Mapa", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, mapa: this.mapa, criaturas: this.criaturasT })}
        ,1000) 
    }
  
  
  ///////////////////////////////////////////////// eliminar unidades
  if (this.hum1.vida <= 0) {
    this.hum1.destroy();
    this.vidaH1.text  = "";
  }
  if (this.hum2.vida <= 0) {
    this.hum2.destroy();
    this.vidaH2.text  = "";
  }
  if (this.hum3.vida <= 0) {
    this.hum3.destroy();
    this.vidaH3.text  = "";
  }
  if (this.criat1.vida <= 0) {
    this.criat1.destroy();
    this.vidaC1.text  = "";
  }
  if (this.criat2.vida <= 0) {
    this.criat2.destroy();
    this.vidaC2.text  = "";
  }
  if (this.criat3.vida <= 0) {
    this.criat3.destroy();
    this.vidaC3.text  = "";
  }
  
  ////////////////////////////////////////////////// indicador de turno
      
  switch (this.turno) {
    case 1:
      if (this.hum1.vida <= 0 && this.turno == 1) {
        this.turno++;
        this.Tturno.text = "turno: " +this.turno;
      } else {
        this.hum1.setScale(5); 
        this.criat3.setScale(4);
        this.hum3.setScale(4);
      }
          
      break;
          
    case 2:
      if (this.criat1.vida <= 0 && this.turno == 2) {
        this.turno++;
        this.Tturno.text = "turno: " +this.turno;
      } else {
        this.criat1.setScale(5);
        this.hum1.setScale(4);
        this.criat3.setScale(4);
      }
      
      break;
  
    case 3:
      if (this.hum2.vida <= 0 && this.turno == 3) {
        this.turno++;
        this.Tturno.text = "turno: " +this.turno;
      } else {
        this.hum2.setScale(5);
        this.criat1.setScale(4);
        this.criat3.setScale(4);
        this.hum1.setScale(4);
      }
     
      break;
  
    case 4:
      if (this.criat2.vida <= 0 && this.turno == 4) {
        this.turno++;
        this.Tturno.text = "turno: " +this.turno;
      } else {
        this.criat2.setScale(5);
        this.hum2.setScale(4);
        this.criat1.setScale(4);
      }
      
      break;
  
    case 5:
      if (this.hum3.vida <= 0 && this.turno == 5) {
        this.turno++;
        this.Tturno.text = "turno: " +this.turno;
      } else {
        this.hum3.setScale(5);
        this.criat2.setScale(4);
        this.hum2.setScale(4);
      }
      
      break;
  
    case 6:
      if (this.criat3.vida <= 0 && this.turno == 6) {
        this.turno = 1;
        this.Tturno.text = "turno: " +this.turno;
      } else {
        this.criat3.setScale(5);
        this.hum3.setScale(4);
        this.criat2.setScale(4);
      }
      break;
  
    default:
      break;
  }
    
    
/*   
  //////////////////////////////////////////////// humanos
  this.humImg1.on('pointerdown',()=> {
      if (this.ataque == "si") {
        switch (this.turno) {
            case 2:
              this.hum1.vida -= this.criat1.ataque;
              this.turno++;
            if (this.hum1.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH1.text = this.hum1.vida + "/" + this.hum1.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
  
            case 4:
              this.hum1.vida -= this.criat2.ataque;
              this.turno++;
            if (this.hum1.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH1.text = this.hum1.vida + "/" + this.hum1.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
  
            case 6:
              this.hum1.vida -= this.criat3.ataque;
              this.turno = 1;
            if (this.hum1.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH1.text = this.hum1.vida + "/" + this.hum1.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
        
          default:
            break;
        }}})
        this.humImg1.on('pointerover',()=> {
      if (this.turno == 2 || this.turno == 4 || this.turno == 6) {
        this.humImg1.setScale(4.1); 
    }
    })
    this.humImg1.on('pointerout', ()=> {
      this.humImg1.setScale(4);
    })
  
    this.humImg2.on('pointerdown',()=> {
      if (this.ataque == "si") {
        switch (this.turno) {
            case 2:
              this.hum2.vida -= this.criat1.ataque;
              this.turno++;
            if (this.hum2.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH2.text = this.hum2.vida + "/" + this.hum2.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
  
            case 4:
              this.hum2.vida -= this.criat2.ataque;
              this.turno++;
            if (this.hum2.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH2.text = this.hum2.vida + "/" + this.hum2.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
  
            case 6:
              this.hum2.vida -= this.criat3.ataque;
              this.turno = 1;
            if (this.hum2.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH2.text = this.hum2.vida + "/" + this.hum2.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
        
          default:
            break;
        }}})
        this.humImg2.on('pointerover',()=> {
      if (this.turno == 2 || this.turno == 4 || this.turno == 6) {
        this.humImg2.setScale(4.1); 
      }
    })
    this.humImg2.on('pointerout', ()=> {
      this.humImg2.setScale(4);
    })
    
    this.humImg3.on('pointerdown',()=> {
      if (this.ataque == "si") {
        switch (this.turno) {
          case 2:
            this.hum3.vida -= this.criat1.ataque;
            this.turno++;
            if (this.hum3.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH3.text = this.hum3.vida + "/" + this.hum3.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
  
            case 4:
              this.hum3.vida -= this.criat2.ataque;
              this.turno++;
            if (this.hum3.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH3.text = this.hum3.vida + "/" + this.hum3.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
  
            case 6:
              this.hum3.vida -= this.criat3.ataque;
              this.turno = 1;
            if (this.hum3.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH3.text = this.hum3.vida + "/" + this.hum3.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
        
          default:
            break;
        }}})
        this.humImg3.on('pointerover',()=> {
      if (this.turno == 2 || this.turno == 4 || this.turno == 6) {
        this.humImg3.setScale(4.1); 
      }
    })
    this.humImg3.on('pointerout', ()=> {
      this.humImg3.setScale(4);
    })
  
    /////////////////////////////////////// criaturas
    this.criatImg1.on('pointerdown',()=> {
      if (this.ataque == "si") {
        switch (this.turno) {
          case 1:
            if (this.hum1.nombre == "Arquero" && this.criat1.nombre == "Polilla") {
              this.muerte.play();
              this.criat1.vida = 0;
            } else {
              if (this.hum1.nombre == "Caballero" && this.criat1.nombre == "Esqueletos") {
                this.muerte.play();
                this.criat1.vida = 0;
            } else {
              if (this.hum1.nombre == "Piromano" && this.criat1.nombre == "Mago") {
                this.muerte.play();
                this.criat1.vida = 0;
            } else {
              this.daño.play();
              this.criat1.vida -= this.hum1.ataque;
            }}}
            this.turno++;
            this.vidaC1.text = this.criat1.vida + "/" + this.criat1.vidaMax;
            this.Tturno.text = "turno: " +this.turno;
            this.ataque = "no";
            break;
  
            case 3:
              if (this.hum2.nombre == "Arquero" && this.criat1.nombre == "Polilla") {
                this.muerte.play();
                this.criat1.vida = 0;
              } else {
                if (this.hum2.nombre == "Caballero" && this.criat1.nombre == "Esqueletos") {
                  this.muerte.play();
                  this.criat1.vida = 0;
              } else {
                if (this.hum2.nombre == "Piromano" && this.criat1.nombre == "Mago") {
                  this.muerte.play();
                  this.criat1.vida = 0;
              } else {
                this.daño.play();
                this.criat1.vida -= this.hum2.ataque;
              }}}
              this.turno++;
              this.vidaC1.text = this.criat1.vida + "/" + this.criat1.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            break;
  
            case 5:
              if (this.hum3.nombre == "Arquero" && this.criat1.nombre == "Polilla") {
                this.muerte.play();
                this.criat1.vida = 0;
              } else {
                if (this.hum3.nombre == "Caballero" && this.criat1.nombre == "Esqueletos") {
                  this.muerte.play();
                  this.criat1.vida = 0;
              } else {
                if (this.hum3.nombre == "Piromano" && this.criat1.nombre == "Mago") {
                  this.muerte.play();
                  this.criat1.vida = 0;
              } else {
                this.daño.play();
                this.criat1.vida -= this.hum3.ataque;
              }}}
              this.turno++;
              this.vidaC1.text = this.criat1.vida + "/" + this.criat1.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            break;
        
          default:
            break;
        }}})
        this.criatImg1.on('pointerover',()=> {
      if (this.turno == 1 || this.turno == 3 || this.turno == 5) {
        this.criatImg1.setScale(4.1); 
      }
    })
    this.criatImg1.on('pointerout', ()=> {
      this.criatImg1.setScale(4);
    })
  
    this.criatImg2.on('pointerdown',()=> {
      if (this.ataque == "si") {
        switch (this.turno) {
          case 1:
            if (this.hum1.nombre == "Arquero" && this.criat2.nombre == "Polilla") {
              this.muerte.play();
              this.criat2.vida = 0;
            } else { 
            if (this.hum1.nombre == "Caballero" && this.criat2.nombre == "Esqueletos") {
              this.muerte.play();
              this.criat2.vida = 0;
            } else {
              if (this.hum1.nombre == "Piromano" && this.criat2.nombre == "Mago") {
                this.muerte.play();
                this.criat2.vida = 0;
            } else {
              this.daño.play();
              this.criat2.vida -= this.hum1.ataque;
            }}}
            this.turno++;
            this.vidaC2.text = this.criat2.vida + "/" + this.criat2.vidaMax;
            this.Tturno.text = "turno: " +this.turno;
            this.ataque = "no";
            break;
  
            case 3:
              if (this.hum2.nombre == "Arquero" && this.criat2.nombre == "Polilla") {
                this.criat2.vida = 0;
              } else {
              if (this.hum2.nombre == "Caballero" && this.criat2.nombre == "Esqueletos") {
                this.criat2.vida = 0;
              } else{ 
              if (this.hum2.nombre == "Piromano" && this.criat2.nombre == "Mago") {
                this.criat2.vida = 0;
              } else {
                this.daño.play();
                this.criat2.vida -= this.hum2.ataque;
              }}}
              this.turno++;
              this.vidaC2.text = this.criat2.vida + "/" + this.criat2.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            break;
  
            case 5:
              if (this.hum3.nombre == "Arquero" && this.criat2.nombre == "Polilla") {
                this.criat2.vida = 0;
              } else {
                if (this.hum3.nombre == "Caballero" && this.criat2.nombre == "Esqueletos") {
                  this.criat2.vida = 0;
              } else {
                if (this.hum3.nombre == "Piromano" && this.criat2.nombre == "Mago") {
                  this.criat2.vida = 0;
              } else {
                this.daño.play();
                this.criat2.vida -= this.hum3.ataque;
              }}}
              this.turno++;
              this.vidaC2.text = this.criat2.vida + "/" + this.criat2.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            break;
        
          default:
            break;
        }}})
        this.criatImg2.on('pointerover',()=> {
      if (this.turno == 1 || this.turno == 3 || this.turno == 5) {
        this.criatImg2.setScale(4.1); 
      }
    })
    this.criatImg2.on('pointerout', ()=> {
      this.criatImg2.setScale(4);
    })
  
    this.criatImg3.on('pointerdown',()=> {
      if (this.ataque == "si") {
        switch (this.turno) {
          case 1:
            if (this.hum1.nombre == "Arquero" && this.criat3.nombre == "Polilla") {
              this.criat3.vida = 0;
            } else {
              if (this.hum1.nombre == "Caballero" && this.criat3.nombre == "Esqueletos") {
                this.criat3.vida = 0;
            } else {
              if (this.hum1.nombre == "Piromano" && this.criat3.nombre == "Mago") {
                this.criat3.vida = 0;
            } else {
              this.daño.play();
              this.criat3.vida -= this.hum1.ataque;
            }}}
            this.turno++;
            this.vidaC3.text = this.criat3.vida + "/" + this.criat3.vidaMax;
            this.Tturno.text = "turno: " +this.turno;
            this.ataque = "no";
            break;
  
            case 3:
              if (this.hum2.nombre == "Arquero" && this.criat3.nombre == "Polilla") {
                this.criat3.vida = 0;
              } else {
                if (this.hum2.nombre == "Caballero" && this.criat3.nombre == "Esqueletos") {
                  this.criat3.vida = 0;
              } else {
                if (this.hum2.nombre == "Piromano" && this.criat3.nombre == "Mago") {
                  this.criat3.vida = 0;
              } else {
                this.daño.play();
                this.criat3.vida -= this.hum2.ataque;
              }}}
              this.turno++;
              this.vidaC3.text = this.criat3.vida + "/" + this.criat3.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            break;
  
            case 5:
              if (this.hum3.nombre == "Arquero" && this.criat3.nombre == "Polilla") {
                this.criat3.vida = 0;
              } else {
                if (this.hum3.nombre == "Caballero" && this.criat3.nombre == "Esqueletos") {
                  this.criat3.vida = 0;
              } else {
                if (this.hum3.nombre == "Piromano" && this.criat3.nombre == "Mago") {
                  this.criat3.vida = 0;
              } else {
                this.daño.play();
                this.criat3.vida -= this.hum3.ataque;
              }}}
              this.turno++;
              this.vidaC3.text = this.criat3.vida + "/" + this.criat3.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            break;
        
          default:
            break;
        }}})
        this.criatImg3.on('pointerover',()=> {
      if (this.turno == 1 || this.turno == 3 || this.turno == 5) {
        this.criatImg3.setScale(4.1); 
      }
    })
    this.criatImg3.on('pointerout', ()=> {
      this.criatImg3.setScale(4);
    })
   */
  }


  handleAtaque({atacante, atacado}){
    console.log("atacante", atacante)
    console.log("atacado", atacado)
  }
  
  handlePersonajeAtacado(personaje) {
    if (! this.turnoTipo == personaje.tipo) {
      //estar atacando a uno que no es de tu bando
  
      if (this.turnoTipo == 'HUMANO') {
        events.emit('ataque_uno_a_otro', 
          {"atacante": this.humanos[this.turno], 
          "atacado": personaje})
      } else {
        events.emit('ataque_uno_a_otro', 
          {"atacante": this.criaturas[this.turno], 
          "atacado": personaje})
  
      }
     /* 
      
      logica de cambio de bando y turno
      comprobar si esta muerto
  
      this.turnoTipo == el distinto del que habia
      this.turno === proximo numero si es criatura
      */
    }
  
  
  
    console.log("le hicieron click a ", personaje)
    events.emit('ataque_uno_a_otro', 
      {"atacante": personaje, 
      "atacado": personaje})
      /*
      if personaje.tipo "HUMANO" //al que le hacen clic es HUMANO
      events.emit('ataque_uno_a_otro', 
      {"atacante": criatura[turno], 
      "atacado": personaje})
      
      else    //al que le hacen clic es riatura
      events.emit('ataque_uno_a_otro', 
      {"atacante": humanos[turno], 
      "atacado": personaje})
      */
  }
}