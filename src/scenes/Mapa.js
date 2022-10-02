import Phaser from 'phaser'

var sala;
var hum1;
var hum2;
var hum3;
var criaturas;
var atk1;
var atk2;
var atk3;
var vida1;
var vida2;
var vida3;
var cantCriaturas;
var humImg1;
var humImg2;
var humImg3;

export default class Menu extends Phaser.Scene
{
	constructor()
	{
		super('Menu')
	}

    init(data) {
        sala = data.sala;
        hum1 = data.hum1;
        hum2 = data.hum2;
        hum3 = data.hum3;
        criaturas = data.criaturas;
        console.log(data);
    }

create() {

//////////////////////////////////////////////// variante de mapa
switch (sala) {
  case 1:
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mapa1');
    break;

    case 2:
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mapa2');
    break;

    case 3:
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mapa3');
    break;

    case 4:
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mapa4');
    break;

    case 5:
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mapa5');
    break;

  default:
    break;
}

//////////////////////////////////////////////// selector de sprites
        switch (hum1.nombre) {
            case "arquero":
              humImg1 = this.add.image(133, 185, 'arquero')
              humImg1.setScale(2);
              break;
          
            case "caballero":
              humImg1 = this.add.image(133, 185, 'caballero')
              humImg1.setScale(2);
              break;
          
            case "piromano":
              humImg1 = this.add.image(133, 185, 'piromano')
              humImg1.setScale(2);
              break;
          
            default:
              break;
          }
          
          switch (hum2.nombre) {
            case "arquero":
              humImg2 = this.add.image(133, 544, 'arquero')
              humImg2.setScale(2);
              break;
          
            case "caballero":
              humImg2 = this.add.image(133, 544, 'caballero')
              humImg2.setScale(2);
              break;
          
            case "piromano":
              humImg2 = this.add.image(133, 544, 'piromano')
              humImg2.setScale(2);
              break;
          
            default:
              break;
          }
          
          switch (hum3.nombre) {
            case "arquero":
              humImg3 = this.add.image(133, 900, 'arquero').setInteractive()
              humImg3.setScale(2);
              break;
          
            case "caballero":
              humImg3 = this.add.image(133, 900, 'caballero').setInteractive()
              humImg3.setScale(2);
              break;
          
            case "piromano":
              humImg3 = this.add.image(133, 900, 'piromano').setInteractive();
              humImg3.setScale(2);
              break;
          
            default:
              break;
          }


//////////////////////////////////////////////////// estadisticas
        atk1 = this.add.text(220, 150, "atk: " + hum1.ataque, {
            fontSize: "37px",
            fill: "#FFFFFF",
            fontFamily: "georgia"
        })
        vida1 = this.add.text(220, 200, "vida: " + hum1.vida + "/" + hum1.vidaMax, {
            fontSize: "37px",
            fill: "#FFFFFF",
            fontFamily: "georgia"
        })

        atk2 = this.add.text(220, 500, "atk: " + hum2.ataque, {
            fontSize: "37px",
            fill: "#FFFFFF",
            fontFamily: "georgia"
        })
        vida2 = this.add.text(220, 550, "vida: " + hum2.vida + "/" + hum2.vidaMax, {
            fontSize: "37px",
            fill: "#FFFFFF",
            fontFamily: "georgia"
        })

        atk3 = this.add.text(220, 860, "atk: " + hum3.ataque, {
            fontSize: "37px",
            fill: "#FFFFFF",
            fontFamily: "georgia"
        })
        vida3 = this.add.text(220, 910, "vida: " + hum3.vida + "/" + hum3.vidaMax, {
            fontSize: "37px",
            fill: "#FFFFFF",
            fontFamily: "georgia"
        })

        cantCriaturas = this.add.text(1545, 590, "criaturas: " + criaturas, {
            fontSize: "50px",
            fill: "#FFFFFF",
            fontFamily: "georgia"
        })


        var pausa = this.add.image(1800,50,'pausa').setInteractive()
        .on('pointerdown',()=> {this.scene.start("pausa");})
        .on('pointerover',()=> {pausa.setScale(3.1)})
        .on('pointerout', ()=> {pausa.setScale(3)});
        pausa.setScale(3);

      
        var continuar = this.add.image(1680,950,'continuar').setInteractive()
        .on('pointerdown',()=> {  switch (sala) {
                    
          case 1:{
           this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
           break;
          }
          case 2:{
           this.scene.start("descanso", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
           break;
          }
          case 3:{
           this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
           break;
          }
          case 4:{
           this.scene.start("descanso", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
           break;
          }
          case 5:{
           this.scene.start("combateJefe", { hum1: hum1, hum2: hum2, hum3: hum3});
           break;
          }

       }
   })
        .on('pointerover',()=> {continuar.setScale(5.1)})
        .on('pointerout', ()=> {continuar.setScale(5)});
        continuar.setScale(5);
  }
}