

class Personaje {

    constructor(nombre, ataque, vida, vidaMax, sprite, escena)
    {
        this.nombre = nombre;
        this.ataque = ataque;
        this.vida = vida;
        this.vidaMax = vidaMax;
        this.sprite = sprite
        this.escena = escena;

        this.escena.addImage();
    }

    RecibirDaño()
    {
       
    }
}

class Arquero extends Personaje{

    constructor (escena)
    {
        super('Arquero', 3, 2, 2,"arquero", escena);
    }
}

class Caballero extends Personaje{

    constructor ()
    {
        super('Caballero', 1, 4, 4);
    }
}

class Piromano extends Personaje{

    constructor ()
    {
        super('Piromano', 2, 3, 3);
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
        super('Mago', 3, 5, 5);
    }
}

class Guardian extends Personaje{

    constructor ()
    {
        super('Guardian', 3, 20, 20);
    }
}

export {Mago, Guardian, Polilla, Piromano, Arquero, Caballero, Esqueletos}