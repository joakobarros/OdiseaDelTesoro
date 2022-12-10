import Phaser from "phaser";
import { Personaje } from "../Controladores/Personajes";
import { sharedInstance as events } from "../scenes/EventCenter";
import { getPhrase } from '../services/translations'

export default class Combate extends Phaser.Scene {
 /* mapa;
  criaturasT;
  //datos para gestion de turno
  turno; // contiene HUMANO o CRIATURA
  Tturno;*/
  turnoTxt = getPhrase('Turno: ')/*
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
*/
  constructor() {
    super("Combate");
  }

  init(data) {
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
      this.hum1.vida,                    // en esta parte se pasan todos los datos de los personajes 
      this.hum1.vidaMax,                 // y se los agrega a un array de humanos
      this,
      200,
      535,
      this.hum1.keyAsset,
      this.hum1.keyIdle,
      this.hum1.keyAtk,
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
      this.hum2.keyAsset,
      this.hum2.keyIdle,
      this.hum2.keyAtk,
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
      this.hum3.keyAsset,
      this.hum3.keyIdle,
      this.hum3.keyAtk,
      this.hum3.tipo
    );
    this.humanos.push(humano);

    //Se escalan los humanos
    this.humanos.forEach((humano) => {                         // con un forEach
      if (humano.vida != 0) {                                  // se establece la posición, la escala,
        humano.setScale(4);                                    // la animación que ejecutan los personajes
        humano.play(humano.keyIdle, true)                      // y el cartel de vida de cada uno
  
        humano.vidaText = this.add.text(humano.x - 30, 753, 
          humano.vida + "/" + humano.vidaMax,
          {
            fontSize: "50px",
            fontFamily: "Pixel",
          }
        );
      }
    });

    ////////////////////////////////////////////// criaturas
    let criatura;
    criatura = new Personaje(
      this.criat1.nombre,                                      // y se hace exactamente lo mismo 
      this.criat1.ataque,                                      // para las criaturas
      this.criat1.vida,
      this.criat1.vidaMax,
      this,
      1200,
      535,
      this.criat1.keyAsset,
      this.criat1.keyIdle,
      this.criat1.keyAtk,
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
      this.criat2.keyAsset,
      this.criat2.keyIdle,
      this.criat2.keyAtk,
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
      this.criat3.keyAsset,
      this.criat3.keyIdle,
      this.criat3.keyAtk,
      this.criat3.tipo
    );
    this.criaturas.push(criatura);

    //Se escalan las criaturas
    this.criaturas.forEach((criatura) => {
      criatura.setScale(4);
      criatura.play(criatura.keyIdle, true)

      criatura.vidaText = this.add.text(criatura.x - 30, 753, 
        criatura.vida + "/" + criatura.vidaMax,
        {
          fontSize: "50px",
          fontFamily: "Pixel",
        }
      );
    });

    // Al iniciar, se asigna el primer humano como el que tiene el turno
    if (this.humanos[0].vida <= 0) {
      if (this.humanos[1].vida <= 0) {
        this.PersonajeAtacante = this.humanos[2];
        this.humanos[2].anims.play(this.humanos[2].keyAtk, true);
        this.ultimoTurnoHumano = 2;                                       // este algoritmo esta pensado para que, 
      }else{                                                              // cuando empiece el combate, siempre
      this.PersonajeAtacante = this.humanos[1];                           // sea el humano más a la izquierda el que comience
      this.humanos[1].anims.play(this.humanos[1].keyAtk, true);
      this.ultimoTurnoHumano = 1;                                         // en caso de que el primero en la fila este muerto
      }                                                                   // lo sigue el de la derecha y si ese tambien esta
    } else {                                                              // muerto empieza el ultimo de la fila
      this.PersonajeAtacante = this.humanos[0];
      this.humanos[0].anims.play(this.humanos[0].keyAtk, true);           // (es para hacerlo más infalible pero no era tan necesario)
      this.ultimoTurnoHumano = 0;
    }
    
    this.turno = "HUMANO";   // despues se establece el turno de atacante
    this.PersonajeAtacante.setScale(5);  // y se cambia la escala del que ataca 
    this.ultimoTurnoCriatura = -1;  // el ultimoTurnoCriatura se establece en -1 para que despues al sumarsele 1 
                                    // sea el turno el personaje en la posición 0 del array de criaturas
    this.Tturno = this.add.text(650, 150, this.turnoTxt + this.turno, 
    {
      fontSize: "80px",
      fontFamily: "Pixel",
    });

