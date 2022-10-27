import Phaser from 'phaser'
import { Personaje } from '../Controladores/Personajes';

export default class SelectorCriaturas extends Phaser.Scene
{

criaturas;
hum1;
hum2;
hum3;
text1;
text2;
text3;
criat1;
criat2;
criat3;
imag1;
imag2;
imag3;
tcant;
tmax;
mapa;

	constructor()
	{
		super('SelectorCriaturas')
	}

	init(data) {
        this.hum1 = data.hum1;
        this.hum2 = data.hum2;
        this.hum3 = data.hum3;
        this.mapa = data.mapa;
        this.criaturas = data.criaturas;
    }
  
create() {
  this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'selector');

////////////////////////////////////////////// indicadores de cantidad
let num1 = 0;
let num2 = 0;
let num3 = 0;
let cant = 0;

this.text1 = this.add.text(315, 870, "0", {
  fontSize: "120px",
  //fill: "#FFFFFF",
  fontFamily: "georgia"
})
this.text2 = this.add.text(925, 870, "0", {
  fontSize: "120px",
  //fill: "#FFFFFF",
  fontFamily: "georgia"
})
this.text3 = this.add.text(1525, 870, "0", {
  fontSize: "120px",
  //fill: "#FFFFFF",
  fontFamily: "georgia"
})
this.tcant = this.add.text(485, 150, "Selecciona 3 unidades", {
  fontSize: "60px",
  //fill: "#FFFFFF",
  fontFamily: "georgia"
})


//////////////////////////////////////////////// estadisticas
let text4 = this.add.text(280, 700, "vida: 4", {
  fontSize: "40px",
  //fill: "#FFFFFF",
  fontFamily: "georgia"
})
let text5 = this.add.text(280, 660, "daño: 1", {
  fontSize: "40px",
  //fill: "#FFFFFF",
  fontFamily: "georgia"
})
let text6 = this.add.text(895, 700, "vida: 3", {
  fontSize: "40px",
  //fill: "#FFFFFF",
  fontFamily: "georgia"
})
let text7 = this.add.text(895, 660, "daño: 2", {
  fontSize: "40px",
  //fill: "#FFFFFF",
  fontFamily: "georgia"
})
let text8 = this.add.text(1500, 700, "vida: 5", {
  fontSize: "40px",
  //fill: "#FFFFFF",
  fontFamily: "georgia"
})
let text9 = this.add.text(1500, 660, "daño: 3", {
  fontSize: "40px",
  //fill: "#FFFFFF",
  fontFamily: "georgia"
})


//////////////////////////////////////////////////// sprites
  let imag1 = new Personaje('Esqueleto', 1, 4, 4, this, 350, 515, 'esqueletos', 'CRIATURA');
  let imag2 = new Personaje('Polilla', 2, 3, 3, this, 960, 515, 'polilla', 'CRIATURA');
  let imag3 = new Personaje('Mago', 2, 4, 4, this, 1550, 515, 'magoAtaque', 'CRIATURA');
  imag1.setScale(4);
  imag2.setScale(4);
  imag3.setScale(4);


////////////////////////////////////////////////// botones
var menos3 = this.add.image(1440,950, 'menos').setInteractive()
        .on('pointerdown',()=> { 
          if (num3 > 0 && cant != 0){
          num3--
          cant--
          this.text3.text = num3;
          //this.tcant.text = "cantidad: " + cant;
         }})
  .on('pointerover', ()=> {menos3.setScale(4.4)})
  .on('pointerout', ()=> {menos3.setScale(4.3)});
        menos3.setScale(4.3);   

var mas3 = this.add.image(1700,950,'mas').setInteractive()
        .on('pointerdown',()=> { 
          if (num3 < 3 && cant < 3){
            num3++
            cant++
            this.text3.text = num3;
            //this.tcant.text = "cantidad: " + cant;
           }})
  .on('pointerover', ()=> {mas3.setScale(4.4)})
  .on('pointerout', ()=> {mas3.setScale(4.3)});
        mas3.setScale(4.3);

  
var mas2 = this.add.image(1090,950,'mas').setInteractive()
        .on('pointerdown',()=> { 
          if (num2 < 3 && cant < 3){
            num2++
            cant++
            this.text2.text = num2;
            //this.tcant.text = "cantidad: " + cant;
           }})
  .on('pointerover', ()=> {mas2.setScale(4.4)})
  .on('pointerout', ()=> {mas2.setScale(4.3)});
        mas2.setScale(4.3);

var menos2 = this.add.image(830,950,'menos').setInteractive()
        .on('pointerdown',()=> { 
          if (num2 > 0 && cant != 0){
            num2--
            cant--
            this.text2.text = num2;
            //this.tcant.text = "cantidad: " + cant;
           }})
  .on('pointerover', ()=> {menos2.setScale(4.4)})
  .on('pointerout', ()=> {menos2.setScale(4.3)});
        menos2.setScale(4.3); 
  

var mas1 = this.add.image(475,950,'mas').setInteractive()
        .on('pointerdown',()=> { 
          if (num1 < 3 && cant < 3){
            num1++
            cant++
            this.text1.text = num1;
            //this.tcant.text = "cantidad: " + cant;
           }})
  .on('pointerover', ()=> {mas1.setScale(4.4)})
  .on('pointerout', ()=> {mas1.setScale(4.3)});
        mas1.setScale(4.3);

var menos1 = this.add.image(220,950,'menos').setInteractive()
        .on('pointerdown',()=> { 
          if (num1 > 0 && cant != 0){
            num1--
            cant--
            this.text1.text = num1;
            //this.tcant.text = "cantidad: " + cant;
           }})
  .on('pointerover', ()=> {menos1.setScale(4.4)})
  .on('pointerout', ()=> {menos1.setScale(4.3)});
        menos1.setScale(4.3);

      
/////////////////////////////////////////////// matriz de personajes
var criats = []

var continuar = this.add.image(1300, 190,'continuar').setInteractive()
  .on('pointerdown',()=> {
    if (cant == 3) {
      
    for (let i = 0; i < num1; i++) {
     criats.push(imag1)
    }
    for (let i = 0; i < num2; i++) {
     criats.push(imag2)
    }
    for (let i = 0; i < num3; i++) {
     criats.push(imag3)
    }

    this.criaturas -= 3;
  this.scene.start("Combate", { criat1: criats[0], criat2: criats[1], criat3: criats[2],
  mapa: this.mapa, criaturas: this.criaturas, hum1: this.hum1, hum2: this.hum2, hum3: this.hum3 })}})
      
  .on('pointerover', ()=> {continuar.setScale(5.1)})
  .on('pointerout', ()=> {continuar.setScale(5)});
  continuar.setScale(5);

 }
}