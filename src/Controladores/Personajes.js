

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

    constructor (escena)
    {
        super('Caballero', 1, 4, 4, "caballero", escena);
    }
}

class Piromano extends Personaje{

    constructor (escena)
    {
        super('Piromano', 2, 3, 3, "piromano", escena);
    }
}

class Esqueletos extends Personaje{

    constructor (escena)
    {
        super('Esqueletos', 1, 4, 4, "esqueletos", escena);
    }
}

class Polilla extends Personaje{

    constructor (escena)
    {
        super('Polilla', 2, 3, 3, "polilla", escena);
    }
}

class Mago extends Personaje{

    constructor (escena)
    {
        super('Mago', 3, 5, 5, "mago", escena);
    }
}

class Guardian extends Personaje{

    constructor (escena)
    {
        super('Guardian', 3, 20, 20, "guardian", escena);
    }
}

export {Mago, Guardian, Polilla, Piromano, Arquero, Caballero, Esqueletos}