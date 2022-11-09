import Phaser, { Tilemaps } from "phaser";
import {
  sala1,
  sala10,
  sala11,
  sala2,
  sala3,
  sala4,
  sala5,
  sala6,
  sala7,
  sala8,
  sala9,
} from "../Controladores/Salas";
import { sharedInstance as events } from "../scenes/EventCenter";
import { Personaje } from "../Controladores/Personajes";

export default class Mapa extends Phaser.Scene {
  hum1;
  hum2;
  hum3;
  criaturas;
  atk1;
  atk2;
  atk3;
  vida1;
  vida2;
  vida3;
  cantCriaturas;
  mapa;
  salaAc;

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
    let s1 = new sala1();
    let s2 = new sala2();
    let s3 = new sala3();
    let s4 = new sala4();
    let s5 = new sala5();
    let s6 = new sala6();
    let s7 = new sala7();
    let s8 = new sala8();
    let s9 = new sala9();
    let s10 = new sala10();
    let s11 = new sala11();

  console.log(this.mapa.salasPasadas)
  /// salas pasadas
  this.mapa.salasPasadas.forEach(sala => {
   this.ActivarSalaPasada(sala)
  });

    switch (this.mapa.salaActual) {
      case "s1":
        this.salaAc = this.add.image(1204, 200, "salaActual");
        this.mapa.salasPosibles = [];
        for (let p = 0; p < s1.salasPosibles.length; p++) {
          const salaPos = s1.salasPosibles[p];
          
            this.mapa.salasPosibles.push(salaPos);
        }
        this.ComprobacionSala();
        break;

      case "s2":
        this.salaAc = this.add.image(1204, 430, "salaActual");
        for (let p = 0; p < s2.salasPosibles.length; p++) {
          const salaPos = s2.salasPosibles[p];
          if (!this.mapa.salasPosibles.includes(salaPos)) {
            this.mapa.salasPosibles.push(salaPos);
          }
        }
        this.ComprobacionSala();
        break;

      case "s3":
        this.salaAc = this.add.image(1204, 650, "salaActual");
        for (let p = 0; p < s3.salasPosibles.length; p++) {
          const salaPos = s3.salasPosibles[p];
          if (!this.mapa.salasPosibles.includes(salaPos)) {
            this.mapa.salasPosibles.push(salaPos);
          }
        }
        this.ComprobacionSala();
        break;

      case "s4":
        this.salaAc = this.add.image(1204, 876, "salaActual");
        for (let p = 0; p < s4.salasPosibles.length; p++) {
          const salaPos = s4.salasPosibles[p];
          if (!this.mapa.salasPosibles.includes(salaPos)) {
            this.mapa.salasPosibles.push(salaPos);
          }
        }
        this.ComprobacionSala();
        break;

      case "s5":
        this.salaAc = this.add.image(960, 200, "salaActual");
        for (let p = 0; p < s5.salasPosibles.length; p++) {
          const salaPos = s5.salasPosibles[p];
          if (!this.mapa.salasPosibles.includes(salaPos)) {
            this.mapa.salasPosibles.push(salaPos);
          }
        }
        this.ComprobacionSala();
        break;

      case "s6":
        this.salaAc = this.add.image(960, 430, "salaActual");
        for (let p = 0; p < s6.salasPosibles.length; p++) {
          const salaPos = s6.salasPosibles[p];
          if (!this.mapa.salasPosibles.includes(salaPos)) {
            this.mapa.salasPosibles.push(salaPos);
          }
        }
        this.ComprobacionSala();
        break;

      case "s7":
        this.salaAc = this.add.image(960, 650, "salaActual");
        for (let p = 0; p < s7.salasPosibles.length; p++) {
          const salaPos = s7.salasPosibles[p];
          if (!this.mapa.salasPosibles.includes(salaPos)) {
            this.mapa.salasPosibles.push(salaPos);
          }
        }
        this.ComprobacionSala();
        break;

      case "s8":
        this.salaAc = this.add.image(960, 876, "salaActual");
        for (let p = 0; p < s8.salasPosibles.length; p++) {
          const salaPos = s8.salasPosibles[p];
          if (!this.mapa.salasPosibles.includes(salaPos)) {
            this.mapa.salasPosibles.push(salaPos);
          }
        }
        this.ComprobacionSala();
        break;

      case "s9":
        this.salaAc = this.add.image(710, 200, "salaActual");
        for (let p = 0; p < s9.salasPosibles.length; p++) {
          const salaPos = s9.salasPosibles[p];
          if (!this.mapa.salasPosibles.includes(salaPos)) {
            this.mapa.salasPosibles.push(salaPos);
          }
        }
        this.ComprobacionSala();
        break;

      case "s10":
        this.salaAc = this.add.image(710, 430, "salaActual");
        for (let p = 0; p < s10.salasPosibles.length; p++) {
          const salaPos = s10.salasPosibles[p];
          if (!this.mapa.salasPosibles.includes(salaPos)) {
            this.mapa.salasPosibles.push(salaPos);
          }
        }
        this.ComprobacionSala();
        break;

      case "s11":
        this.salaAc = this.add.image(710, 650, "salaActual");
        for (let p = 0; p < s11.salasPosibles.length; p++) {
          const salaPos = s11.salasPosibles[p];
          if (!this.mapa.salasPosibles.includes(salaPos)) {
            this.mapa.salasPosibles.push(salaPos);
          }
        }
        this.ComprobacionSala();
        break;

      default:
        break;
    }

