

class Personaje {

    constructor(nombre, ataque, vida, vidaMax)
    {
        this.nombre = nombre;
        this.ataque = ataque;
        this.vida = vida;
        this.vidaMax = vidaMax;
    }

    RecibirDaño()
    {
       
    }
}

class Arquero extends Personaje{

    constructor (escena)
    {
        super('Arquero', 3, 2, 2);
    }
}

class Caballero extends Personaje{

    constructor (escena)
    {
        super('Caballero', 1, 4, 4);
    }
}

class Piromano extends Personaje{

    constructor (escena)
    {
        super('Piromano', 2, 3, 3);
    }
}

class Esqueletos extends Personaje{

    constructor (escena)
    {
        super('Esqueletos', 1, 4, 4);
    }
}

class Polilla extends Personaje{

    constructor (escena)
    {
        super('Polilla', 2, 3, 3);
    }
}

class Mago extends Personaje{

    constructor (escena)
    {
        super('Mago', 3, 5, 5);
    }
}

class Guardian extends Personaje{

    constructor (escena)
    {
        super('Guardian', 3, 20, 20);
    }
}

export {Mago, Guardian, Polilla, Piromano, Arquero, Caballero, Esqueletos}