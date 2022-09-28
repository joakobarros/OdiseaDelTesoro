

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

    constructor ()
    {
        super('Arquero', 10, 5, 5);

    }
}

class Caballero extends Personaje{

    constructor ()
    {
        super('Caballero');
    }
}

class Piromano extends Personaje{

    constructor ()
    {
        super('Piromano');
    }
}

class Esqueleto extends Personaje{

    constructor ()
    {
        super('Esqueleto');
    }
}

class Polilla extends Personaje{

    constructor ()
    {
        super('Polilla');
    }
}

class Mago extends Personaje{

    constructor ()
    {
        super('Mago');
    }
}

class Guardian extends Personaje{

    constructor ()
    {
        super('Guardian');
    }
}

export {Mago, Guardian}