
class Sala {

    constructor (nombre, salasPosibles){
        
        this.nombre = nombre;
        this.salasPosibles = salasPosibles;
    }
}

class sala1 extends Sala{

    constructor(){

        super('s1', ["s2", "s5"])
    }
}

class sala2 extends Sala{

    constructor(){

        super('s2', ["s3"])
    }
}

class sala3 extends Sala{

    constructor(){

        super('s3', ["s4", "s7"])
    }
}

class sala4 extends Sala{

    constructor(){

        super('s4', ["s8"])
    }
}

class sala5 extends Sala{

    constructor(){

        super('s5', ["s6", "s9"])
    }
}

class sala6 extends Sala{

    constructor(){

        super('s6', ["s7"])
    }
}

class sala7 extends Sala{

    constructor(){

        super('s7', ["s8", "s11"])
    }
}

class sala8 extends Sala{

    constructor(){

        super('s8', ["s12"])
    }
}

class sala9 extends Sala{

    constructor(){

        super('s9', ["s10"])
    }
}

class sala10 extends Sala{

    constructor(){

        super('s10', ["s6"])
    }
}

class sala11 extends Sala{

    constructor(){

        super('s11', ["s12"])
    }
}

class sala12 extends Sala{

    constructor(){

        super('s12', [])
    }
}

export {sala1,sala2,sala3,sala4,sala5,sala6,sala7,sala8,sala9,sala10,sala11,sala12}