    //////////////////////////////////////////////////// estadisticas
    this.atk1 = this.add.text(240, 150,
      "atk: " + this.hum1.ataque, 
      { fontSize: "37px", fontFamily: "Pixel",}
    );
    this.vida1 = this.add.text(240, 200,
      "vida: " + this.hum1.vida + "/" + this.hum1.vidaMax,
      { fontSize: "37px", fontFamily: "Pixel",}
    );

    this.atk2 = this.add.text(240, 500,
      "atk: " + this.hum2.ataque, 
      { fontSize: "37px", fontFamily: "Pixel",}
    );
    this.vida2 = this.add.text(240, 550,
      "vida: " + this.hum2.vida + "/" + this.hum2.vidaMax,
      { fontSize: "37px", fontFamily: "Pixel",}
    );

    this.atk3 = this.add.text(240, 840,
      "atk: " + this.hum3.ataque, 
      { fontSize: "37px", fontFamily: "Pixel",}
    );
    this.vida3 = this.add.text(240, 890,
      "vida: " + this.hum3.vida + "/" + this.hum3.vidaMax,
      { fontSize: "37px", fontFamily: "Pixel",}
    );

    this.cantCriaturas = this.add.text(1475, 775,
      "criaturas: " + this.criaturas,
      { fontSize: "43px", fontFamily: "Pixel",}
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

    this.pausatxt = this.add.text(1490, 270,
       "Pausa",
      { fontSize: "80px", fill: "#330C03", fontFamily: "Pixel",}
    );

    this.hum1 = new Personaje(
      this.hum1.nombre,
      this.hum1.ataque,
      this.hum1.vida,
      this.hum1.vidaMax,
      this,
      170,
      190,
      this.hum1.key_asset,
      this.hum1.key_idle,
      this.hum1.key_atk,
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
      this.hum2.key_asset,
      this.hum2.key_idle,
      this.hum2.key_atk,
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
      this.hum3.key_asset,
      this.hum3.key_idle,
      this.hum3.key_atk,
      this.hum3.tipo
    );
    this.hum1.setScale(2);
    this.hum2.setScale(2);
    this.hum3.setScale(2);
    this.hum1.anims.play(this.hum1.key_idle, true);
    this.hum2.anims.play(this.hum2.key_idle, true);
    this.hum3.anims.play(this.hum3.key_idle, true);
  }

  ///////////////////////////////// funcion comprobación de sala
  ComprobacionSala() {
    this.mapa.salasPosibles.map((item) => {
      if (!this.mapa.salasPasadas.includes(item) && item != this.mapa.salaActual ) {
        this.ActivarSala(item);
      }
    });
  }

