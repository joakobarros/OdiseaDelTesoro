import Phaser, { Tilemaps } from 'phaser'
import { sharedInstance as events } from '../scenes/EventCenter'


class Personaje extends Phaser.GameObjects.Sprite{

    constructor(nombre, ataque, vida, vidaMax, escena, x, y, key_asset, tipo )
    {
        super(escena, x, y, key_asset)
        escena.add.existing(this)
        this.nombre = nombre;
        this.ataque = ataque;
        this.vida = vida;
        this.vidaMax = vidaMax;
        this.key_asset = key_asset
        this.tipo = tipo

        this.setInteractive();
        this.on('pointerdown',()=> { 
           events.emit('Personaje_atacado', this)
        })
        
    }



}

class Esqueletos extends Personaje{

    constructor ()
    {
        super('Esqueletos', 1, 4, 4);
    }
}

class Polilla extends Personaje{

    constructor ()
    {
        super('Polilla', 2, 3, 3);
    }
}

class Mago extends Personaje{

    constructor ()
    {
        super('Mago', 2, 4, 4);
    }
}

class Guardian extends Personaje{

    constructor ()
    {
        super('Guardian', 3, 30, 30);
    }
}

export {Personaje, Mago, Guardian, Polilla, Esqueletos}