import Phaser, { Tilemaps } from "phaser";
import { Sala } from "../Controladores/Salas";
import { sharedInstance as events } from "../scenes/EventCenter";
import { Personaje } from "../Controladores/Personajes";
import { getPhrase } from '../services/translations'

export default class Mapa extends Phaser.Scene {
 
  salas = [];

  constructor() {
    super("Mapa");
  }

  init(data) {                          // init:
    this.hum1 = data.hum1;              // son datos que vienen desde una pantalla anterior
    this.hum2 = data.hum2;              // y que pueden usarse en la actual
    this.hum3 = data.hum3;
    this.mapa = data.mapa;
    this.criaturas = data.criaturas;
  }

  create() {
    //////////////////////////////////////////////// variante de mapa

    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, "mapa");
  
    let sala = new Sala("s1", "Descanso", ["s2", "s5"], 1204, 200);  // <== se crea una nueva instancia de la clase sala
    this.salas.push(sala);                                        // <== y se agrega al array de salas
    sala = new Sala("s2", "Combate", ["s3", "s1"], 1204, 430);     // (revisen los comentarios de salas.js para ver que es cada dato)
    this.salas.push(sala);
    sala = new Sala("s3", "Descanso", ["s4","s2"], 1204, 650);
    this.salas.push(sala);
    sala = new Sala("s4", "Combate", ["s8", "s3"], 1204, 876);
    this.salas.push(sala);
    sala = new Sala("s5", "Combate", ["s9", "s6", "s1"], 960, 200);
    this.salas.push(sala);
    sala = new Sala("s6", "Descanso", ["s10", "s7","s5"], 960, 430);
    this.salas.push(sala);
    sala = new Sala("s7", "Combate", ["s6", "s11","s8"], 960, 650);
    this.salas.push(sala);
    sala = new Sala("s8", "Descanso", ["s12", "s7","s4"], 960, 876);
    this.salas.push(sala);
    sala = new Sala("s9", "Descanso", ["s10", "s5"], 710, 200);
    this.salas.push(sala);
    sala = new Sala("s10", "Combate", ["s9", "s6"], 710, 430);
    this.salas.push(sala);
    sala = new Sala("s11", "Descanso", ["s12", "s7"], 710, 650);
    this.salas.push(sala);
    sala = new Sala("s12", "CombateJefe", [], 710, 876);
    this.salas.push(sala);
    
    this.salas.map((sala) => {                                    /////   1° definir la sala actual:
      if (sala.nombre == this.mapa.salaActual) {                     //     con la funcion .map el programa busca dentro del array de salas
        for (let p = 0; p < sala.salasPosibles.length; p++) {        //     cual coincide con el nombre de la sala actual en los datos
          const salaPos = sala.salasPosibles[p];                     //     del mapa.
          if (!this.mapa.salasPosibles.includes(salaPos)) {          //
            this.mapa.salasPosibles.push(salaPos);                   //     despues con un for que se va a ejecutar por la cantidad de
          }                                                          //     salas que la sala actual tenga como salas posibles
        }                                                            //     y va a agregar cada una de esas salas al array de salas posibles
        sala = this.add.image(sala.posX, sala.posY, "salaActual");   //     dentro del mapa, siempre y cuando el nombre de la sala posible no esté
      }                                                              //     ya en como sala posible
    });                                                           /////
                      
    this.salas.forEach(sala => {     // forEach: funcion que ejecuta un determinado codigo para todos los elementos de un arary
      if (this.mapa.salasPosibles.includes(sala.nombre) && !this.mapa.salasPasadas.includes(sala.nombre)) {  // <== esta condición dice que solo se va a 
        let salaActiva = this.add                                                                            // ejecutar si el nombre de la sala esta
          .image(sala.posX, sala.posY, "salaDisponible")                                                     // en salas posibles pero no esta en
          .setInteractive();                                                                                 // salas pasadas
        salaActiva.on("pointerover", () => {
          salaActiva.setScale(1.1);
        });
        salaActiva.on("pointerout", () => {
          salaActiva.setScale(1);
        });
        salaActiva.on("pointerdown", () => {                    // si pasa a esta parte del codigo:
          this.mapa.salasPasadas.push(this.mapa.salaActual);    // se le pone la imagen de sala posible y 
          this.mapa.salaActual = sala.nombre;                   // se lo establece como interactivo (un boton)
          this.mapa.salasPasadas.push(this.mapa.salaActual);    // que cuando lo clickeas: 
                                                                // el nombre de la sala actual y de la sala seleccionada 
          if (sala.tipo == "Combate") {                         // se suma al array de salas pasadas y el nombre de la sala
            this.scene.start("SelectorCriaturas", {             // pasa a ser la sala actual
              hum1: this.hum1,
              hum2: this.hum2,                                  // despues, segun el tipo de la sala (combate, deescanso o combateJefe)
              hum3: this.hum3,                                  // va a pasar a una escena o la otra
              criaturas: this.criaturas,
              mapa: this.mapa
            });
          }

          if (sala.tipo === "Descanso") {
            this.scene.start("Descanso", {  ////
              hum1: this.hum1,                // estos son datos que van a pasar 
              hum2: this.hum2,                // como init a la pantalla siguiente
              hum3: this.hum3,                //
              criaturas: this.criaturas,      //
              mapa: this.mapa,                //
            });                             ////
          }

          if (sala.tipo === "CombateJefe") {
            this.scene.start("CombateJefe", {
              hum1: this.hum1,
              hum2: this.hum2,
              hum3: this.hum3,
            });
          }
        });
                       // en caso de que no entre en la primera parte de codigo:
      }else{           // <== si el nombre de la sala esta dentro de salas pasadas y no es la sala actual                                                  
        if (this.mapa.salasPasadas.includes(sala.nombre) && this.mapa.salaActual != sala.nombre) {  
          sala =this.add.image(sala.posX,sala.posY,"salaPasada");  // entonces solo se ubica la imagen de sala pasada su posición
        }
      }
    });
    
