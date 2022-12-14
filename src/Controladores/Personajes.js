import Phaser, { Tilemaps } from "phaser";
import { sharedInstance as events } from "../scenes/EventCenter";

class Personaje extends Phaser.GameObjects.Sprite {
  constructor(nombre, ataque, vida, vidaMax, escena, x, y, keyAsset, keyIdle, keyAtk, tipo) {
    super(escena, x, y, keyAsset);
    escena.add.existing(this);
    this.nombre = nombre;                                   // las clases son como plantillas donde cada instancia 
    this.ataque = ataque;                                   // es la plantilla pero con con diferentes datos
    this.vida = vida;                                       
    this.vidaMax = vidaMax;                                 // la clase personaje pide varios datos para poder usarlo en el juego
    this.keyAsset = keyAsset;                               // el nombre, ataque, vida, vidamax, los key y el tipo 
    this.keyIdle = keyIdle;                                 // son datos propios de cada clase 
    this.keyAtk = keyAtk;                                   // mientras que los datos de escena, x, y son datos de posición 
    this.tipo = tipo;                                       // para ubicarlos en la escena

    this.setInteractive();                                  // esta clase al heredar las propiedades de la clase sprite
    this.on("pointerdown", () => {                          // se puede setear el sprite como interactivo desde la clase
      events.emit("click_en_personaje", this);              // para darle la función de on pointer down (cuando se clickea)
    });                                                     // que emite el evento click_en_personaje y enviandose como parametro
  }                                                         // a si mismo
                                                            // esa funcion se usa en el combate cuando tocas un personaje
}                                                           // establece como el personaje atacado

export {Personaje};
