import Phaser from 'phaser'




export default class Combate extends Phaser.Scene
{

 hum1;
 hum2;
 hum3;
 criaturas;
 criat1;
 criat2;
 criat3;
 turno;
 Tturno;
 ataque = "";
 criatImg1;
 criatImg2;
 criatImg3;
 humImg1;
 humImg2;
 humImg3;
 vidaH1;
 vidaH2;
 vidaH3;
 vidaC1;
 vidaC2;
 vidaC3;
 daño;
 muerte;
 mapa

 //// provisional
 criat1V;
 criat2V;
 criat3V;
 hum1V;
 hum2V;
 hum3V;

	constructor()
	{
		super('Combate')
	}

	init(data) {
        this.hum1 = data.hum1;
        this.hum2 = data.hum2;
        this.hum3 = data.hum3;
        this.mapa = data.mapa;
        this.criaturas = data.criaturas;
        this.criat1 = data.criat1;
        this.criat2 = data.criat2;
        this.criat3 = data.criat3;
        console.log(data);
    }
  
  create() {
  
    this.turno = 1;

    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondocombate');
  
  ////////////////////////////////////////////// sonidos
  this.daño = this.sound.add('daño', {loop: false});
  this.muerte = this.sound.add('muerte', {loop: false});
      
  
  ////////////////////////////////////////////// carteles de salud
  this.vidaH1 = this.add.text(160,753,this.hum1.vida + "/" + this.hum1.vidaMax, {
    fontSize: "50px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  this.vidaH2 = this.add.text(420, 753, this.hum2.vida + "/" + this.hum2.vidaMax, {
    fontSize: "50px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  this.vidaH3 = this.add.text(700, 753, this.hum3.vida + "/" + this.hum3.vidaMax, {
    fontSize: "50px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  this.vidaC1 = this.add.text(1170, 753, this.criat1.vida + "/" + this.criat1.vidaMax, {
    fontSize: "50px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  this.vidaC2 = this.add.text(1430, 753, this.criat2.vida + "/" + this.criat2.vidaMax, {
    fontSize: "50px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  this.vidaC3 = this.add.text(1670, 753, this.criat3.vida + "/" + this.criat3.vidaMax, {
    fontSize: "50px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  this.Tturno = this.add.text(850, 150, "turno: " + this.turno, {
    fontSize: "80px",
    //fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  ////////////////////////////////////////////// selector de sprites humanos
  switch (this.hum1.nombre) {
    case "Arquero":
      this.humImg1 = this.add.image(200, 535, 'arqueroAtaque').setInteractive();
      this.humImg1.setScale(4);
      this.hum1V = this.add.image(200, 535, 'arqueroV');
      this.hum1V.setScale(0);
      break;
  
    case "Caballero":
      this.humImg1 = this.add.image(200, 535, 'caballeroAtaque').setInteractive();
      this.humImg1.setScale(4);
      this.hum1V = this.add.image(200, 535, 'caballeroV');
      this.hum1V.setScale(0);
      break;
  
    case "Piromano":
      this.humImg1 = this.add.image(200, 535, 'piromanoAtaque').setInteractive()
      this.humImg1.setScale(4);
      this.hum1V = this.add.image(200, 535, 'piromanoV');
      this.hum1V.setScale(0);
      break;
  
    default:
      break;
  }
  
  switch (this.hum2.nombre) {
    case "Arquero":
      this.humImg2 = this.add.image(450, 535, 'arqueroAtaque').setInteractive();
      this.humImg2.setScale(4);
      this.hum2V = this.add.image(450, 535, 'arqueroV');
      this.hum2V.setScale(0);
      break;
  
    case "Caballero":
      this.humImg2 = this.add.image(450, 535, 'caballeroAtaque').setInteractive();
      this.humImg2.setScale(4);
      this.hum2V = this.add.image(450, 535, 'caballeroV');
      this.hum2V.setScale(0);
      break;
  
    case "Piromano":
      this.humImg2 = this.add.image(450, 535, 'piromanoAtaque').setInteractive();
      this.humImg2.setScale(4);
      this.hum2V = this.add.image(450, 535, 'piromanoV');
      this.hum2V.setScale(0);
      break;
  
    default:
      break;
  }
  
  switch (this.hum3.nombre) {
    case "Arquero":
      this.humImg3 = this.add.image(700, 535, 'arqueroAtaque').setInteractive()
      this.humImg3.setScale(4);
      this.hum3V = this.add.image(700, 535, 'arqueroV');
      this.hum3V.setScale(0);
      break;
  
    case "Caballero":
      this.humImg3 = this.add.image(700, 535, 'caballeroAtaque').setInteractive()
      this.humImg3.setScale(4);
      this.hum3V = this.add.image(200, 535, 'caballeroV');
      this.hum3V.setScale(0);
      break;
  
    case "Piromano":
      this.humImg3 = this.add.image(700, 535, 'piromanoAtaque').setInteractive();
      this.humImg3.setScale(4);
      this.hum3V = this.add.image(700, 535, 'piromanoV');
      this.hum3V.setScale(0);
      break;
  
    default:
      break;
  }
  
  ////////////////////////////////////////////// selector de sprites criaturas
  switch (this.criat1.nombre) {
    case "Esqueletos":
      this.criatImg1 = this.add.image(1200, 535, 'esqueletos').setInteractive();
      this.criatImg1.setScale(4);
      this.criat1V = this.add.image(1200, 535, 'esqueletosV').setInteractive();
      this.criat1V.setScale(0);
      break;
    
    case "Mago":
      this.criatImg1 = this.add.image(1200, 535, 'magoAtaque').setInteractive();
      this.criatImg1.setScale(4);
      this.criat1V = this.add.image(1200, 535, 'magoV').setInteractive();
      this.criat1V.setScale(0);
      break;
    
    case "Polilla":
      this.criatImg1 = this.add.image(1200, 535, 'polilla').setInteractive();
      this.criatImg1.setScale(4);
      this.criat1V = this.add.image(1200, 535, 'polillaV').setInteractive();
      this.criat1V.setScale(0);
      break;
    
    default:
      break;
  }
  
  switch (this.criat2.nombre) {
    case "Esqueletos":
      this.criatImg2 = this.add.image(1450, 535, 'esqueletos').setInteractive();
      this.criatImg2.setScale(4);
      this.criat2V = this.add.image(1450, 535, 'esqueletosV').setInteractive();
      this.criat2V.setScale(0);
      break;
    
    case "Mago":
      this.criatImg2 = this.add.image(1450, 535, 'magoAtaque').setInteractive();
      this.criatImg2.setScale(4);
      this.criat2V = this.add.image(1450, 535, 'magoV').setInteractive();
      this.criat2V.setScale(0);
      break;
    
    case "Polilla":
      this.criatImg2 = this.add.image(1450, 535, 'polilla').setInteractive();
      this.criatImg2.setScale(4);
      this.criat2V = this.add.image(1450, 535, 'polillaV').setInteractive();
      this.criat2V.setScale(0);
      break;
    
    default:
      break;
  }
  
  switch (this.criat3.nombre) {
    case "Esqueletos":
      this.criatImg3 = this.add.image(1700, 535, 'esqueletos').setInteractive();
      this.criatImg3.setScale(4);
      this.criat3V = this.add.image(1700, 535, 'esqueletosV').setInteractive();
      this.criat3V.setScale(0);
      break;
      
    case "Mago":
      this.criatImg3 = this.add.image(1700, 535, 'magoAtaque').setInteractive();
      this.criatImg3.setScale(4);
      this.criat3V = this.add.image(1700, 535, 'magoV').setInteractive();
      this.criat3V.setScale(0);
      break;
      
    case "Polilla":
      this.criatImg3 = this.add.image(1700, 535, 'polilla').setInteractive();
      this.criatImg3.setScale(4);
      this.criat3V = this.add.image(1700, 535, 'polillaV').setInteractive();
      this.criat3V.setScale(0);
      break;
      
    default:
      break;
  }
  
  var atacar = this.add.image(950,910,'atacar').setInteractive()
  .on('pointerdown',()=> {this.ataque = "si" })
  .on('pointerover',()=> {atacar.setScale(5.1)})
  .on('pointerout',()=> {atacar.setScale(5)})
  atacar.setScale(5)
  }
  
  
  update(){
  
  ///////////////////////////////////////////////// win condition
    if (this.hum1.vida <= 0 && this.hum3.vida <= 0 && this.hum2.vida <= 0) {
      setTimeout(()=>{ this.scene.start("WinGuardian")},1000)
    }

    if (this.criat1.vida <= 0 && this.criat2.vida <= 0 && this.criat3.vida <= 0) {
      setTimeout(()=>{ 
        this.turno = 1;
        this.scene.start("Mapa", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, mapa: this.mapa, criaturas: this.criaturas })}
        ,1000) 
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
  if (this.criat1.vida <= 0) {
    this.criatImg1.destroy();
    this.vidaC1.text  = "";
  }
  if (this.criat2.vida <= 0) {
    this.criatImg2.destroy();
    this.vidaC2.text  = "";
  }
  if (this.criat3.vida <= 0) {
    this.criatImg3.destroy();
    this.vidaC3.text  = "";
  }
  
  ////////////////////////////////////////////////// indicador de turno
      
  switch (this.turno) {
    case 1:
      if (this.hum1.vida <= 0 && this.turno == 1) {
        this.turno++;
        this.Tturno.text = "turno: " +this.turno;
      } else {
        this.hum1V.setScale(5); 
        this.criat3V.setScale(0);
        this.hum3V.setScale(0);
      }
          
      break;
          
    case 2:
      if (this.criat1.vida <= 0 && this.turno == 2) {
        this.turno++;
        this.Tturno.text = "turno: " +this.turno;
      } else {
        this.criat1V.setScale(5);
        this.hum1V.setScale(0);
        this.criat3V.setScale(0);
      }
      
      break;
  
    case 3:
      if (this.hum2.vida <= 0 && this.turno == 3) {
        this.turno++;
        this.Tturno.text = "turno: " +this.turno;
      } else {
        this.hum2V.setScale(5);
        this.criat1V.setScale(0);
        this.criat3V.setScale(0);
        this.hum1V.setScale(0);
      }
     
      break;
  
    case 4:
      if (this.criat2.vida <= 0 && this.turno == 4) {
        this.turno++;
        this.Tturno.text = "turno: " +this.turno;
      } else {
        this.criat2V.setScale(5);
        this.hum2V.setScale(0);
        this.criat1V.setScale(0);
      }
      
      break;
  
    case 5:
      if (this.hum3.vida <= 0 && this.turno == 5) {
        this.turno++;
        this.Tturno.text = "turno: " +this.turno;
      } else {
        this.hum3V.setScale(5);
        this.criat2V.setScale(0);
        this.hum2V.setScale(0);
      }
      
      break;
  
    case 6:
      if (this.criat3.vida <= 0 && this.turno == 6) {
        this.turno = 1;
        this.Tturno.text = "turno: " +this.turno;
      } else {
        this.criat3V.setScale(5);
        this.hum3V.setScale(0);
        this.criat2V.setScale(0);
      }
      break;
  
    default:
      break;
  }
    
    
      
  //////////////////////////////////////////////// humanos
  this.humImg1.on('pointerdown',()=> {
      if (this.ataque == "si") {
        switch (this.turno) {
            case 2:
              this.hum1.vida -= this.criat1.ataque;
              this.turno++;
            if (this.hum1.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH1.text = this.hum1.vida + "/" + this.hum1.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
  
            case 4:
              this.hum1.vida -= this.criat2.ataque;
              this.turno++;
            if (this.hum1.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH1.text = this.hum1.vida + "/" + this.hum1.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
  
            case 6:
              this.hum1.vida -= this.criat3.ataque;
              this.turno = 1;
            if (this.hum1.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH1.text = this.hum1.vida + "/" + this.hum1.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
        
          default:
            break;
        }}})
        this.humImg1.on('pointerover',()=> {
      if (this.turno == 2 || this.turno == 4 || this.turno == 6) {
        this.humImg1.setScale(4.1); 
    }
    })
    this.humImg1.on('pointerout', ()=> {
      this.humImg1.setScale(4);
    })
  
    this.humImg2.on('pointerdown',()=> {
      if (this.ataque == "si") {
        switch (this.turno) {
            case 2:
              this.hum2.vida -= this.criat1.ataque;
              this.turno++;
            if (this.hum2.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH2.text = this.hum2.vida + "/" + this.hum2.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
  
            case 4:
              this.hum2.vida -= this.criat2.ataque;
              this.turno++;
            if (this.hum2.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH2.text = this.hum2.vida + "/" + this.hum2.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
  
            case 6:
              this.hum2.vida -= this.criat3.ataque;
              this.turno = 1;
            if (this.hum2.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH2.text = this.hum2.vida + "/" + this.hum2.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
        
          default:
            break;
        }}})
        this.humImg2.on('pointerover',()=> {
      if (this.turno == 2 || this.turno == 4 || this.turno == 6) {
        this.humImg2.setScale(4.1); 
      }
    })
    this.humImg2.on('pointerout', ()=> {
      this.humImg2.setScale(4);
    })
    
    this.humImg3.on('pointerdown',()=> {
      if (this.ataque == "si") {
        switch (this.turno) {
          case 2:
            this.hum3.vida -= this.criat1.ataque;
            this.turno++;
            if (this.hum3.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH3.text = this.hum3.vida + "/" + this.hum3.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
  
            case 4:
              this.hum3.vida -= this.criat2.ataque;
              this.turno++;
            if (this.hum3.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH3.text = this.hum3.vida + "/" + this.hum3.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
  
            case 6:
              this.hum3.vida -= this.criat3.ataque;
              this.turno = 1;
            if (this.hum3.vida <= 0) {
              this.muerte.play();
            } else {
              this.daño.play();
              this.vidaH3.text = this.hum3.vida + "/" + this.hum3.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            }
            break;
        
          default:
            break;
        }}})
        this.humImg3.on('pointerover',()=> {
      if (this.turno == 2 || this.turno == 4 || this.turno == 6) {
        this.humImg3.setScale(4.1); 
      }
    })
    this.humImg3.on('pointerout', ()=> {
      this.humImg3.setScale(4);
    })
  
    /////////////////////////////////////// criaturas
    this.criatImg1.on('pointerdown',()=> {
      if (this.ataque == "si") {
        switch (this.turno) {
          case 1:
            if (this.hum1.nombre == "Arquero" && this.criat1.nombre == "Polilla") {
              this.muerte.play();
              this.criat1.vida = 0;
            } else {
              if (this.hum1.nombre == "Caballero" && this.criat1.nombre == "Esqueletos") {
                this.muerte.play();
                this.criat1.vida = 0;
            } else {
              if (this.hum1.nombre == "Piromano" && this.criat1.nombre == "Mago") {
                this.muerte.play();
                this.criat1.vida = 0;
            } else {
              this.daño.play();
              this.criat1.vida -= this.hum1.ataque;
            }}}
            this.turno++;
            this.vidaC1.text = this.criat1.vida + "/" + this.criat1.vidaMax;
            this.Tturno.text = "turno: " +this.turno;
            this.ataque = "no";
            break;
  
            case 3:
              if (this.hum2.nombre == "Arquero" && this.criat1.nombre == "Polilla") {
                this.muerte.play();
                this.criat1.vida = 0;
              } else {
                if (this.hum2.nombre == "Caballero" && this.criat1.nombre == "Esqueletos") {
                  this.muerte.play();
                  this.criat1.vida = 0;
              } else {
                if (this.hum2.nombre == "Piromano" && this.criat1.nombre == "Mago") {
                  this.muerte.play();
                  this.criat1.vida = 0;
              } else {
                this.daño.play();
                this.criat1.vida -= this.hum2.ataque;
              }}}
              this.turno++;
              this.vidaC1.text = this.criat1.vida + "/" + this.criat1.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            break;
  
            case 5:
              if (this.hum3.nombre == "Arquero" && this.criat1.nombre == "Polilla") {
                this.muerte.play();
                this.criat1.vida = 0;
              } else {
                if (this.hum3.nombre == "Caballero" && this.criat1.nombre == "Esqueletos") {
                  this.muerte.play();
                  this.criat1.vida = 0;
              } else {
                if (this.hum3.nombre == "Piromano" && this.criat1.nombre == "Mago") {
                  this.muerte.play();
                  this.criat1.vida = 0;
              } else {
                this.daño.play();
                this.criat1.vida -= this.hum3.ataque;
              }}}
              this.turno++;
              this.vidaC1.text = this.criat1.vida + "/" + this.criat1.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            break;
        
          default:
            break;
        }}})
        this.criatImg1.on('pointerover',()=> {
      if (this.turno == 1 || this.turno == 3 || this.turno == 5) {
        this.criatImg1.setScale(4.1); 
      }
    })
    this.criatImg1.on('pointerout', ()=> {
      this.criatImg1.setScale(4);
    })
  
    this.criatImg2.on('pointerdown',()=> {
      if (this.ataque == "si") {
        switch (this.turno) {
          case 1:
            if (this.hum1.nombre == "Arquero" && this.criat2.nombre == "Polilla") {
              this.muerte.play();
              this.criat2.vida = 0;
            } else { 
            if (this.hum1.nombre == "Caballero" && this.criat2.nombre == "Esqueletos") {
              this.muerte.play();
              this.criat2.vida = 0;
            } else {
              if (this.hum1.nombre == "Piromano" && this.criat2.nombre == "Mago") {
                this.muerte.play();
                this.criat2.vida = 0;
            } else {
              this.daño.play();
              this.criat2.vida -= this.hum1.ataque;
            }}}
            this.turno++;
            this.vidaC2.text = this.criat2.vida + "/" + this.criat2.vidaMax;
            this.Tturno.text = "turno: " +this.turno;
            this.ataque = "no";
            break;
  
            case 3:
              if (this.hum2.nombre == "Arquero" && this.criat2.nombre == "Polilla") {
                this.criat2.vida = 0;
              } else {
              if (this.hum2.nombre == "Caballero" && this.criat2.nombre == "Esqueletos") {
                this.criat2.vida = 0;
              } else{ 
              if (this.hum2.nombre == "Piromano" && this.criat2.nombre == "Mago") {
                this.criat2.vida = 0;
              } else {
                this.daño.play();
                this.criat2.vida -= this.hum2.ataque;
              }}}
              this.turno++;
              this.vidaC2.text = this.criat2.vida + "/" + this.criat2.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            break;
  
            case 5:
              if (this.hum3.nombre == "Arquero" && this.criat2.nombre == "Polilla") {
                this.criat2.vida = 0;
              } else {
                if (this.hum3.nombre == "Caballero" && this.criat2.nombre == "Esqueletos") {
                  this.criat2.vida = 0;
              } else {
                if (this.hum3.nombre == "Piromano" && this.criat2.nombre == "Mago") {
                  this.criat2.vida = 0;
              } else {
                this.daño.play();
                this.criat2.vida -= this.hum3.ataque;
              }}}
              this.turno++;
              this.vidaC2.text = this.criat2.vida + "/" + this.criat2.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            break;
        
          default:
            break;
        }}})
        this.criatImg2.on('pointerover',()=> {
      if (this.turno == 1 || this.turno == 3 || this.turno == 5) {
        this.criatImg2.setScale(4.1); 
      }
    })
    this.criatImg2.on('pointerout', ()=> {
      this.criatImg2.setScale(4);
    })
  
    this.criatImg3.on('pointerdown',()=> {
      if (this.ataque == "si") {
        switch (this.turno) {
          case 1:
            if (this.hum1.nombre == "Arquero" && this.criat3.nombre == "Polilla") {
              this.criat3.vida = 0;
            } else {
              if (this.hum1.nombre == "Caballero" && this.criat3.nombre == "Esqueletos") {
                this.criat3.vida = 0;
            } else {
              if (this.hum1.nombre == "Piromano" && this.criat3.nombre == "Mago") {
                this.criat3.vida = 0;
            } else {
              this.daño.play();
              this.criat3.vida -= this.hum1.ataque;
            }}}
            this.turno++;
            this.vidaC3.text = this.criat3.vida + "/" + this.criat3.vidaMax;
            this.Tturno.text = "turno: " +this.turno;
            this.ataque = "no";
            break;
  
            case 3:
              if (this.hum2.nombre == "Arquero" && this.criat3.nombre == "Polilla") {
                this.criat3.vida = 0;
              } else {
                if (this.hum2.nombre == "Caballero" && this.criat3.nombre == "Esqueletos") {
                  this.criat3.vida = 0;
              } else {
                if (this.hum2.nombre == "Piromano" && this.criat3.nombre == "Mago") {
                  this.criat3.vida = 0;
              } else {
                this.daño.play();
                this.criat3.vida -= this.hum2.ataque;
              }}}
              this.turno++;
              this.vidaC3.text = this.criat3.vida + "/" + this.criat3.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            break;
  
            case 5:
              if (this.hum3.nombre == "Arquero" && this.criat3.nombre == "Polilla") {
                this.criat3.vida = 0;
              } else {
                if (this.hum3.nombre == "Caballero" && this.criat3.nombre == "Esqueletos") {
                  this.criat3.vida = 0;
              } else {
                if (this.hum3.nombre == "Piromano" && this.criat3.nombre == "Mago") {
                  this.criat3.vida = 0;
              } else {
                this.daño.play();
                this.criat3.vida -= this.hum3.ataque;
              }}}
              this.turno++;
              this.vidaC3.text = this.criat3.vida + "/" + this.criat3.vidaMax;
              this.Tturno.text = "turno: " +this.turno;
              this.ataque = "no";
            break;
        
          default:
            break;
        }}})
        this.criatImg3.on('pointerover',()=> {
      if (this.turno == 1 || this.turno == 3 || this.turno == 5) {
        this.criatImg3.setScale(4.1); 
      }
    })
    this.criatImg3.on('pointerout', ()=> {
      this.criatImg3.setScale(4);
    })
  }
}