  ///////////////////////////////// funcion activar sala
  ActivarSala(salaPos) {
    switch (salaPos) {
      case "s2":
        this.salaP2 = this.add
          .image(1204, 430, "salaDisponible")
          .setInteractive();
        this.salaP2.on("pointerover", () => {
          this.salaP2.setScale(1.1);
        });
        this.salaP2.on("pointerout", () => {
          this.salaP2.setScale(1);
        });
        this.salaP2.on("pointerdown", () => {
          this.mapa.salasPasadas.push(this.mapa.salaActual);
          this.mapa.salaActual = "s2";
          this.scene.start("SelectorCriaturas", {
            hum1: this.hum1,
            hum2: this.hum2,
            hum3: this.hum3,
            criaturas: this.criaturas,
            mapa: this.mapa,
          });
        });
        break;

      case "s3":
        this.salaP3 = this.add
          .image(1204, 650, "salaDisponible")
          .setInteractive();
        this.salaP3.on("pointerover", () => {
          this.salaP3.setScale(1.1);
        });
        this.salaP3.on("pointerout", () => {
          this.salaP3.setScale(1);
        });
        this.salaP3.on("pointerdown", () => {
          this.mapa.salasPasadas.push(this.mapa.salaActual);
          this.mapa.salaActual = "s3";
          this.scene.start("Descanso", {
            hum1: this.hum1,
            hum2: this.hum2,
            hum3: this.hum3,
            criaturas: this.criaturas,
            mapa: this.mapa,
          });
        });
        break;

      case "s4":
        this.salaP4 = this.add
          .image(1204, 876, "salaDisponible")
          .setInteractive();
        this.salaP4.on("pointerover", () => {
          this.salaP4.setScale(1.1);
        });
        this.salaP4.on("pointerout", () => {
          this.salaP4.setScale(1);
        });
        this.salaP4.on("pointerdown", () => {
          this.mapa.salasPasadas.push(this.mapa.salaActual);
          this.mapa.salaActual = "s4";
          this.scene.start("SelectorCriaturas", {
            hum1: this.hum1,
            hum2: this.hum2,
            hum3: this.hum3,
            criaturas: this.criaturas,
            mapa: this.mapa,
          });
        });
        break;

      case "s5":
        this.salaP5 = this.add
          .image(960, 200, "salaDisponible")
          .setInteractive();
        this.salaP5.on("pointerover", () => {
          this.salaP5.setScale(1.1);
        });
        this.salaP5.on("pointerout", () => {
          this.salaP5.setScale(1);
        });
        this.salaP5.on("pointerdown", () => {
          this.mapa.salasPasadas.push(this.mapa.salaActual);
          this.mapa.salaActual = "s5";
          this.scene.start("SelectorCriaturas", {
            hum1: this.hum1,
            hum2: this.hum2,
            hum3: this.hum3,
            criaturas: this.criaturas,
            mapa: this.mapa,
          });
        });
        break;

      case "s6":
        this.salaP6 = this.add
          .image(960, 430, "salaDisponible")
          .setInteractive();
        this.salaP6.on("pointerover", () => {
          this.salaP6.setScale(1.1);
        });
        this.salaP6.on("pointerout", () => {
          this.salaP6.setScale(1);
        });
        this.salaP6.on("pointerdown", () => {
          this.mapa.salasPasadas.push(this.mapa.salaActual);
          this.mapa.salaActual = "s6";
          this.scene.start("Descanso", {
            hum1: this.hum1,
            hum2: this.hum2,
            hum3: this.hum3,
            criaturas: this.criaturas,
            mapa: this.mapa,
          });
        });
        break;

      case "s7":
        this.salaP7 = this.add
          .image(960, 650, "salaDisponible")
          .setInteractive();
        this.salaP7.on("pointerover", () => {
          this.salaP7.setScale(1.1);
        });
        this.salaP7.on("pointerout", () => {
          this.salaP7.setScale(1);
        });
        this.salaP7.on("pointerdown", () => {
          this.mapa.salasPasadas.push(this.mapa.salaActual);
          this.mapa.salaActual = "s7";
          this.scene.start("SelectorCriaturas", {
            hum1: this.hum1,
            hum2: this.hum2,
            hum3: this.hum3,
            criaturas: this.criaturas,
            mapa: this.mapa,
          });
        });
        break;

      case "s8":
        this.salaP8 = this.add
          .image(960, 876, "salaDisponible")
          .setInteractive();
        this.salaP8.on("pointerover", () => {
          this.salaP8.setScale(1.1);
        });
        this.salaP8.on("pointerout", () => {
          this.salaP8.setScale(1);
        });
        this.salaP8.on("pointerdown", () => {
          this.mapa.salasPasadas.push(this.mapa.salaActual);
          this.mapa.salaActual = "s8";
          this.scene.start("Descanso", {
            hum1: this.hum1,
            hum2: this.hum2,
            hum3: this.hum3,
            criaturas: this.criaturas,
            mapa: this.mapa,
          });
        });
        break;

      case "s9":
        this.salaP9 = this.add
          .image(710, 200, "salaDisponible")
          .setInteractive();
        this.salaP9.on("pointerover", () => {
          this.salaP9.setScale(1.1);
        });
        this.salaP9.on("pointerout", () => {
          this.salaP9.setScale(1);
        });
        this.salaP9.on("pointerdown", () => {
          this.mapa.salasPasadas.push(this.mapa.salaActual);
          this.mapa.salaActual = "s9";
          this.scene.start("Descanso", {
            hum1: this.hum1,
            hum2: this.hum2,
            hum3: this.hum3,
            criaturas: this.criaturas,
            mapa: this.mapa,
          });
        });
        break;

      case "s10":
        this.salaP10 = this.add
          .image(710, 430, "salaDisponible")
          .setInteractive();
        this.salaP10.on("pointerover", () => {
          this.salaP10.setScale(1.1);
        });
        this.salaP10.on("pointerout", () => {
          this.salaP10.setScale(1);
        });
        this.salaP10.on("pointerdown", () => {
          this.mapa.salasPasadas.push(this.mapa.salaActual);
          this.mapa.salaActual = "s10";
          this.scene.start("SelectorCriaturas", {
            hum1: this.hum1,
            hum2: this.hum2,
            hum3: this.hum3,
            criaturas: this.criaturas,
            mapa: this.mapa,
          });
        });
        break;

      case "s11":
        this.salaP11 = this.add
          .image(710, 650, "salaDisponible")
          .setInteractive();
        this.salaP11.on("pointerover", () => {
          this.salaP11.setScale(1.1);
        });
        this.salaP11.on("pointerout", () => {
          this.salaP11.setScale(1);
        });
        this.salaP11.on("pointerdown", () => {
          this.mapa.salasPasadas.push(this.mapa.salaActual);
          this.mapa.salaActual = "s11";
          this.scene.start("Descanso", {
            hum1: this.hum1,
            hum2: this.hum2,
            hum3: this.hum3,
            criaturas: this.criaturas,
            mapa: this.mapa,
          });
        });
        break;

      case "s12":
        this.salaP12 = this.add
          .image(710, 876, "salaDisponible")
          .setInteractive();
        this.salaP12.on("pointerover", () => {
          this.salaP12.setScale(1.1);
        });
        this.salaP12.on("pointerout", () => {
          this.salaP12.setScale(1);
        });
        this.salaP12.on("pointerdown", () => {
          this.scene.start("CombateJefe", {
            hum1: this.hum1,
            hum2: this.hum2,
            hum3: this.hum3,
          });
        });
        break;

      default:
        break;
    }
  }

  //////////////////////////////// funcion de sprites para salas pasadas
  ActivarSalaPasada(salaPas){
    switch (salaPas) {
      case "s1":
        this.sala1p =this.add.image(1204,200,"salaPasada");
      break;

      case "s2":
        this.sala2p =this.add.image(1204,430,"salaPasada");
      break;

      case "s3":
        this.sala3p =this.add.image(1204,650,"salaPasada");
      break;

      case "s4":
        this.sala4p =this.add.image(1204,876,"salaPasada");
      break;

      case "s5":
        this.sala5p =this.add.image(960,200,"salaPasada");
      break;

      case "s6":
        this.sala6p =this.add.image(960,430,"salaPasada");
      break;

      case "s7":
        this.sala7p =this.add.image(960,650,"salaPasada");
      break;

      case "s8":
        this.sala8p =this.add.image(960,876,"salaPasada");
      break;

      case "s9":
        this.sala9p =this.add.image(710,200,"salaPasada");
      break;

      case "s10":
        this.sala10p =this.add.image(710,430,"salaPasada");
      break;

      case "s11":
        this.sala11p =this.add.image(710,650,"salaPasada");
      break;

      default:
      break;
    }
  }
}

