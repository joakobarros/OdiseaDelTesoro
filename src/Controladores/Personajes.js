class Personaje {

    constructor(nombre, ataque, vida, vidaMax, sprite, scene)
    {
        this.nombre = nombre;
        this.ataque = ataque;
        this.vida = vida;
        this.vidaMax = vidaMax;
        this.sprite = sprite;
        this.scene = scene;
    }

}

class Arquero extends Personaje{

    constructor (scene)
    {
        super('Arquero', 3, 2, 2, "arqueroAtlas");
    }
}

class Caballero extends Personaje{

    constructor (scene)
    {
        super('Caballero', 1, 4, 4, "caballeroAtlas");
    }
}

class Piromano extends Personaje{

    constructor (scene)
    {
        super('Piromano', 2, 3, 3, "piromanoAtlas");
    }
}

class Esqueletos extends Personaje{

    constructor (scene)
    {
        super('Esqueletos', 1, 4, 4, "esqueletosAtlas");
    }
}

class Polilla extends Personaje{

    constructor (scene)
    {
        super('Polilla', 2, 3, 3);
    }
}

class Mago extends Personaje{

    constructor (scene)
    {
        super('Mago', 3, 5, 5);
    }
}

class Guardian extends Personaje{

    constructor (scene)
    {
        super('Guardian', 3, 20, 20, "jefeAtlas");
    }
}

export {Mago, Guardian, Polilla, Piromano, Arquero, Caballero, Esqueletos}