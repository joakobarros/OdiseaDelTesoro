import Phaser from "phaser";
import { Personaje } from "../Controladores/Personajes";
import { sharedInstance as events } from "../scenes/EventCenter";

export default class Combate extends Phaser.Scene {
  mapa;
  criaturasT;

  //datos para gestion de turno
  turno; // contiene HUMANO o CRIATURA
  Tturno;

  // INDICE DEL ULTIMO PERSONAJE QUE ATACO
  ultimoTurnoHumano;
  ultimoTurnoCriatura;

  // Personaje al que le corresponde el turno
  PersonajeAtacante;
  // Personaje clickado para atacarlo
  personajeAtacar;

  // lista de humanos y criaturas
  criaturas;
  humanos;

  constructor() {
    super("Combate");
    this.humanos = [];
    this.criaturas = [];
  }

  init(data) {
    //console.log(data);

    this.mapa = data.mapa;
    this.criaturasT = data.criaturas;

    this.hum1 = data.hum1;
    this.hum2 = data.hum2;
    this.hum3 = data.hum3;
    this.criat1 = data.criat1;
    this.criat2 = data.criat2;
    this.criat3 = data.criat3;
  }

  create() {
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "fondocombate"
    );

    ////////////////////////////////////////////// sonidos
    this.daño = this.sound.add("daño", { loop: false });
    this.muerte = this.sound.add("muerte", { loop: false });

    /////////////////////////////////////////////// humanos
    let humano;
    humano = new Personaje(
      this.hum1.nombre,
      this.hum1.ataque,
      this.hum1.vida,
      this.hum1.vidaMax,
      this,
      200,
      535,
      this.hum1.key_asset,
      this.hum1.tipo
    );
    this.humanos.push(humano);
    humano = new Personaje(
      this.hum2.nombre,
      this.hum2.ataque,
      this.hum2.vida,
      this.hum2.vidaMax,
      this,
      450,
      535,
      this.hum2.key_asset,
      this.hum2.tipo
    );
    this.humanos.push(humano);
    humano = new Personaje(
      this.hum3.nombre,
      this.hum3.ataque,
      this.hum3.vida,
      this.hum3.vidaMax,
      this,
      700,
      535,
      this.hum3.key_asset,
      this.hum3.tipo
    );
    this.humanos.push(humano);

    //Se escalan los humanos
    this.humanos.forEach((humano) => {
      humano.setScale(4);
      // funcion de animaciones idle

      humano.vidaText = this.add.text(
        humano.x - 30,
        753,
        humano.vida + "/" + humano.vidaMax,
        {
          fontSize: "50px",
          //fill: "#FFFFFF",
          fontFamily: "georgia",
        }
      );
    });

    ////////////////////////////////////////////// criaturas
    let criatura;
    criatura = new Personaje(
      this.criat1.nombre,
      this.criat1.ataque,
      this.criat1.vida,
      this.criat1.vidaMax,
      this,
      1200,
      535,
      this.criat1.key_asset,
      this.criat1.tipo
    );
    this.criaturas.push(criatura);
    criatura = new Personaje(
      this.criat2.nombre,
      this.criat2.ataque,
      this.criat2.vida,
      this.criat2.vidaMax,
      this,
      1450,
      535,
      this.criat2.key_asset,
      this.criat2.tipo
    );
    this.criaturas.push(criatura);
    criatura = new Personaje(
      this.criat3.nombre,
      this.criat3.ataque,
      this.criat3.vida,
      this.criat3.vidaMax,
      this,
      1700,
      535,
      this.criat3.key_asset,
      this.criat3.tipo
    );
    this.criaturas.push(criatura);

    //Se escalan las criaturas
    this.criaturas.forEach((criatura) => {
      criatura.setScale(4);
      // funcion de animaciones idle

      criatura.vidaText = this.add.text(
        criatura.x - 30,
        753,
        humano.vida + "/" + humano.vidaMax,
        {
          fontSize: "50px",
          //fill: "#FFFFFF",
          fontFamily: "georgia",
        }
      );
    });

    // Al iniciar, se asigna el primer humano como el que tiene el turno
    this.PersonajeAtacante = this.humanos[0];
    this.turno = "HUMANO";

    // Los arrays son base 0, o sea que el primer elemento es el 0
    this.ultimoTurnoHumano = 0;
    this.ultimoTurnoCriatura = -1;

    this.Tturno = this.add.text(850, 150, "turno: " + this.turno, {
      fontSize: "80px",
      //fill: "#FFFFFF",
      fontFamily: "georgia",
    });

