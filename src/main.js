import Phaser from 'phaser'

import  Preloads  from "./scenes/Preloads.js";
import  MainMenu  from "./scenes/MainMenu.js";
import  Combate  from "./scenes/Combate.js";
import  Mapa  from "./scenes/Mapa.js";
import  Descanso  from "./scenes/Descanso.js";
import  Creditos  from "./scenes/Creditos.js";
import  WinGuardian  from "./scenes/WinGuardian.js";
import  WinHumanos  from "./scenes/WinHumanos.js";
import  Pausa  from "./scenes/Pausa.js";
import  CombateJefe  from "./scenes/CombateJefe.js";
import  SelectorHumanos  from "./scenes/SelectorHumanos.js";
import  SelectorCriaturas  from "./scenes/SelectorCriaturas.js";

const config = {
	type: Phaser.AUTO,
	width: 1920,
	height: 1080,
	pixelArt: true,
	scale: {
	  mode: Phaser.Scale.FIT,
	  autoCenter: Phaser.Scale.CENTER_BOTH,
	  min: {
		width: 16,
		height: 9,
	  },
	  max: {
		width: 1920,
		height: 1080,
	  },
	},
	physics: {
	  default: "arcade",
	  arcade: {
		gravity: { y: 300 },
		debug: false,
	  },
	},
	
	scene: [Preloads, MainMenu, SelectorHumanos, Mapa, SelectorCriaturas, Combate, Descanso, CombateJefe, Pausa, Creditos, WinGuardian, WinHumanos],

};


export default new Phaser.Game(config)
