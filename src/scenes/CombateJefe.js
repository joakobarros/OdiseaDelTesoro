import Phaser from 'phaser'
import {Guardian} from "../Controladores/Personajes";



export default class CombateJefe extends Phaser.Scene{

hum1;
hum2;
hum3;
humImg1;
humImg2;
humImg3;
vidaH1;
vidaH2;
vidaH3;
vidaJefe;
ataque;
jefe;
jefeImg;
turno;
Tturno;
daño;
muerte;
golpe;

	constructor()
	{
		super('CombateJefe')
	}

    init(data) {
        this.hum1 = data.hum1;
        this.hum2 = data.hum2;
        this.hum3 = data.hum3;
    }
  
  create() {    
  
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondocombate');

    this.turno = 1;
  
  ////////////////////////////////////////////////////// sonidos
  this.daño = this.sound.add('daño', {loop: false});
  this.muerte = this.sound.add('muerte', {loop: false});
  this.golpe = this.sound.add('golpe', {loop: false});
  
  ////////////////////////////////////////////////////// jefe
  this.jefe = new Guardian;
  this.jefeImg = this.add.image(1450, 510, 'jefeAtaque').setInteractive();
  this.jefeImg.setScale(8);
  this.jefeV = this.add.image(1450, 510, 'jefeV');
  this.jefeV.setScale(0);
  
  
  ////////////////////////////////////////////////////// indicadores de vida
  this.vidaH1 = this.add.text(160,753,this.hum1.vida + "/" + this.hum1.vidaMax, {
  fontSize: "50px",
  fontFamily: "georgia"
  })
  this.vidaH2 = this.add.text(420, 753, this.hum2.vida + "/" + this.hum2.vidaMax, {
  fontSize: "50px",
  fontFamily: "georgia"
  })
  this.vidaH3 = this.add.text(700, 753, this.hum3.vida + "/" + this.hum3.vidaMax, {
  fontSize: "50px",
  fontFamily: "georgia"
  })
  this.vidaJefe = this.add.text(1430, 753, this.jefe.vida + "/" + this.jefe.vidaMax, {
    fontSize: "50px",
  })
  this.Tturno = this.add.text(850, 100, "turno: " + this.turno, {
    fontSize: "60px",
  })
  
  
  ////////////////////////////////////////////// selector de sprites humanos
  switch (this.hum1.nombre) {
    case "Arquero":
      this.humImg1 = this.add.image(200, 535, 'arqueroAtaque').setInteractive();
      this.humImg1.setScale(4);
      break;
  
    case "Caballero":
      this.humImg1 = this.add.image(200, 535, 'caballeroAtaque').setInteractive();
      this.humImg1.setScale(4);
      break;
  
    case "Piromano":
      this.humImg1 = this.add.image(200, 535, 'piromanoAtaque').setInteractive()
      this.humImg1.setScale(4);
      break;
  
    default:
      break;
  }
  
  switch (this.hum2.nombre) {
    case "Arquero":
      this.humImg2 = this.add.image(450, 535, 'arqueroAtaque').setInteractive();
      this.humImg2.setScale(4);
      break;
  
    case "Caballero":
      this.humImg2 = this.add.image(450, 535, 'caballeroAtaque').setInteractive();
      this.humImg2.setScale(4);
      break;
  
    case "Piromano":
      this.humImg2 = this.add.image(450, 535, 'piromanoAtaque').setInteractive();
      this.humImg2.setScale(4);
      break;
  
    default:
      break;
  }
  
  switch (this.hum3.nombre) {
    case "Arquero":
      this.humImg3 = this.add.image(700, 535, 'arqueroAtaque').setInteractive()
      this.humImg3.setScale(4);
      break;
  
    case "Caballero":
      this.humImg3 = this.add.image(700, 535, 'caballeroAtaque').setInteractive()
      this.humImg3.setScale(4);
      break;
  
    case "Piromano":
      this.humImg3 = this.add.image(700, 535, 'piromanoAtaque').setInteractive();
      this.humImg3.setScale(4);
      break;
  
    default:
      break;
  }
  
  
  var atacar = this.add.image(900,950,'atacar').setInteractive()
  .on('pointerdown',()=> {this.ataque = "si" })
  .on('pointerover',()=> {atacar.setScale(5.1)})
  .on('pointerout',()=> {atacar.setScale(5)})
  atacar.setScale(5) 
  }
              