    ////////////////////////////////////////////// boton atacar
    var atacar = this.add
      .image(950, 910, "atacar")
      .setInteractive()
      .on("pointerdown", () => {
        this.handleAtaque(this.PersonajeAtacante, this.personajeAtacar);
      })
      .on("pointerover", () => {
        atacar.setScale(5.1);
      })
      .on("pointerout", () => {
        atacar.setScale(5);
      });
    atacar.setScale(5);

    /////////// EVENTOS
    events.on("click_en_personaje", this.handleClickEnPersonaje, this);
    events.on("ataque_uno_a_otro", this.handleAtaque, this);
  }

  handleClickEnPersonaje(personaje) {
    if (this.turno !== personaje.tipo) {
      //Se hizo click en un personaje del equipo contrario
      this.personajeAtacar = personaje;
      //console.log(this.PersonajeAtacante, " atacar a ", personaje);
    }
  }

  handleCambioTurno() {
    if (this.turno === "HUMANO") {
      this.PersonajeAtacante.setScale(4);
      this.turno = "CRIATURA";
      this.ultimoTurnoCriatura += 1;
      //controlar
      // que pasa cuando llega al ultimo elemento y suma una
      if (this.ultimoTurnoCriatura == 3) {
        this.ultimoTurnoCriatura = 0;
      }
      // que pasa cuando cae en un elemento que esta muerto
      // luego de controles, asignar el proximo personaje
      if (this.criaturas[this.ultimoTurnoCriatura] <= 0) {
        this.handleCambioTurno();
      }else{
        this.PersonajeAtacante = this.criaturas[this.ultimoTurnoCriatura];
        this.PersonajeAtacante.setScale(5);
        // funcion con animaciones de ataque
      }
    } else {
      this.PersonajeAtacante.setScale(4);
      this.turno = "HUMANO";
      this.ultimoTurnoHumano += 1;
      //controlar
      // que pasa cuando llega al ultimo elemento y suma una
      if (this.ultimoTurnoHumano == 3) {
        this.ultimoTurnoHumano = 0;
      }
      // que pasa cuando cae en un elemento que esta muerto
      // luego de controles, asignar el proximo personaje
      if (this.humanos[this.ultimoTurnoHumano] <= 0) {
        this.handleCambioTurno();
      }else{
        this.PersonajeAtacante = this.humanos[this.ultimoTurnoHumano];
        this.PersonajeAtacante.setScale(5);
        // funcion con animaciones de ataque
      }
    }
    this.Tturno.setText("turno: " + this.turno);

    console.log("turno: ", this.turno);
    //Se le suma 1 al console log para que sea mas claro, ya que el array es base 0
    console.log("proximo turno humano: ", this.ultimoTurnoHumano + 1);
    console.log("proximo turno criatura: ", this.ultimoTurnoCriatura + 1);
  }

  handleAtaque(personajeAtacante, personajeAtacado) {
    if (
      personajeAtacante.nombre == "Arquero" && personajeAtacado.nombre == "Polilla" ||
      personajeAtacante.nombre == "Caballero" && personajeAtacado.nombre == "Esqueletos" ||
      personajeAtacante.nombre == "Piromano" && personajeAtacado.nombre == "Mago"
      ){
      personajeAtacado.vida = 0;
    } else {
      personajeAtacado.vida -= personajeAtacante.ataque;
      personajeAtacado.vidaText.setText(
      personajeAtacado.vida + "/" + personajeAtacado.vidaMax
    );
    }
    

    if (personajeAtacado.vida <= 0) {
      personajeAtacado.vidaText.setText("0/" + personajeAtacado.vidaMax);
      // Hacer animacion de muerte ?
    } else {
      // Hacer animacion de ataque recibido ?
    }

    if (this.turno === "HUMANO") {
      //comprobar si hay al menos una CRIATURA viva
      //SINO, HUMANO GANA
      if (this.criat1.vida <= 0 && this.criat2.vida <= 0 && this.criat3.vida <= 0) {
        setTimeout(()=>{ 
          this.scene.start("Mapa", { 
            hum1: this.hum1, 
            hum2: this.hum2, 
            hum3: this.hum3, 
            mapa: this.mapa, 
            criaturas: this.criaturasT 
          })},1000) 
      }
    } else {
      //comprobar si hay al menos un HUMANO vivo
      //SINO, CRIATURA GANA
      if (this.hum1.vida <= 0 && this.hum3.vida <= 0 && this.hum2.vida <= 0) {
        setTimeout(()=>{ this.scene.start("WinGuardian")},1000)
    }
    this.handleCambioTurno();
    }
  }
}
/*
  update() {
  
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
