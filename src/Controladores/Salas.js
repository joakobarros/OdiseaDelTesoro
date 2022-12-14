
class Sala {
                           // la clase sala esta para hacer más fácil el funcionamiento del mapa
    constructor (nombre, tipo, salasPosibles, posX, posY){
        
        this.nombre = nombre;                // <= el nombre de la sala (ej: "s1")
        this.tipo = tipo;                    // <= tipo hace referencia a si es de descanso, combate o combateJefe
        this.salasPosibles = salasPosibles;  // <= es un array que tiene todas las salas posibles si la sala actual es esta
        this.posX = posX;                    // <= porsición en X e y para posicionarlos automaticamente donde corresponde
        this.posY = posY;                    
    }
}
export {Sala}