import Phaser from 'phaser'
import {Mago} from "../Controladores/Personajes.js"
import {Polilla} from "../Controladores/Personajes.js"
import {Esqueletos} from "../Controladores/Personajes.js"

var sala;
var criaturas;
var hum1;
var hum2;
var hum3;
var text1;
var text2;
var text3;
var criat1;
var criat2;
var criat3;
var imag1;
var imag2;
var imag3;
var tcant;
var tmax;
var mapa;

export default class SelectorCriaturas extends Phaser.Scene
{
	constructor()
	{
		super('SelectorCriaturas')
	}

	init(data) {
        sala = data.sala;
        hum1 = data.hum1;
        hum2 = data.hum2;
        hum3 = data.hum3;
        mapa = data.mapa;
        criaturas = data.criaturas;
    }
  
create() {
  this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'selector');

////////////////////////////////////////////// indicadores de cantidad
var num1 = 0;
var num2 = 0;
var num3 = 0;
var cant = 0;

text1 = this.add.text(315, 175, "0", {
  fontSize: "120px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
text2 = this.add.text(925, 175, "0", {
  fontSize: "120px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
text3 = this.add.text(1525, 175, "0", {
  fontSize: "120px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
  tmax = this.add.text(1150, 75, "max/min: 3", {
    fontSize: "37px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  tcant = this.add.text(530, 75, "cantidad: " + cant, {
    fontSize: "40px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })


//////////////////////////////////////////////// estadisticas
var text4 = this.add.text(280, 720, "vida: 4", {
  fontSize: "37px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
var text5 = this.add.text(280, 660, "daño: 1", {
  fontSize: "37px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
var text6 = this.add.text(895, 720, "vida: 3", {
  fontSize: "37px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
var text7 = this.add.text(895, 660, "daño: 2", {
  fontSize: "37px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
var text8 = this.add.text(1500, 720, "vida: 5", {
  fontSize: "37px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
var text9 = this.add.text(1500, 660, "daño: 3", {
  fontSize: "37px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})


//////////////////////////////////////////////////// sprites
  var imag1 = this.add.image(350, 515, 'esqueletos');
  var imag2 = this.add.image(960, 515, 'polilla');
  var imag3 = this.add.image(1550, 515, 'mago');
  imag1.setScale(4);
  imag2.setScale(4);
  imag3.setScale(4);


////////////////////////////////////////////////// botones
var menos3 = this.add.image(1420,251,'menos').setInteractive()
        .on('pointerdown',()=> { 
          if (num3 > 0 && cant != 0){
          num3--
          cant--
          text3.text = num3;
          tcant.text = "cantidad: " + cant;
         }})
  .on('pointerover', ()=> {menos3.setScale(5.2)})
  .on('pointerout', ()=> {menos3.setScale(5.1)});
        menos3.setScale(5.1);   

var mas3 = this.add.image(1710,251,'mas').setInteractive()
        .on('pointerdown',()=> { 
          if (num3 < 3 && cant < 3){
            num3++
            cant++
            text3.text = num3;
            tcant.text = "cantidad: " + cant;
           }})
  .on('pointerover', ()=> {mas3.setScale(5.2)})
  .on('pointerout', ()=> {mas3.setScale(5.1)});
        mas3.setScale(5.1);

  
var mas2 = this.add.image(1105,251,'mas').setInteractive()
        .on('pointerdown',()=> { 
          if (num2 < 3 && cant < 3){
            num2++
            cant++
            text2.text = num2;
            tcant.text = "cantidad: " + cant;
           }})
  .on('pointerover', ()=> {mas2.setScale(5.2)})
  .on('pointerout', ()=> {mas2.setScale(5.1)});
        mas2.setScale(5.1);

var menos2 = this.add.image(820,251,'menos').setInteractive()
        .on('pointerdown',()=> { 
          if (num2 > 0 && cant != 0){
            num2--
            cant--
            text2.text = num2;
            tcant.text = "cantidad: " + cant;
           }})
  .on('pointerover', ()=> {menos2.setScale(5.2)})
  .on('pointerout', ()=> {menos2.setScale(5.1)});
        menos2.setScale(5.1); 
  

var mas1 = this.add.image(500,251,'mas').setInteractive()
        .on('pointerdown',()=> { 
          if (num1 < 3 && cant < 3){
            num1++
            cant++
            text1.text = num1;
            tcant.text = "cantidad: " + cant;
           }})
  .on('pointerover', ()=> {mas1.setScale(5.2)})
  .on('pointerout', ()=> {mas1.setScale(5.1)});
        mas1.setScale(5.1);

var menos1 = this.add.image(200,251,'menos').setInteractive()
        .on('pointerdown',()=> { 
          if (num1 > 0 && cant != 0){
            num1--
            cant--
            text1.text = num1;
            tcant.text = "cantidad: " + cant;
           }})
  .on('pointerover', ()=> {menos1.setScale(5.2)})
  .on('pointerout', ()=> {menos1.setScale(5.1)});
        menos1.setScale(5.1);

      
/////////////////////////////////////////////// matriz de personajes
var criats = []

var continuar = this.add.image(970,950,'continuar').setInteractive()
  .on('pointerdown',()=> {
    if (cant == 3) {
      
    for (let i = 0; i < num1; i++) {
     criats.push(new Esqueletos)
    }
    for (let i = 0; i < num2; i++) {
     criats.push(new Polilla)
    }
    for (let i = 0; i < num3; i++) {
     criats.push(new Mago)
    }

  sala++
  criaturas -= 3;
  this.scene.start("combate", { criat1: criats[0], criat2: criats[1], criat3: criats[2],
  sala: sala, mapa: mapa, criaturas: criaturas, hum1: hum1, hum2: hum2, hum3: hum3 })}})
      
  .on('pointerover', ()=> {continuar.setScale(5.1)})
  .on('pointerout', ()=> {continuar.setScale(5)});
  continuar.setScale(5);

}
}