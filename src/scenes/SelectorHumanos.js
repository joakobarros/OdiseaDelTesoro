import Phaser from "phaser";
import { Mapa } from "../Controladores/mapa";
import { Personaje } from "../Controladores/Personajes";
import { getPhrase } from '../services/translations'

export class SelectorHumanos extends Phaser.Scene {
 
  constructor() {
    super("SelectorHumanos");
  }

  create() {
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "selector"
    );

    this.mapa = new Mapa("s1", [], []);
    this.criaturas = 15;

    //////////////////////////////////////////// indicadores de cantidad

    var num1 = 0;
    var num2 = 0;
    var num3 = 0;
    var cant = 0;

    this.text1 = this.add.text(315, 870, "0", {
      fontSize: "120px",
      fontFamily: "Pixel",
    });
    this.text2 = this.add.text(925, 870, "0", {
      fontSize: "120px",
      fontFamily: "Pixel",
    });
    this.text3 = this.add.text(1525, 870, "0", {
      fontSize: "120px",
      fontFamily: "Pixel",
    });
    this.tcant = this.add.text(470, 160, getPhrase('Selecciona 3 unidades'), {
      fontSize: "50px",
      fontFamily: "Pixel",
      wordWrap: { width: 1000 }
    });

    //////////////////////////////////////////////// estadisticas

    const vidatxt = getPhrase('Vida: ')
    const dañotxt = getPhrase('Daño: ')

    const text4 = this.add.text(280, 665, vidatxt + "2", {
      fontSize: "37px",
      fontFamily: "Pixel",
    });
    const text5 = this.add.text(280, 625, dañotxt + "3", {
      fontSize: "37px",
      fontFamily: "Pixel",
    });
    const text12 = this.add.text(140, 700, getPhrase('Ventaja vs: Polilla'), {
      fontSize: "37px",
      fontFamily: "Pixel",
    });
    const text6 = this.add.text(895, 665, vidatxt + "4", {
      fontSize: "37px",
      fontFamily: "Pixel",
    });
    const text7 = this.add.text(895, 625, dañotxt + "1", {
      fontSize: "37px",
      fontFamily: "Pixel",
    });
    const text11 = this.add.text(753, 707, getPhrase('Ventaja vs: Esqueletos'), {
      fontSize: "31px",
      fontFamily: "Pixel",
      wordWrap: { width: 1000 }
    });
    const text8 = this.add.text(1500, 665, vidatxt + "3", {
      fontSize: "37px",
      fontFamily: "Pixel",
    });
    const text9 = this.add.text(1500, 625, dañotxt + "2", {
      fontSize: "37px",
      fontFamily: "Pixel",
    });
    const text10 = this.add.text(1390, 700, getPhrase('Ventaja vs: Mago'), {
      fontSize: "37px",
      fontFamily: "Pixel",
    });

    ///////////////////////////////////////////////////// sprite
    let imag1 = new Personaje(
      "Arquero",
      3,
      2,
      2,
      this,
      350,
      500,
      "arqueroAtaque",
      "arqIdle",
      "arqAtk",
      "HUMANO"
    );
    let imag2 = new Personaje(
      "Caballero",
      1,
      4,
      4,
      this,
      960,
      495,
      "caballeroAtaque",
      "cabIdle",
      "cabAtk",
      "HUMANO"
    );
    let imag3 = new Personaje(
      "Piromano",
      2,
      3,
      3,
      this,
      1550,
      500,
      "piromanoAtaque",
      "piroIdle",
      "piroAtk",
      "HUMANO"
    );
    imag1.setScale(4);
    imag2.setScale(4);
    imag3.setScale(4);
    imag1.anims.play(imag1.keyIdle, true);
    imag2.anims.play(imag2.keyIdle, true);
    imag3.anims.play(imag3.keyIdle, true);

    /////////////////////////////////////////////////////// botones
    var menos3 = this.add
      .image(1440, 950, "menos")
      .setInteractive()
      .on("pointerdown", () => {
        if (num3 > 0 && cant != 0) {
          num3--;
          cant--;
          this.text3.text = num3;
        }
      })
      .on("pointerover", () => {
        menos3.setScale(4.4); 
      })
      .on("pointerout", () => {
        menos3.setScale(4.3);
      });
    menos3.setScale(4.3);

    var mas3 = this.add
      .image(1700, 950, "mas")
      .setInteractive()
      .on("pointerdown", () => {
        if (num3 < 3 && cant < 3) {
          num3++;
          cant++;
          this.text3.text = num3;
        }
      })
      .on("pointerover", () => {
        mas3.setScale(4.4);
      })
      .on("pointerout", () => {
        mas3.setScale(4.3);
      });
    mas3.setScale(4.3);

    var mas2 = this.add
      .image(1090, 950, "mas")
      .setInteractive()
      .on("pointerdown", () => {
        if (num2 < 3 && cant < 3) {
          num2++;
          cant++;
          this.text2.text = num2;
        }
      })
      .on("pointerover", () => {
        mas2.setScale(4.4);
      })
      .on("pointerout", () => {
        mas2.setScale(4.3);
      });
    mas2.setScale(4.3);

    var menos2 = this.add
      .image(830, 950, "menos")
      .setInteractive()
      .on("pointerdown", () => {
        if (num2 > 0 && cant != 0) {
          num2--;
          cant--;
          this.text2.text = num2;
        }
      })
      .on("pointerover", () => {
        menos2.setScale(4.4);
      })
      .on("pointerout", () => {
        menos2.setScale(4.3);
      });
    menos2.setScale(4.3);

    var mas1 = this.add
      .image(475, 950, "mas")
      .setInteractive()
      .on("pointerdown", () => {
        if (num1 < 3 && cant < 3) {
          num1++;
          cant++;
          this.text1.text = num1;
        }
      })
      .on("pointerover", () => {
        mas1.setScale(4.4);
      })
      .on("pointerout", () => {
        mas1.setScale(4.3);
      });
    mas1.setScale(4.3);
    0;
    var menos1 = this.add
      .image(220, 950, "menos")
      .setInteractive()
      .on("pointerdown", () => {
        if (num1 > 0 && cant != 0) {
          num1--;
          cant--;
          this.text1.text = num1;
        }
      })
      .on("pointerover", () => {
        menos1.setScale(4.4);
      })
      .on("pointerout", () => {
        menos1.setScale(4.3);
      });
    menos1.setScale(4.3);

    ///////////////////////////////////////////// matriz de personajes
    var hums = [];

    var continuar = this.add
      .image(1300, 190, "boton")
      .setInteractive()
      .on("pointerdown", () => {
        if (cant == 3) {
          for (let i = 0; i < num1; i++) {
            hums.push(imag1);
          }
          for (let i = 0; i < num2; i++) {
            hums.push(imag2);
          }
          for (let i = 0; i < num3; i++) {
            hums.push(imag3);
          }
          this.scene.start("Mapa", {
            hum1: hums[0],
            hum2: hums[1],
            hum3: hums[2],
            mapa: this.mapa,
            criaturas: this.criaturas,
          });
        }
      })
      .on("pointerover", () => {
        continuar.setScale(5.1);
      })
      .on("pointerout", () => {
        continuar.setScale(5);
      });
    continuar.setScale(5);

    this.continuartxt = this.add.text(1130, 150, getPhrase('Continuar'), 
    {
      fontSize: "60px",
      fill: "#330C03",
      fontFamily: "Pixel",
    });
  }

} 
