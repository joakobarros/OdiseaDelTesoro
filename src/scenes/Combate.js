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
  criatMuertas;
  humMuertos;

  constructor() {
    super("Combate");
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

    console.log(this.data);

    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "fondocombate"
    );
    this.humanos = [];
    this.criaturas = [];
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
      this.hum1.key_idle,
      this.hum1.key_atk,
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
      this.hum2.key_idle,
      this.hum2.key_atk,
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
      this.hum3.key_idle,
      this.hum3.key_atk,
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
          fontFamily: "Pixel",
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
      this.criat1.key_idle,
      this.criat1.key_atk,
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
      this.criat2.key_idle,
      this.criat2.key_atk,
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
      this.criat3.key_idle,
      this.criat3.key_atk,
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
        criatura.vida + "/" + criatura.vidaMax,
        {
          fontSize: "50px",
          //fill: "#FFFFFF",
          fontFamily: "Pixel",
        }
      );
    });

     ///// invisibiliza las unidades muertas
     this.humanos.forEach(humano => {
      if (humano.vida == 0) {
        humano.visible = false;
        humano.vidaText.visible = false;
      }
    });

    //////// animaciones idle
    this.humanos[0].anims.play(this.humanos[0].key_idle, true);
    this.humanos[1].anims.play(this.humanos[1].key_idle, true);
    this.humanos[2].anims.play(this.humanos[2].key_idle, true);
    this.criaturas[0].anims.play(this.criaturas[0].key_idle, true);
    this.criaturas[1].play(this.criaturas[1].key_idle, true);
    this.criaturas[2].play(this.criaturas[2].key_idle, true);

    // Al iniciar, se asigna el primer humano como el que tiene el turno
    if (this.humanos[0].vida <= 0) {
      if (this.humanos[1].vida <= 0) {
        this.PersonajeAtacante = this.humanos[2];
        this.humanos[2].anims.play(this.humanos[2].key_atk, true);
        this.ultimoTurnoHumano = 2;
      }else{ 
      this.PersonajeAtacante = this.humanos[1];
      this.humanos[1].anims.play(this.humanos[1].key_atk, true);
      this.ultimoTurnoHumano = 1;
      }
    } else {
      this.PersonajeAtacante = this.humanos[0];
      this.humanos[0].anims.play(this.humanos[0].key_atk, true);
      this.ultimoTurnoHumano = 0;
    }
    
    this.turno = "HUMANO";
    this.PersonajeAtacante.setScale(5);

    // Los arrays son base 0, o sea que el primer elemento es el 0
    this.ultimoTurnoCriatura = -1;

    this.Tturno = this.add.text(650, 150, "turno: " + this.turno, {
      fontSize: "80px",
      //fill: "#FFFFFF",
      fontFamily: "Pixel",
    });

    ////////////////////////////////////////////// boton atacar
    var atacar = this.add
      .image(950, 910, "boton")
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

    this.atacartxt = this.add.text(790, 860, "atacar", {
      fontSize: "80px",
      fill: "#330C03",
      fontFamily: "Pixel",
    });

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
    this.criatMuertas = 0;
    this.humMuertos = 0;
    this.criaturas.forEach((criatura) => {
        if (criatura.vida <= 0){
          this.criatMuertas += 1;
        }
        if (this.criatMuertas == 3) {
          setTimeout(()=>{ 
            this.scene.start("Mapa", { 
              hum1: this.humanos[0], 
              hum2: this.humanos[1], 
              hum3: this.humanos[2], 
              mapa: this.mapa, 
              criaturas: this.criaturasT 
            })},1000)
        }
      });
    this.humanos.forEach((humano) =>{
      if (humano.vida <= 0) {
        this.humMuertos += 1;
      }
      if (this.humMuertos == 3) {
        setTimeout(()=>{
          this.scene.start("WinGuardian"
        )},1000)
      }   
    })
    
    ///// cambio de turno
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
      if (this.criaturas[this.ultimoTurnoCriatura].vida <= 0) {
        this.handleCambioTurno();
      }else{
        this.PersonajeAtacante.anims.play(this.PersonajeAtacante.key_idle, true)
        this.PersonajeAtacante = this.criaturas[this.ultimoTurnoCriatura];
        this.PersonajeAtacante.setScale(5);
        // funcion con animaciones de ataque
        this.PersonajeAtacante.anims.play(this.PersonajeAtacante.key_atk, true)
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
      if (this.humanos[this.ultimoTurnoHumano].vida <= 0) {

        this.handleCambioTurno();
      }else{
        this.PersonajeAtacante.anims.play(this.PersonajeAtacante.key_idle, true)
        this.PersonajeAtacante = this.humanos[this.ultimoTurnoHumano];
        this.PersonajeAtacante.setScale(5);
        this.PersonajeAtacante.anims.play(this.PersonajeAtacante.key_atk, true)
        // funcion con animaciones de ataque
      }
    }
    this.Tturno.setText("turno: " + this.turno);
  }

  handleAtaque(personajeAtacante, personajeAtacado) {
    //personajeAtacante.anims.play(personajeAtacante.animAtaque, true);
    //personajeAtacante.anims.play(personajeAtacante.animIDLE, true);
    if (personajeAtacado.vida > 0) {
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
        personajeAtacado.visible = false;
        personajeAtacado.vidaText.visible = false;
        this.muerte.play();
      }else{
        this.daño.play();
      }

      this.handleCambioTurno();
    }
  }
}