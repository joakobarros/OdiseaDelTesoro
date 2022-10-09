import Phaser from 'phaser'

var sala;
var hum1;
var hum2;
var hum3;
var criaturas;
var humImg1;
var humImg2;
var humImg3;
var mapa;

export default class Descanso extends Phaser.Scene
{
	constructor()
	{
		super('Descanso')
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
  
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondocombate');
  
  /////////////////////////////////////////////////////////// carteles
  var texto1 = this.add.text(310,753, "cura +1", {
    fontSize: "50px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  var texto2 = this.add.text(770,753, "vida máxima +1", {
    fontSize: "50px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  var texto3 = this.add.text(1400,753, "ataque +1", {
    fontSize: "50px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  /////////////////////////////////////////////////////////// sprites humanos
    switch (hum1.nombre) {
      case "arquero":
        humImg1 = this.add.image(500, 535, 'arquero').setInteractive();
        humImg1.setScale(4);
        break;
    
      case "caballero":
        humImg1 = this.add.image(500, 535, 'caballero').setInteractive();
        humImg1.setScale(4);
        break;
    
      case "piromano":
        humImg1 = this.add.image(500, 535, 'piromano').setInteractive()
        humImg1.setScale(4);
        break;
    
      default:
        break;
    }
    
    switch (hum2.nombre) {
      case "arquero":
        humImg2 = this.add.image(900, 535, 'arquero').setInteractive();
        humImg2.setScale(4);
        break;
    
      case "caballero":
        humImg2 = this.add.image(900, 535, 'caballero').setInteractive();
        humImg2.setScale(4);
        break;
    
      case "piromano":
        humImg2 = this.add.image(900, 535, 'piromano').setInteractive();
        humImg2.setScale(4);
        break;
    
      default:
        break;
    }
    
    switch (hum3.nombre) {
      case "arquero":
        humImg3 = this.add.image(1300, 535, 'arquero').setInteractive()
        humImg3.setScale(4);
        break;
    
      case "caballero":
        humImg3 = this.add.image(1300, 535, 'caballero').setInteractive()
        humImg3.setScale(4);
        break;
    
      case "piromano":
        humImg3 = this.add.image(1300, 535, 'piromano').setInteractive();
        humImg3.setScale(4);
        break;
    
      default:
        break;
    }
  
  ////////////////////////////////////////////////// botones power up
    var ataque = this.add.image(1500,951,'masAtaque').setInteractive()
        .on('pointerdown',()=> {
            hum1.ataque += 1;
            hum2.ataque += 1;
            hum3.ataque += 1;
            sala++;
            this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, mapa: mapa, criaturas: criaturas });})
        .on('pointerover', ()=> {ataque.setScale(0.7)})
        .on('pointerout', ()=> {ataque.setScale(0.6)});
        ataque.setScale(0.6); 
          
    var vidaMax = this.add.image(950,951,'vidaMax').setInteractive()
        .on('pointerdown',()=> {
            hum1.vidaMax += 1; 
            hum2.vidaMax += 1;
            hum3.vidaMax += 1;
            sala++;
            this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, mapa: mapa, criaturas: criaturas })})
        .on('pointerover', ()=> {vidaMax.setScale(0.7)})
        .on('pointerout', ()=> {vidaMax.setScale(0.6)});
        vidaMax.setScale(0.6);
            
    var vida = this.add.image(400,951,'curarVida').setInteractive()
        .on('pointerdown',()=> {
            if (hum1.vida < hum1.vidaMax){
              hum1.vida += 1;
            }
            if (hum2.vida < hum2.vidaMax){
              hum2.vida += 1;
             }
            if (hum3.vida < hum3.vidaMax) {
              hum3.vida += 1;
            }
            sala++;
            this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, mapa: mapa, criaturas: criaturas });})
        .on('pointerover', ()=> {vida.setScale(0.7)})
        .on('pointerout', ()=> {vida.setScale(0.6)});
        vida.setScale(0.6);
  }
}