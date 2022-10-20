class Personaje {

    constructor(nombre, ataque, vida, vidaMax)
    {
        this.nombre = nombre;
        this.ataque = ataque;
        this.vida = vida;
        this.vidaMax = vidaMax;
    }

}

class Arquero extends Personaje{

    constructor ()
    {
        super('Arquero', 3, 2, 2);
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
        super('Mago', 2, 4, 4);
    }
}

class Guardian extends Personaje{

    constructor ()
    {
        super('Guardian', 3, 30, 30);
    }
}

export {Mago, Guardian, Polilla, Piromano, Arquero, Caballero, Esqueletos}