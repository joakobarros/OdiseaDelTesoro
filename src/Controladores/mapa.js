
class Mapa {

    constructor(salaActual, salasPasadas, salasPosibles){  //en la clase mapa se almacenan datos clave para que funcione
       
        this.salaActual = salaActual;            // <== establece cual es la sala actual daca vez que se ejecuta la escena del mapa
        this.salasPasadas = salasPasadas;        // <== es un array que almacena todas las salas por las que el jugador ya entró
        this.salasPosibles = salasPosibles;      // <== es un array que guarda todas las salas posibles para el jugador
    }
}                                                // despues en el mapa se le ponen los sprites y se le dan las funcionalidades 
                                                 // a las salas en base a estos datos y si se cumplen las condiciones 
export {Mapa}                                    // (ver comentarios del mapa)