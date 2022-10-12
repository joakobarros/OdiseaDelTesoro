import Phaser from 'phaser'

let hum1;
let hum2;
let hum3;
let criaturas;
let criat1;
let criat2;
let criat3;
let turno = 1;
let Tturno;
let ataque = "";
let criatImg1;
let criatImg2;
let criatImg3;
let humImg1;
let humImg2;
let humImg3;
let vidaH1;
let vidaH2;
let vidaH3;
let vidaC1;
let vidaC2;
let vidaC3;
let daño;
let muerte;
let sala;
let mapa;


export default class Combate extends Phaser.Scene
{
	constructor()
	{
		super('Combate')
	}

	init(data) {
        sala = data.sala;
        hum1 = data.hum1;
        hum2 = data.hum2;
        hum3 = data.hum3;
        mapa = data.mapa;
        criaturas = data.criaturas;
        criat1 = data.criat1;
        criat2 = data.criat2;
        criat3 = data.criat3;
        console.log(data);
    }
  
  create() {
  
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondocombate');
  
  ////////////////////////////////////////////// sonidos
  daño = this.sound.add('daño', {loop: false});
  muerte = this.sound.add('muerte', {loop: false});
      
  
  ////////////////////////////////////////////// carteles de salud
  vidaH1 = this.add.text(160,753,hum1.vida + "/" + hum1.vidaMax, {
    fontSize: "50px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  vidaH2 = this.add.text(420, 753, hum2.vida + "/" + hum2.vidaMax, {
    fontSize: "50px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  vidaH3 = this.add.text(700, 753, hum3.vida + "/" + hum3.vidaMax, {
    fontSize: "50px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  vidaC1 = this.add.text(1170, 753, criat1.vida + "/" + criat1.vidaMax, {
    fontSize: "50px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  vidaC2 = this.add.text(1430, 753, criat2.vida + "/" + criat2.vidaMax, {
    fontSize: "50px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  vidaC3 = this.add.text(1670, 753, criat3.vida + "/" + criat3.vidaMax, {
    fontSize: "50px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  Tturno = this.add.text(850, 100, "turno: " + turno, {
    fontSize: "60px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  
  ////////////////////////////////////////////// selector de sprites humanos
  switch (hum1.nombre) {
    case "arquero":
      humImg1 = this.add.image(200, 535, 'arquero').setInteractive();
      humImg1.setScale(4);
      break;
  
    case "caballero":
      humImg1 = this.add.image(200, 535, 'caballero').setInteractive();
      humImg1.setScale(4);
      break;
  
    case "piromano":
      humImg1 = this.add.image(200, 535, 'piromano').setInteractive()
      humImg1.setScale(4);
      break;
  
    default:
      break;
  }
  
  switch (hum2.nombre) {
    case "arquero":
      humImg2 = this.add.image(450, 535, 'arquero').setInteractive();
      humImg2.setScale(4);
      break;
  
    case "caballero":
      humImg2 = this.add.image(450, 535, 'caballero').setInteractive();
      humImg2.setScale(4);
      break;
  
    case "piromano":
      humImg2 = this.add.image(450, 535, 'piromano').setInteractive();
      humImg2.setScale(4);
      break;
  
    default:
      break;
  }
  
  switch (hum3.nombre) {
    case "arquero":
      humImg3 = this.add.image(700, 535, 'arquero').setInteractive()
      humImg3.setScale(4);
      break;
  
    case "caballero":
      humImg3 = this.add.image(700, 535, 'caballero').setInteractive()
      humImg3.setScale(4);
      break;
  
    case "piromano":
      humImg3 = this.add.image(700, 535, 'piromano').setInteractive();
      humImg3.setScale(4);
      break;
  
    default:
      break;
  }
  
  ////////////////////////////////////////////// selector de sprites criaturas
  switch (criat1.nombre) {
    case "esqueletos":
      criatImg1 = this.add.image(1200, 535, 'esqueletos').setInteractive();
      criatImg1.setScale(4);
      break;
    
    case "mago":
      criatImg1 = this.add.image(1200, 535, 'mago').setInteractive();
      criatImg1.setScale(4);
      break;
    
    case "polilla":
      criatImg1 = this.add.image(1200, 535, 'polilla').setInteractive();
      criatImg1.setScale(4);
      break;
    
    default:
      break;
  }
  
  switch (criat2.nombre) {
    case "esqueletos":
      criatImg2 = this.add.image(1450, 535, 'esqueletos').setInteractive();
      criatImg2.setScale(4);
      break;
    
    case "mago":
      criatImg2 = this.add.image(1450, 535, 'mago').setInteractive();
      criatImg2.setScale(4);
      break;
    
    case "polilla":
      criatImg2 = this.add.image(1450, 535, 'polilla').setInteractive();
      criatImg2.setScale(4);
      break;
    
    default:
      break;
  }
  
  switch (criat3.nombre) {
    case "esqueletos":
      criatImg3 = this.add.image(1700, 535, 'esqueletos').setInteractive();
      criatImg3.setScale(4);
      break;
      
    case "mago":
      criatImg3 = this.add.image(1700, 535, 'mago').setInteractive();
      criatImg3.setScale(4);
      break;
      
    case "polilla":
      criatImg3 = this.add.image(1700, 535, 'polilla').setInteractive();
      criatImg3.setScale(4);
      break;
      
    default:
      break;
  }
  
  var atacar = this.add.image(950,950,'atacar').setInteractive()
  .on('pointerdown',()=> {ataque = "si" })
  .on('pointerover',()=> {atacar.setScale(5.1)})
  .on('pointerout',()=> {atacar.setScale(5)})
  atacar.setScale(5)
  }
  
  
  update(){
  
  ///////////////////////////////////////////////// win condition
    if (hum1.vida <= 0 && hum3.vida <= 0 && hum2.vida <= 0) {
      setTimeout(()=>{ this.scene.start("winGuardian")},1000)
    }

    if (criat1.vida <= 0 && criat2.vida <= 0 && criat3.vida <= 0) {
      setTimeout(()=>{ 
        turno = 1;
        this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, mapa: mapa, criaturas: criaturas })}
        ,1000) 
    }
  
  
  ///////////////////////////////////////////////// eliminar unidades
  if (hum1.vida <= 0) {
    humImg1.destroy();
    vidaH1.text  = "";
  }
  if (hum2.vida <= 0) {
    humImg2.destroy();
    vidaH2.text  = "";
  }
  if (hum3.vida <= 0) {
    humImg3.destroy();
    vidaH3.text  = "";
  }
  if (criat1.vida <= 0) {
    criatImg1.destroy();
    vidaC1.text  = "";
  }
  if (criat2.vida <= 0) {
    criatImg2.destroy();
    vidaC2.text  = "";
  }
  if (criat3.vida <= 0) {
    criatImg3.destroy();
    vidaC3.text  = "";
  }
  
  ////////////////////////////////////////////////// indicador de turno
      
  switch (turno) {
    case 1:
      if (hum1.vida <= 0 && turno == 1) {
        turno++;
        Tturno.text = "turno: " +turno;
      } else {
        humImg1.setScale(4.5); 
      }
          
      break;
          
    case 2:
      if (criat1.vida <= 0 && turno == 2) {
        turno++;
        Tturno.text = "turno: " +turno;
      } else {
        criatImg1.setScale(4.5);
        humImg1.setScale(4);
      }
      
      break;
  
    case 3:
      if (hum2.vida <= 0 && turno == 3) {
        turno++;
        Tturno.text = "turno: " +turno;
      } else {
        humImg2.setScale(4.5);
        criatImg1.setScale(4);
      }
     
      break;
  
    case 4:
      if (criat2.vida <= 0 && turno == 4) {
        turno++;
        Tturno.text = "turno: " +turno;
      } else {
       criatImg2.setScale(4.5);
       humImg2.setScale(4);
      }
      
      break;
  
    case 5:
      if (hum3.vida <= 0 && turno == 5) {
        turno++;
        Tturno.text = "turno: " +turno;
      } else {
       humImg3.setScale(4.5);
       criatImg2.setScale(4);
      }
      
      break;
  
    case 6:
      if (criat3.vida <= 0 && turno == 6) {
        turno = 1;
        Tturno.text = "turno: " +turno;
      } else {
       criatImg3.setScale(4.5);
       humImg3.setScale(4);
      }
      break;
  
    default:
      break;
  }
    
    
      
  //////////////////////////////////////////////// humanos
    humImg1.on('pointerdown',()=> {
      if (ataque == "si") {
        switch (turno) {
            case 2:
            hum1.vida -= criat1.ataque;
            turno++;
            if (hum1.vida <= 0) {
              muerte.play();
            } else {
            daño.play();
            vidaH1.text = hum1.vida + "/" + hum1.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            }
            break;
  
            case 4:
            hum1.vida -= criat2.ataque;
            turno++;
            if (hum1.vida <= 0) {
              muerte.play();
            } else {
            daño.play();
            vidaH1.text = hum1.vida + "/" + hum1.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            }
            break;
  
            case 6:
            hum1.vida -= criat3.ataque;
            turno = 1;
            if (hum1.vida <= 0) {
              muerte.play();
            } else {
            daño.play();
            vidaH1.text = hum1.vida + "/" + hum1.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            }
            break;
        
          default:
            break;
        }}})
    humImg1.on('pointerover',()=> {
      if (turno == 2 || turno == 4 || turno == 6) {
      humImg1.setScale(4.1); 
    }
    })
    humImg1.on('pointerout', ()=> {
      humImg1.setScale(4);
    })
  
    humImg2.on('pointerdown',()=> {
      if (ataque == "si") {
        switch (turno) {
            case 2:
            hum2.vida -= criat1.ataque;
            turno++;
            if (hum2.vida <= 0) {
              muerte.play();
            } else {
            daño.play();
            vidaH2.text = hum2.vida + "/" + hum2.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            }
            break;
  
            case 4:
            hum2.vida -= criat2.ataque;
            turno++;
            if (hum2.vida <= 0) {
              muerte.play();
            } else {
            daño.play();
            vidaH2.text = hum2.vida + "/" + hum2.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            }
            break;
  
            case 6:
            hum2.vida -= criat3.ataque;
            turno = 1;
            if (hum2.vida <= 0) {
              muerte.play();
            } else {
            daño.play();
            vidaH2.text = hum2.vida + "/" + hum2.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            }
            break;
        
          default:
            break;
        }}})
    humImg2.on('pointerover',()=> {
      if (turno == 2 || turno == 4 || turno == 6) {
        humImg2.setScale(4.1); 
      }
    })
    humImg2.on('pointerout', ()=> {
      humImg2.setScale(4);
    })
    
    humImg3.on('pointerdown',()=> {
      if (ataque == "si") {
        switch (turno) {
          case 2:
            hum3.vida -= criat1.ataque;
            turno++;
            if (hum3.vida <= 0) {
              muerte.play();
            } else {
            daño.play();
            vidaH3.text = hum3.vida + "/" + hum3.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            }
            break;
  
            case 4:
            hum3.vida -= criat2.ataque;
            turno++;
            if (hum3.vida <= 0) {
              muerte.play();
            } else {
            daño.play();
            vidaH3.text = hum3.vida + "/" + hum3.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            }
            break;
  
            case 6:
            hum3.vida -= criat3.ataque;
            turno = 1;
            if (hum3.vida <= 0) {
              muerte.play();
            } else {
            daño.play();
            vidaH3.text = hum3.vida + "/" + hum3.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            }
            break;
        
          default:
            break;
        }}})
    humImg3.on('pointerover',()=> {
      if (turno == 2 || turno == 4 || turno == 6) {
        humImg3.setScale(4.1); 
      }
    })
    humImg3.on('pointerout', ()=> {
      humImg3.setScale(4);
    })
  
    /////////////////////////////////////// criaturas
    criatImg1.on('pointerdown',()=> {
      if (ataque == "si") {
        switch (turno) {
          case 1:
            if (hum1.nombre == "arquero" && criat1.nombre == "polilla") {
              muerte.play();
              criat1.vida = 0;
            } else {
              if (hum1.nombre == "caballero" && criat1.nombre == "esqueletos") {
                muerte.play();
              criat1.vida = 0;
            } else {
              if (hum1.nombre == "piromano" && criat1.nombre == "mago") {
                muerte.play();
              criat1.vida = 0;
            } else {
              daño.play();
            criat1.vida -= hum1.ataque;
            }}}
            turno++;
            vidaC1.text = criat1.vida + "/" + criat1.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            break;
  
            case 3:
              if (hum2.nombre == "arquero" && criat1.nombre == "polilla") {
                muerte.play();
                criat1.vida = 0;
              } else {
                if (hum2.nombre == "caballero" && criat1.nombre == "esqueletos") {
                  muerte.play();
                criat1.vida = 0;
              } else {
                if (hum2.nombre == "piromano" && criat1.nombre == "mago") {
                  muerte.play();
                criat1.vida = 0;
              } else {
                daño.play();
              criat1.vida -= hum2.ataque;
              }}}
              turno++;
            vidaC1.text = criat1.vida + "/" + criat1.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            break;
  
            case 5:
              if (hum3.nombre == "arquero" && criat1.nombre == "polilla") {
                muerte.play();
                criat1.vida = 0;
              } else {
                if (hum3.nombre == "caballero" && criat1.nombre == "esqueletos") {
                  muerte.play();
                criat1.vida = 0;
              } else {
                if (hum3.nombre == "piromano" && criat1.nombre == "mago") {
                  muerte.play();
                criat1.vida = 0;
              } else {
                daño.play();
              criat1.vida -= hum3.ataque;
              }}}
              turno++;
            vidaC1.text = criat1.vida + "/" + criat1.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            break;
        
          default:
            break;
        }}})
    criatImg1.on('pointerover',()=> {
      if (turno == 1 || turno == 3 || turno == 5) {
        criatImg1.setScale(4.1); 
      }
    })
    criatImg1.on('pointerout', ()=> {
      criatImg1.setScale(4);
    })
  
    criatImg2.on('pointerdown',()=> {
      if (ataque == "si") {
        switch (turno) {
          case 1:
            if (hum1.nombre == "arquero" && criat2.nombre == "polilla") {
              muerte.play();
              criat2.vida = 0;
            } else { 
            if (hum1.nombre == "caballero" && criat2.nombre == "esqueletos") {
              muerte.play();
              criat2.vida = 0;
            } else {
              if (hum1.nombre == "piromano" && criat2.nombre == "mago") {
                muerte.play();
              criat2.vida = 0;
            } else {
              daño.play();
            criat2.vida -= hum1.ataque;
            }}}
            turno++;
            vidaC2.text = criat2.vida + "/" + criat2.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            break;
  
            case 3:
              if (hum2.nombre == "arquero" && criat2.nombre == "polilla") {
                criat2.vida = 0;
              } else {
              if (hum2.nombre == "caballero" && criat2.nombre == "esqueletos") {
                criat2.vida = 0;
              } else{ 
              if (hum2.nombre == "piromano" && criat2.nombre == "mago") {
                criat2.vida = 0;
              } else {
                daño.play();
              criat2.vida -= hum2.ataque;
              }}}
              turno++;
            vidaC2.text = criat2.vida + "/" + criat2.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            break;
  
            case 5:
              if (hum3.nombre == "arquero" && criat2.nombre == "polilla") {
                criat2.vida = 0;
              } else {
                if (hum3.nombre == "caballero" && criat2.nombre == "esqueletos") {
                criat2.vida = 0;
              } else {
                if (hum3.nombre == "piromano" && criat2.nombre == "mago") {
                criat2.vida = 0;
              } else {
                daño.play();
              criat2.vida -= hum3.ataque;
              }}}
              turno++;
            vidaC2.text = criat2.vida + "/" + criat2.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            break;
        
          default:
            break;
        }}})
    criatImg2.on('pointerover',()=> {
      if (turno == 1 || turno == 3 || turno == 5) {
        criatImg2.setScale(4.1); 
      }
    })
    criatImg2.on('pointerout', ()=> {
      criatImg2.setScale(4);
    })
  
    criatImg3.on('pointerdown',()=> {
      if (ataque == "si") {
        switch (turno) {
          case 1:
            if (hum1.nombre == "arquero" && criat3.nombre == "polilla") {
              criat3.vida = 0;
            } else {
              if (hum1.nombre == "caballero" && criat3.nombre == "esqueletos") {
              criat3.vida = 0;
            } else {
              if (hum1.nombre == "piromano" && criat3.nombre == "mago") {
              criat3.vida = 0;
            } else {
              daño.play();
            criat3.vida -= hum1.ataque;
            }}}
            turno++;
            vidaC3.text = criat3.vida + "/" + criat3.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            break;
  
            case 3:
              if (hum2.nombre == "arquero" && criat3.nombre == "polilla") {
                criat3.vida = 0;
              } else {
                if (hum2.nombre == "caballero" && criat3.nombre == "esqueletos") {
                criat3.vida = 0;
              } else {
                if (hum2.nombre == "piromano" && criat3.nombre == "mago") {
                criat3.vida = 0;
              } else {
                daño.play();
              criat3.vida -= hum2.ataque;
              }}}
              turno++;
            vidaC3.text = criat3.vida + "/" + criat3.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            break;
  
            case 5:
              if (hum3.nombre == "arquero" && criat3.nombre == "polilla") {
                criat3.vida = 0;
              } else {
                if (hum3.nombre == "caballero" && criat3.nombre == "esqueletos") {
                criat3.vida = 0;
              } else {
                if (hum3.nombre == "piromano" && criat3.nombre == "mago") {
                criat3.vida = 0;
              } else {
                daño.play();
              criat3.vida -= hum3.ataque;
              }}}
              turno++;
            vidaC3.text = criat3.vida + "/" + criat3.vidaMax;
            Tturno.text = "turno: " +turno;
            ataque = "no";
            break;
        
          default:
            break;
        }}})
    criatImg3.on('pointerover',()=> {
      if (turno == 1 || turno == 3 || turno == 5) {
        criatImg3.setScale(4.1); 
      }
    })
    criatImg3.on('pointerout', ()=> {
      criatImg3.setScale(4);
    })
  }
}