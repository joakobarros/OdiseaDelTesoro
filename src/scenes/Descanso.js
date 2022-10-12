import Phaser from 'phaser'



export default class Descanso extends Phaser.Scene
{

sala;
hum1;
hum2;
hum3;
criaturas;
humImg1;
humImg2;
humImg3;
mapa;

	constructor()
	{
		super('Descanso')
	}

    init(data) {
        this.sala = data.sala;
        this.hum1 = data.hum1;
        this.hum2 = data.hum2;
        this.hum3 = data.hum3;
        this.mapa = data.mapa;
        this.criaturas = data.criaturas;
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
    switch (this.hum1.nombre) {
      case "arquero":
        this.humImg1 = this.add.image(500, 535, 'arquero').setInteractive();
        this.humImg1.setScale(4);
        break;
    
      case "caballero":
        this.humImg1 = this.add.image(500, 535, 'caballero').setInteractive();
        this.humImg1.setScale(4);
        break;
    
      case "piromano":
        this.humImg1 = this.add.image(500, 535, 'piromano').setInteractive()
        this.humImg1.setScale(4);
        break;
    
      default:
        break;
    }
    
    switch (this.hum2.nombre) {
      case "arquero":
        this.humImg2 = this.add.image(900, 535, 'arquero').setInteractive();
        this.humImg2.setScale(4);
        break;
    
      case "caballero":
        this.humImg2 = this.add.image(900, 535, 'caballero').setInteractive();
        this.humImg2.setScale(4);
        break;
    
      case "piromano":
        this.humImg2 = this.add.image(900, 535, 'piromano').setInteractive();
        this.humImg2.setScale(4);
        break;
    
      default:
        break;
    }
    
    switch (this.hum3.nombre) {
      case "arquero":
        this.humImg3 = this.add.image(1300, 535, 'arquero').setInteractive()
        this.humImg3.setScale(4);
        break;
    
      case "caballero":
        this.humImg3 = this.add.image(1300, 535, 'caballero').setInteractive()
        this.humImg3.setScale(4);
        break;
    
      case "piromano":
        this.humImg3 = this.add.image(1300, 535, 'piromano').setInteractive();
        this.humImg3.setScale(4);
        break;
    
      default:
        break;
    }
  
  ////////////////////////////////////////////////// botones power up
    var ataque = this.add.image(1500,951,'masAtaque').setInteractive()
        .on('pointerdown',()=> {
          this.hum1.ataque += 1;
          this.hum2.ataque += 1;
          this.hum3.ataque += 1;
          this.sala++;
            this.scene.start("mapa", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, sala: this.sala, mapa: this.mapa, criaturas: this.criaturas });})
        .on('pointerover', ()=> {ataque.setScale(0.7)})
        .on('pointerout', ()=> {ataque.setScale(0.6)});
        ataque.setScale(0.6); 
          
    var vidaMax = this.add.image(950,951,'vidaMax').setInteractive()
        .on('pointerdown',()=> {
          this.hum1.vidaMax += 1; 
          this.hum2.vidaMax += 1;
          this.hum3.vidaMax += 1;
          this.sala++;
            this.scene.start("mapa", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, sala: this.sala, mapa: this.mapa, criaturas: this.criaturas })})
        .on('pointerover', ()=> {vidaMax.setScale(0.7)})
        .on('pointerout', ()=> {vidaMax.setScale(0.6)});
        vidaMax.setScale(0.6);
            
    var vida = this.add.image(400,951,'curarVida').setInteractive()
        .on('pointerdown',()=> {
            if (this.hum1.vida < this.hum1.vidaMax){
              this.hum1.vida += 1;
            }
            if (this.hum2.vida < this.hum2.vidaMax){
              this.hum2.vida += 1;
             }
            if (this.hum3.vida < this.hum3.vidaMax) {
              this.hum3.vida += 1;
            }
            this.sala++;
            this.scene.start("mapa", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, sala: this.sala, mapa: this.mapa, criaturas: this.criaturas });})
        .on('pointerover', ()=> {vida.setScale(0.7)})
        .on('pointerout', ()=> {vida.setScale(0.6)});
        vida.setScale(0.6);
  }
}