  update() {
  
  ///////////////////////////////////////////////// win condition
  if (this.hum1.vida <= 0 && this.hum3.vida <= 0 && this.hum2.vida <= 0) {
    this.scene.start("WinGuardian")
  }
  if (this.jefe.vida <= 0) {
    setTimeout(()=>{this.scene.start("WinHumanos")},1000)
  }
  
  ///////////////////////////////////////////////// indicador de turno
  switch (this.turno) {
    case 1:
      if (this.hum1.vida <= 0 && this.turno == 1) {
        this.turno++;
        this.Tturno.text = "turno: " + this.turno;
      } else {
        this.hum1.setScale(5);
        this.jefe.setScale(4); 
      } 
      break;
          
    case 2:
      if (this.hum2.vida <= 0 && this.turno == 2) {
        this.turno++;
        this.Tturno.text = "turno: " +this.turno;
      } else {
        this.hum2.setScale(5);
        this.hum1.setScale(4);
        this.jefe.setScale(4);
      }
      break;
  
    case 3:
      if (this.hum3.vida <= 0 && this.turno == 3) {
        this.turno++;
        this.Tturno.text = "turno: " +this.turno;
      } else {
        this.hum3.setScale(5);
        this.hum2.setScale(4);
        this.jefe.setScale(4);
      }
      break;

    case 4:
      this.hum3.setScale(4);
      this.jefe.setScale(8);
      break;
      
    default:
      break;
  }
  
  ///////////////////////////////////////////////// eliminar unidades
  if (this.hum1.vida <= 0) {
    this.humImg1.destroy();
    this.vidaH1.text  = "";
  }
  if (this.hum2.vida <= 0) {
    this.humImg2.destroy();
    this.vidaH2.text  = "";
  }
  if (this.hum3.vida <= 0) {
    this.humImg3.destroy();
    this.vidaH3.text  = "";
  }
  
  //////////////////////////////////////////////// sprites humanos
  this.humImg1.on('pointerdown',()=> {
    if (this.ataque == "si" && this.turno == 4) {
      this.hum1.vida -= this.jefe.ataque;
          if (this.hum1.vida <= 0) {
            this.muerte.play();
            this.turno= 1;
          } else {
            this.golpe.play();
            this.vidaH1.text = this.hum1.vida + "/" + this.hum1.vidaMax;
            this.ataque = "no";
            this.turno= 1;
            this.Tturno.text = "turno: " + this.turno;
          }
    }})
    this.humImg1.on('pointerover',()=> {
    if (this.turno == 4) {
      this.humImg1.setScale(4.1); 
    }
  })
  this.humImg1.on('pointerout', ()=> {
    this.humImg1.setScale(4);
  })
  
  this.humImg2.on('pointerdown',()=> {
    if (this.ataque == "si" && this.turno == 4) {
      this.hum2.vida -= this.jefe.ataque;
      if (this.hum2.vida <= 0) {
        this.muerte.play();
        this.turno= 1;
      } else {
        this.golpe.play();
        this.vidaH2.text = this.hum2.vida + "/" + this.hum2.vidaMax;
        this.ataque = "no";
        this.turno= 1;
        this.Tturno.text = "turno: " +this.turno;
      }
  }})
  this.humImg2.on('pointerover',()=> {
    if (this.turno == 4) {
      this.humImg2.setScale(4.1); 
    }
  })
  this.humImg2.on('pointerout', ()=> {
    this.humImg2.setScale(4);
  })
  
  this.humImg3.on('pointerdown',()=> {
    if (this.ataque == "si" && this.turno == 4) {
      this.hum3.vida -= this.jefe.ataque;
      if (this.hum3.vida <= 0) {
        this.muerte.play();
        this.turno= 1;
      } else {
        this.golpe.play();
        this.vidaH3.text = this.hum3.vida + "/" + this.hum3.vidaMax;
        this.ataque = "no";
        this.turno= 1;
        this.Tturno.text = "turno: " +this.turno;
      }
  }})
  this.humImg3.on('pointerover',()=> {
    if (this.turno == 4) {
      this.humImg3.setScale(4.1); 
    }
  })
  this.humImg3.on('pointerout', ()=> {
    this.humImg3.setScale(4);
  })
  
  
  ////////////////////////////////////////////////////////// sprite jefe
  this.jefeImg.on('pointerdown',()=> {
    if (this.ataque == "si") {
      switch (this.turno) {
          case 1:
            this.jefe.vida -= this.hum1.ataque;
            this.turno++;
            this.daño.play();
            this.Tturno.text = "turno: " +this.turno;
            this.vidaJefe.text = this.jefe.vida + "/" + this.jefe.vidaMax;
            this.ataque = "no";
          break;
  
          case 2:
            this.jefe.vida -= this.hum2.ataque;
            this.turno++;
            this.daño.play();
            this.Tturno.text = "turno: " +this.turno;
            this.vidaJefe.text = this.jefe.vida + "/" + this.jefe.vidaMax;
            this.ataque = "no";
          break;
  
          case 3:
            this.jefe.vida -= this.hum3.ataque;
            this.turno++;
            this.daño.play();
            this.Tturno.text = "turno: " +this.turno;
            this.vidaJefe.text = this.jefe.vida + "/" + this.jefe.vidaMax;
            this.ataque = "no";
          break;
      
        default:
          break;
      }}})
      this.jefeImg.on('pointerover',()=> {
    if (this.turno < 4) {
      this.jefeImg.setScale(7.2); 
    }
  })
  this.jefeImg.on('pointerout', ()=> {
    this.jefeImg.setScale(7);
  })
  }
}