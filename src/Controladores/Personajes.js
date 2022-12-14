import Phaser, { Tilemaps } from "phaser";
import { sharedInstance as events } from "../scenes/EventCenter";

class Personaje extends Phaser.GameObjects.Sprite {
  constructor(nombre, ataque, vida, vidaMax, escena, x, y, keyAsset, keyIdle, keyAtk, tipo) {
    super(escena, x, y, keyAsset);
    escena.add.existing(this);
    this.nombre = nombre;
    this.ataque = ataque;
    this.vida = vida;
    this.vidaMax = vidaMax;
    this.keyAsset = keyAsset;
    this.keyIdle = keyIdle;
    this.keyAtk = keyAtk;
    this.tipo = tipo;

    this.setInteractive();
    this.on("pointerdown", () => {
      events.emit("click_en_personaje", this);
    });
  }

  recibirAtaque(enemigo) {
    this.vida -= enemigo.ataque;
    if (this.vida <= 0) {
      this.vida = 0;
    }
  }
}

export {Personaje};
