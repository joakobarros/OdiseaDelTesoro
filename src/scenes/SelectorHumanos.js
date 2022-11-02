import Phaser from "phaser";
import { Mapa } from "../Controladores/mapa";
import { Personaje } from "../Controladores/Personajes";

export class SelectorHumanos extends Phaser.Scene {
  mapa;
  criaturas;
  text1;
  text2;
  text3;
  text9;
  tcant;
  hum1;
  hum2;
  hum3;

  constructor() {
    super("SelectorHumanos");
  }

  create() {
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "selector"
    );

    this.mapa = new Mapa("s1", []);
    this.criaturas = 15;

    //////////////////////////////////////////// indicadores de cantidad

    var num1 = 0;
    var num2 = 0;
    var num3 = 0;
    var cant = 0;

    this.text1 = this.add.text(315, 870, "0", {
      fontSize: "120px",
      //fill: "#FFFFFF",
      fontFamily: "georgia",
    });
    this.text2 = this.add.text(925, 870, "0", {
      fontSize: "120px",
      //fill: "#FFFFFF",
      fontFamily: "georgia",
    });
    this.text3 = this.add.text(1525, 870, "0", {
      fontSize: "120px",
      //fill: "#FFFFFF",
      fontFamily: "georgia",
    });
    /*this.text9 = this.add.text(1150, 100, "max/min: 3", {
    fontSize: "40px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })*/
    this.tcant = this.add.text(485, 150, "Selecciona 3 unidades", {
      fontSize: "60px",
      //fill: "#FFFFFF",
      fontFamily: "georgia",
    });

    //////////////////////////////////////////////// estadisticas
    const text4 = this.add.text(280, 665, "vida: 2", {
      fontSize: "37px",
      //fill: "#FFFFFF",
      fontFamily: "georgia",
    });
    const text5 = this.add.text(280, 625, "daño: 3", {
      fontSize: "37px",
      //fill: "#FFFFFF",
      fontFamily: "georgia",
    });
    const text12 = this.add.text(210, 700, "ventaja vs: polilla", {
      fontSize: "37px",
      //fill: "#FFFFFF",
      fontFamily: "georgia",
    });
    const text6 = this.add.text(895, 665, "vida: 4", {
      fontSize: "37px",
      //fill: "#FFFFFF",
      fontFamily: "georgia",
    });
    const text7 = this.add.text(895, 625, "daño: 1", {
      fontSize: "37px",
      //fill: "#FFFFFF",
      fontFamily: "georgia",
    });
    const text11 = this.add.text(790, 700, "ventaja vs: esqueletos", {
      fontSize: "37px",
      //fill: "#FFFFFF",
      fontFamily: "georgia",
    });
    const text8 = this.add.text(1500, 665, "vida: 3", {
      fontSize: "37px",
      //fill: "#FFFFFF",
      fontFamily: "georgia",
    });
    const text9 = this.add.text(1500, 625, "daño: 2", {
      fontSize: "37px",
      //fill: "#FFFFFF",
      fontFamily: "georgia",
    });
    const text10 = this.add.text(1435, 700, "ventaja vs: mago", {
      fontSize: "37px",
      //fill: "#FFFFFF",
      fontFamily: "georgia",
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
      "HUMANO"
    );
    imag1.setScale(4);
    imag2.setScale(4);
    imag3.setScale(4);
    imag1.anims.play("arqAtk", true);
    imag2.anims.play("cabAtk", true);
    imag3.anims.play("piroAtk", true);

    /////////////////////////////////////////////////////// botones
    var menos3 = this.add
      .image(1440, 950, "menos")
      .setInteractive()
      .on("pointerdown", () => {
        if (num3 > 0 && cant != 0) {
          num3--;
          cant--;
          this.text3.text = num3;
          //this.tcant.text = "cantidad: " + cant;
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
          //this.tcant.text = "cantidad: " + cant;
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
          //this.tcant.text = "cantidad: " + cant;
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
          //this.tcant.text = "cantidad: " + cant;
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
          //this.tcant.text = "cantidad: " + cant;
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
          //this.tcant.text = "cantidad: " + cant;
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
      .image(1300, 190, "continuar")
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
  }
} 
