import Phaser from 'phaser'
import { sharedInstance as events } from "../scenes/EventCenter";
import { Personaje } from "../Controladores/Personajes";

export default class CombateJefe extends Phaser.Scene{

  hum1;
  hum2;
  hum3;
  vidaH1;
  vidaH2;
  vidaH3;
  vidaJefe;
  ataque;
  jefe;
  turno;
  Tturno;
  daño;
  muerte;
  golpe;

  // INDICE DEL ULTIMO PERSONAJE QUE ATACO
  ultimoTurnoHumano;
  ultimoTurnoCriatura;

  // Personaje al que le corresponde el turno
  PersonajeAtacante;
  // Personaje clickado para atacarlo
  personajeAtacar;

  // lista de humanos
  humanos;

	constructor()
	{
		super('CombateJefe')
	}

  init(data) {
    this.hum1 = data.hum1;
    this.hum2 = data.hum2;
    this.hum3 = data.hum3;
  }
  
  create() {    
  
    this.humanos = [];
    console.log(this.data);
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondocombate');

    ////////////////////////////////////////////////////// sonidos
    this.daño = this.sound.add('daño', {loop: false});
    this.muerte = this.sound.add('muerte', {loop: false});
    this.golpe = this.sound.add('golpe', {loop: false});
    
    ////////////////////////////////////////////////////// jefe
    this.jefe = new Personaje(
      "Guardian",
      3,
      30,
      30,
      this,
      1450,
      500,
      "jefeAtaque",
      "CRIATURA"
    );
    this.jefe.setScale(8);
    this.vidaJefe = this.add.text(1430, 753, this.jefe.vida + "/" + this.jefe.vidaMax), {
      fontSize: "50px",
      fontFamily: "georgia",
    };
    this.vidaJefe.setScale(4);
    
    ////////////////////////////////////////////// selector de sprites humanos
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

      /// inicio del combate
      this.PersonajeAtacante = this.humanos[0];
      this.turno = "HUMANO";
      this.PersonajeAtacante.setScale(5);
      this.ultimoTurnoHumano = 0;

    this.Tturno = this.add.text(800, 100, "turno: " + this.turno, {
      fontSize: "60px",
    })
    
    var atacar = this.add
      .image(900,950,'atacar')
      .setInteractive()
    .on('pointerdown',()=> {
      this.handleAtaque(this.PersonajeAtacante, this.personajeAtacar);
    })
    .on('pointerover',()=> {
      atacar.setScale(5.1)
    })
    .on('pointerout',()=> {
      atacar.setScale(5)
    })
    atacar.setScale(5) 

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
  //// win condition
  let humMuertos = 0;
  this.humanos.forEach((humano) =>{
    if (humano.vida <= 0) {
      humMuertos += 1;
    }
    if (humMuertos == 3) {
      setTimeout(()=>{
        this.scene.start("WinGuardian"
      )},1000)
    }   
  })
  ///// cambio de turno
  if (this.turno === "HUMANO") {
    this.PersonajeAtacante.setScale(4);
    this.ultimoTurnoHumano += 1;

    if (this.ultimoTurnoHumano == 3) {
      this.ultimoTurnoHumano = 0;
      this.turno = "CRIATURA"
      this.PersonajeAtacante.setScale(4);
      this.PersonajeAtacante = this.jefe;      
      this.PersonajeAtacante.setScale(9);
    }
    if (this.humanos[this.ultimoTurnoHumano].vida <= 0) {
      this.handleCambioTurno();
    }else{
      this.PersonajeAtacante = this.humanos[this.ultimoTurnoHumano];
      this.PersonajeAtacante.setScale(5);
      // funcion con animaciones de ataque
    }
  } else {
    this.PersonajeAtacante.setScale(4);
    this.PersonajeAtacante = this.jefe;
    this.turno = "HUMANO"
    this.PersonajeAtacante.setScale(9);
    // animacion ataque
  }
  this.Tturno.setText("turno: " + this.turno);
}
  handleAtaque(personajeAtacante, personajeAtacado) {
    if (personajeAtacado.vida > 0) {

    
      personajeAtacado.vida -= personajeAtacante.ataque;
      if (personajeAtacado.nombre == "Guardian") {
          this.jefe.vida = personajeAtacado.vida;
          this.vidaJefe.setText(personajeAtacado.vida + "/" + personajeAtacado.vidaMax);
          if (this.jefe.vida <= 0){
            setTimeout(()=>{
              this.scene.start("WinHumanos"
            )},1000)
          }
      } else {
          personajeAtacado.vidaText.setText(
          personajeAtacado.vida + "/" + personajeAtacado.vidaMax) 
      }
    
    if (personajeAtacado.vida <= 0) {
      personajeAtacado.vidaText.setText("0/" + personajeAtacado.vidaMax);
      // Hacer animacion de muerte ?
    } else {
      // Hacer animacion de ataque recibido ?
    }
    this.handleCambioTurno();}
  }
}