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

  init(data) {
    this.hum1 = data.hum1;
    this.hum2 = data.hum2;
    this.hum3 = data.hum3;
    this.mapa = data.mapa;
    this.criaturas = data.criaturas;
  }

  create() {
    //////////////////////////////////////////////// variante de mapa

    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, "mapa");
  
    let sala = new Sala("s1", "Descanso", ["s2", "s5"], 1204, 200);
    this.salas.push(sala);
    sala = new Sala("s2", "Combate", ["s3", "s1"], 1204, 430);
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
    
    this.salas.map((sala) => {
      if (sala.nombre == this.mapa.salaActual) {
        for (let p = 0; p < sala.salasPosibles.length; p++) {
          const salaPos = sala.salasPosibles[p];
          if (!this.mapa.salasPosibles.includes(salaPos)) {
            this.mapa.salasPosibles.push(salaPos);
          }
        }
        sala = this.add.image(sala.posX, sala.posY, "salaActual");
      }
    });
    
    this.salas.forEach(sala => {
      if (this.mapa.salasPosibles.includes(sala.nombre) && !this.mapa.salasPasadas.includes(sala.nombre)) {  
        let salaActiva = this.add
          .image(sala.posX, sala.posY, "salaDisponible")
          .setInteractive();
        salaActiva.on("pointerover", () => {
          salaActiva.setScale(1.1);
        });
        salaActiva.on("pointerout", () => {
          salaActiva.setScale(1);
        });
        salaActiva.on("pointerdown", () => {
          this.mapa.salasPasadas.push(this.mapa.salaActual);
          this.mapa.salaActual = sala.nombre;
          this.mapa.salasPasadas.push(this.mapa.salaActual);
          
          if (sala.tipo == "Combate") {
            this.scene.start("SelectorCriaturas", {
              hum1: this.hum1,
              hum2: this.hum2,
              hum3: this.hum3,
              criaturas: this.criaturas,
              mapa: this.mapa
            });
          }

          if (sala.tipo === "Descanso") {
            this.scene.start("Descanso", {
              hum1: this.hum1,
              hum2: this.hum2,
              hum3: this.hum3,
              criaturas: this.criaturas,
              mapa: this.mapa,
            });
          }

          if (sala.tipo === "CombateJefe") {
            this.scene.start("CombateJefe", {
              hum1: this.hum1,
              hum2: this.hum2,
              hum3: this.hum3,
            });
          }
        });
        
      }else{ 
        if (this.mapa.salasPasadas.includes(sala.nombre) && this.mapa.salaActual != sala.nombre) {
          sala =this.add.image(sala.posX,sala.posY,"salaPasada");
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

    this.hum1 = new Personaje(
      this.hum1.nombre,
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