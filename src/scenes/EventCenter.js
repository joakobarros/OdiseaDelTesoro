import Phaser from 'phaser'

const sharedInstance = new Phaser.Events.EventEmitter()

export {
	sharedInstance
}

// el event center es el medio por el cual al emitir un evento el algun lugar del codigo
// dicho evento puede ser escuchado por otro script y usar los datos que envia dentro de ese codigo

// por ejemplo en el script de la clase perosnaje se emite un evento cuando se clickea el sprite
// que se envia a si mismo como parametro. este evento se recive en la escena de combate y con el
// dato que se recive como parametro (el personaje clickeado) se establece el personaje atacado
// para usarse en la función del ataque.