    //////////////////////////////////////////////////// estadisticas
    const vidatxt = getPhrase('Vida: ')
    const dañotxt = getPhrase('Daño: ')

    this.atk1 = this.add.text(240, 150, dañotxt + this.hum1.ataque, 
      { 
        fontSize: "37px", 
        fontFamily: "Pixel",
      }
    );

    this.vida1 = this.add.text(240, 200, vidatxt + this.hum1.vida + "/" + this.hum1.vidaMax,
      { 
        fontSize: "37px", 
        fontFamily: "Pixel",
      }
    );

    this.atk2 = this.add.text(240, 500, dañotxt + this.hum2.ataque, 
      { 
        fontSize: "37px", 
        fontFamily: "Pixel",
      }
    );

    this.vida2 = this.add.text(240, 550, vidatxt + this.hum2.vida + "/" + this.hum2.vidaMax,
      { 
        fontSize: "37px", 
        fontFamily: "Pixel",
      }
    );

    this.atk3 = this.add.text(240, 840, dañotxt + this.hum3.ataque, 
      { 
        fontSize: "37px", 
        fontFamily: "Pixel",
      }
    );

    this.vida3 = this.add.text(240, 890, vidatxt + this.hum3.vida + "/" + this.hum3.vidaMax,
      { 
        fontSize: "37px", 
        fontFamily: "Pixel",
      }
    );

    this.cantCriaturas = this.add.text(1475, 775, getPhrase('Criaturas: ') + this.criaturas,
      { 
        fontSize: "43px", 
        fontFamily: "Pixel",
      }
    );

    let calavera = this.add.image(1630, 670, "calavera");
    calavera.setScale(2.5);

    let pausa = this.add
      .image(1625, 320, "boton")
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("Pausa");
      })
      .on("pointerover", () => {
        pausa.setScale(5.2);
      })
      .on("pointerout", () => {
        pausa.setScale(5);
      });
    pausa.setScale(5);

    this.pausatxt = this.add.text(1490, 270, getPhrase('Pausa'),
      { 
        fontSize: "80px", 
        fill: "#330C03", 
        fontFamily: "Pixel",
      }
    );
                                                // en esta parte se asignan todos los datos que pasaron como
    this.hum1 = new Personaje(                  // init de la pantalla anterior a los personajes que se van a 
      this.hum1.nombre,                         // mostrar en la pantalla
      this.hum1.ataque,
      this.hum1.vida,
      this.hum1.vidaMax,
      this,
      170,
      190,
      this.hum1.keyAsset,
      this.hum1.keyIdle,
      this.hum1.keyAtk,
      this.hum1.tipo
    );
    this.hum2 = new Personaje(
      this.hum2.nombre,
      this.hum2.ataque,
      this.hum2.vida,
      this.hum2.vidaMax,
      this,
      170,
      540,
      this.hum2.keyAsset,
      this.hum2.keyIdle,
      this.hum2.keyAtk,
      this.hum2.tipo
    );
    this.hum3 = new Personaje(
      this.hum3.nombre,
      this.hum3.ataque,
      this.hum3.vida,
      this.hum3.vidaMax,
      this,
      170,
      880,
      this.hum3.keyAsset,
      this.hum3.keyIdle,
      this.hum3.keyAtk,
      this.hum3.tipo
    );
    this.hum1.setScale(2);
    this.hum2.setScale(2);
    this.hum3.setScale(2);
    this.hum1.anims.play(this.hum1.keyIdle, true);
    this.hum2.anims.play(this.hum2.keyIdle, true);
    this.hum3.anims.play(this.hum3.keyIdle, true);
  }
}