    ////////// boton atacar
    var atacar = this.add
      .image(950, 910, "boton")
      .setInteractive()
      .on("pointerdown", () => {                                         // cuando se clickea el boton de atacar
        this.handleAtaque(this.PersonajeAtacante, this.personajeAtacar); // se ejecuta la funcion de handleAtaque con
      })                                                                 // personaje atacante (el personaje que le toca atacar)
      .on("pointerover", () => {                                         // y personaje atacado (el personaje que se clickea para atacar)
        atacar.setScale(5.1);                                            // como parametros
      })
      .on("pointerout", () => {
        atacar.setScale(5);
      });
    atacar.setScale(5);

    this.atacartxt = this.add.text(790, 860, getPhrase('Atacar'), 
    {
      fontSize: "80px",
      fill: "#330C03",
      fontFamily: "Pixel",
    });
    /////////// EVENTOS                                             // estos eventos se activan en diferentes momentos:
    events.on("click_en_personaje", this.handleClickEnPersonaje, this);    // <== cuando un personaje es clickeado se ejecuta la funcion de abajo
    events.on("ataque_uno_a_otro", this.handleAtaque, this);   // <== cuando se toca el boton de atacar
  }

  handleClickEnPersonaje(personaje) {
    if (this.turno !== personaje.tipo) {  // esta funcion hace que el personaje clickeado sea el personaje atacado
      this.personajeAtacar = personaje;
    }
  }

  handleCambioTurno() {
    /////////// win condition                             // el cambio de turno tiene 2 partes
    this.criatMuertas = 0;                                
    this.humMuertos = 0;
    this.criaturas.forEach((criatura) => {
        if (criatura.vida <= 0){
          this.criatMuertas += 1;                         // la primera es donde se establecen lo que pasa 
        }                                                 // si todos los personajes de un equipo mueren
        if (this.criatMuertas == 3) {                     
          setTimeout(()=>{                                // con 2 contadores para la cantidad de muertes de cada bando
            this.scene.start("Mapa", {                    // cada vez que se ejecute esta función, primero se hace
              hum1: this.humanos[0],                      // un forEach al array de criaturas para ver cuantas unidades muertas tiene.
              hum2: this.humanos[1],                      // En de que todas las criaturas esten muertas (el contador de muertes es
              hum3: this.humanos[2],                      // igual a 3) se vuelve al mapa, sino es asi se sigue con el codigo
              mapa: this.mapa, 
              criaturas: this.criaturasT 
            })},1000)
        }
      });
    this.humanos.forEach((humano) =>{
      if (humano.vida <= 0) {                             // y lo mismo para los humanos
        this.humMuertos += 1;                             // si el contador de muertes es igual a 3 
      }                                                   // se va directamente a la escena de winGuardian,
      if (this.humMuertos == 3) {                         // sino el codigo sigue
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

      if (this.ultimoTurnoCriatura == 3) {
        this.ultimoTurnoCriatura = 0;
      }

      if (this.criaturas[this.ultimoTurnoCriatura].vida <= 0) {
        this.handleCambioTurno();
      }else{
        this.PersonajeAtacante.anims.play(this.PersonajeAtacante.keyIdle, true)
        this.PersonajeAtacante = this.criaturas[this.ultimoTurnoCriatura];
        this.PersonajeAtacante.setScale(5);
        this.PersonajeAtacante.anims.play(this.PersonajeAtacante.keyAtk, true)
      }
    }else{
      this.PersonajeAtacante.setScale(4);
      this.turno = "HUMANO";
      this.ultimoTurnoHumano += 1;

      if (this.ultimoTurnoHumano == 3) {
        this.ultimoTurnoHumano = 0;
      }

      if (this.humanos[this.ultimoTurnoHumano].vida <= 0) {
        this.handleCambioTurno();
      }else{
        this.PersonajeAtacante.anims.play(this.PersonajeAtacante.keyIdle, true)
        this.PersonajeAtacante = this.humanos[this.ultimoTurnoHumano];
        this.PersonajeAtacante.setScale(5);
        this.PersonajeAtacante.anims.play(this.PersonajeAtacante.keyAtk, true)
      }
    }
    this.Tturno.setText(this.turnoTxt + this.turno);
  }

  handleAtaque(personajeAtacante, personajeAtacado) {
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