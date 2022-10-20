import Phaser from 'phaser'
import { sala1, sala10, sala11, sala2, sala3, sala4, sala5, sala6, sala7, sala8, sala9 } from '../Controladores/Salas';

export default class Menu extends Phaser.Scene
{

  hum1;
  hum2;
  hum3;
  criaturas;
  atk1;
  atk2;
  atk3;
  vida1;
  vida2;
  vida3;
  cantCriaturas;
  humImg1;
  humImg2;
  humImg3;
  mapa;
  salaAc;


	constructor()
	{
		super('Mapa')
	}

    init(data) {
        this.hum1 = data.hum1;
        this.hum2 = data.hum2;
        this.hum3 = data.hum3;
        this.mapa = data.mapa;
        this.criaturas = data.criaturas;
        console.log(data);
    }

create() {

//////////////////////////////////////////////// variante de mapa

this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mapa').setScale(1.5,1.5);
let s1 = new sala1();
let s2 = new sala2();
let s3 = new sala3();
let s4 = new sala4();
let s5 = new sala5();
let s6 = new sala6();
let s7 = new sala7();
let s8 = new sala8();
let s9 = new sala9();
let s10 = new sala10();
let s11 = new sala11();

switch (this.mapa.salaActual){

  case "s1":
    this.salaAc = this.add.image(1204,200,'salaActual');
    for (let p = 0; p < s1.salasPosibles.length; p++) {
      const salaPos = s1.salasPosibles[p];
      /*if (! this.mapa.salasPosibles.includes(salaPos)) {
        this.mapa.salasPosibles.push(salaPos);
      }*/
      this.ActivarSala(salaPos);
    }
  break; 

  case "s2":
    this.salaAc = this.add.image(1204,430,'salaActual');
    for (let s = 0; s < s2.salasPosibles.length; s++) {
      const salaPos = s2.salasPosibles[s];
     for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
        const salaPasada = this.mapa.salasPasadas[n];
       if (salaPos != salaPasada) {
         this.ActivarSala(salaPos);
       }
     }
   }
    //this.ComprobacionSala();
  break;

  case "s3":
    this.salaAc = this.add.image(1204,650,'salaActual');
    for (let s = 0; s < s3.salasPosibles.length; s++) {
      const salaPos = s3.salasPosibles[s];
     for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
        const salaPasada = this.mapa.salasPasadas[n];
       if (salaPos != salaPasada) {
         this.ActivarSala(salaPos);
       }
     }
   }
   
    //this.ComprobacionSala();
  break;
      
  case "s4":
    this.salaAc = this.add.image(1204,876,'salaActual');
    for (let s = 0; s < s4.salasPosibles.length; s++) {
      const salaPos = s4.salasPosibles[s];
     for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
        const salaPasada = this.mapa.salasPasadas[n];
       if (salaPos != salaPasada) {
         this.ActivarSala(salaPos);
       }
     }
   }
    //this.ComprobacionSala();
  break;

  case "s5":
    this.salaAc = this.add.image(960,200,'salaActual');
    for (let s = 0; s < s5.salasPosibles.length; s++) {
      const salaPos = s5.salasPosibles[s];
     for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
        const salaPasada = this.mapa.salasPasadas[n];
       if (salaPos != salaPasada) {
         this.ActivarSala(salaPos);
       }
     }
   }
    //this.ComprobacionSala();
  break;

  case "s6":
    this.salaAc = this.add.image(960,430,'salaActual');
    for (let s = 0; s < s6.salasPosibles.length; s++) {
      const salaPos = s6.salasPosibles[s];
     for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
        const salaPasada = this.mapa.salasPasadas[n];
       if (salaPos != salaPasada) {
         this.ActivarSala(salaPos);
       }
     }
   }
    //this.ComprobacionSala();
  break;

  case "s7":
    this.salaAc = this.add.image(960,650,'salaActual');
    for (let s = 0; s < s7.salasPosibles.length; s++) {
      const salaPos = s7.salasPosibles[s];
     for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
        const salaPasada = this.mapa.salasPasadas[n];
       if (salaPos != salaPasada) {
         this.ActivarSala(salaPos);
       }
     }
   }
    //this.ComprobacionSala();
  break;

  case "s8":
    this.salaAc = this.add.image(960,876,'salaActual');
    for (let s = 0; s < s8.salasPosibles.length; s++) {
      const salaPos = s8.salasPosibles[s];
     for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
        const salaPasada = this.mapa.salasPasadas[n];
       if (salaPos != salaPasada) {
         this.ActivarSala(salaPos);
       }
     }
   }
    //this.ComprobacionSala();
  break;

  case "s9":
    this.salaAc = this.add.image(710,200,'salaActual');
    for (let s = 0; s < s9.salasPosibles.length; s++) {
      const salaPos = s9.salasPosibles[s];
     for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
        const salaPasada = this.mapa.salasPasadas[n];
       if (salaPos != salaPasada) {
         this.ActivarSala(salaPos);
       }
     }
   }
    //this.ComprobacionSala();
  break;

  case "s10":
    this.salaAc = this.add.image(710,430,'salaActual');
    for (let s = 0; s < s10.salasPosibles.length; s++) {
      const salaPos = s10.salasPosibles[s];
     for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
        const salaPasada = this.mapa.salasPasadas[n];
       if (salaPos != salaPasada) {
         this.ActivarSala(salaPos);
       }
     }
   }
    //this.ComprobacionSala();
  break;

  case "s11":
    this.salaAc = this.add.image(710,650,'salaActual');
    for (let s = 0; s < s11.salasPosibles.length; s++) {
      const salaPos = s11.salasPosibles[s];
     for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
        const salaPasada = this.mapa.salasPasadas[n];
       if (salaPos != salaPasada) {
         this.ActivarSala(salaPos);
       }
     }
   }
    //this.ComprobacionSala();
  break;

  default:
  break;
  }

//////////////////////////////////////////////// selector de sprites
  switch (this.hum1.nombre) {
    case "Arquero":
      this.humImg1 = this.add.image(133, 185, 'arqueroAtaque');
      this.humImg1.setScale(2);
      break;
          
    case "Caballero":
      this.humImg1 = this.add.image(133, 185, 'caballeroAtaque');
      this.humImg1.setScale(2);
      break;
          
    case "Piromano":
      this.humImg1 = this.add.image(133, 185, 'piromanoAtaque');
      this.humImg1.setScale(2);
      break;
          
    default:
      break;
  }
          
  switch (this.hum2.nombre) {
    case "Arquero":
      this.humImg2 = this.add.image(133, 544, 'arqueroAtaque')
      this.humImg2.setScale(2);
      break;
          
    case "Caballero":
      this.humImg2 = this.add.image(133, 544, 'caballeroAtaque')
      this.humImg2.setScale(2);
      break;
          
    case "Piromano":
      this.humImg2 = this.add.image(133, 544, 'piromanoAtaque')
      this.humImg2.setScale(2);
      break;
          
    default:
      break;
  }
          
  switch (this.hum3.nombre) {
    case "Arquero":
      this.humImg3 = this.add.image(133, 900, 'arqueroAtaque').setInteractive()
      this.humImg3.setScale(2);
      break;
          
    case "Caballero":
      this.humImg3 = this.add.image(133, 900, 'caballeroAtaque').setInteractive()
      this.humImg3.setScale(2);
      break;
          
    case "Piromano":
      this.humImg3 = this.add.image(133, 900, 'piromanoAtaque').setInteractive();
      this.humImg3.setScale(2);
      break;
          
    default:
      break;
  }


//////////////////////////////////////////////////// estadisticas
this.atk1 = this.add.text(220, 150, "atk: " + this.hum1.ataque, {
  fontSize: "37px",
  fontFamily: "georgia"
  })
this.vida1 = this.add.text(220, 200, "vida: " + this.hum1.vida + "/" + this.hum1.vidaMax, {
  fontSize: "37px",
  fontFamily: "georgia"
})

this.atk2 = this.add.text(220, 500, "atk: " + this.hum2.ataque, {
  fontSize: "37px",
  fontFamily: "georgia"
})
this.vida2 = this.add.text(220, 550, "vida: " + this.hum2.vida + "/" + this.hum2.vidaMax, {
  fontSize: "37px",
  fontFamily: "georgia"
})

this.atk3 = this.add.text(220, 860, "atk: " + this.hum3.ataque, {
  fontSize: "37px",
  fontFamily: "georgia"
})
this.vida3 = this.add.text(220, 910, "vida: " + this.hum3.vida + "/" + this.hum3.vidaMax, {
  fontSize: "37px",
  fontFamily: "georgia"
})

this.cantCriaturas = this.add.text(1545, 590, "criaturas: " + this.criaturas, {
  fontSize: "50px",
  fontFamily: "georgia"
})


let pausa = this.add.image(1800,50,'pausa').setInteractive()
  .on('pointerdown',()=> {this.scene.start("Pausa");})
  .on('pointerover',()=> {pausa.setScale(3.1)})
  .on('pointerout', ()=> {pausa.setScale(3)});
  pausa.setScale(3);  
}

///////////////////////////////// funcion comprobación de sala
/*ComprobacionSala(){
  for (let s = 0; s < this.mapa.salasPosibles.length; s++) {
    const salaPos = this.mapa.salasPosibles[s];
   for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
      const salaPasada = this.mapa.salasPasadas[n];
     if (salaPos != salaPasada) {
       this.ActivarSala(salaPos);
     }
   }
 }
}
for (let p = 0; p < s4.salasPosibles.length; p++) {
      this.mapa.salasPosibles.push(s4.salasPosibles[p]);
    }
    for (let s = 0; s < this.mapa.salasPosibles.length; s++) {
    const salaPos = this.mapa.salasPosibles[s];
   for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
      const salaPasada = this.mapa.salasPasadas[n];
     if (salaPos != salaPasada) {
       this.ActivarSala(salaPos);
     }
   }
 }
}
*/

///////////////////////////////// funcion activar sala
ActivarSala(salaPos){
  switch (salaPos) {
    case "s2":
      let salaP2 = this.add.image(1204, 430, 'salaDisponible').setInteractive();
      salaP2.on('pointerover', ()=>{salaP2.setScale(1.1);});
      salaP2.on('pointerout', ()=>{salaP2.setScale(1)})
      salaP2.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s2");
        this.mapa.salaActual = "s2";
       this.scene.start("SelectorCriaturas", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s3":
      let salaP3 = this.add.image(1204, 650, 'salaDisponible').setInteractive();
      salaP3.on('pointerover', ()=>{salaP3.setScale(1.1);});
      salaP3.on('pointerout', ()=>{salaP3.setScale(1)})
      salaP3.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s3");
        this.mapa.salaActual = "s3";
       this.scene.start("Descanso", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s4":
      let salaP4 = this.add.image(1204, 876, 'salaDisponible').setInteractive();
      salaP4.on('pointerover', ()=>{salaP4.setScale(1.1);});
      salaP4.on('pointerout', ()=>{salaP4.setScale(1)})
      salaP4.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s4");
        this.mapa.salaActual = "s4";
       this.scene.start("SelectorCriaturas", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s5":
      let salaP5 = this.add.image(960, 200, 'salaDisponible').setInteractive();
      salaP5.on('pointerover', ()=>{salaP5.setScale(1.1);});
      salaP5.on('pointerout', ()=>{salaP5.setScale(1)})
      salaP5.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s5");
        this.mapa.salaActual = "s5";
       this.scene.start("SelectorCriaturas", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s6":
      let salaP6 = this.add.image(960, 430, 'salaDisponible').setInteractive();
      salaP6.on('pointerover', ()=>{salaP6.setScale(1.1);});
      salaP6.on('pointerout', ()=>{salaP6.setScale(1)})
      salaP6.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s6");
        this.mapa.salaActual = "s6";
       this.scene.start("Descanso", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s7":
      let salaP7 = this.add.image(960, 650, 'salaDisponible').setInteractive();
      salaP7.on('pointerover', ()=>{salaP7.setScale(1.1);});
      salaP7.on('pointerout', ()=>{salaP7.setScale(1)})
      salaP7.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s7");
        this.mapa.salaActual = "s7";
       this.scene.start("SelectorCriaturas", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s8":
      let salaP8 = this.add.image(960, 876, 'salaDisponible').setInteractive();
      salaP8.on('pointerover', ()=>{salaP8.setScale(1.1);});
      salaP8.on('pointerout', ()=>{salaP8.setScale(1)})
      salaP8.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s8");
        this.mapa.salaActual = "s8";
       this.scene.start("Descanso", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s9":
      let salaP9 = this.add.image(710, 200, 'salaDisponible').setInteractive();
      salaP9.on('pointerover', ()=>{salaP9.setScale(1.1);});
      salaP9.on('pointerout', ()=>{salaP9.setScale(1)})
      salaP9.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s9");
        this.mapa.salaActual = "s9";
       this.scene.start("Descanso", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s10":
      let salaP10 = this.add.image(710, 430, 'salaDisponible').setInteractive();
      salaP10.on('pointerover', ()=>{salaP10.setScale(1.1);});
      salaP10.on('pointerout', ()=>{salaP10.setScale(1)})
      salaP10.on('pointerdown', ()=>{
       this.mapa.salasPasadas.push("s10");
       this.mapa.salaActual = "s10";
       this.scene.start("SelectorCriaturas", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s11":
      let salaP11 = this.add.image(710, 650, 'salaDisponible').setInteractive();
      salaP11.on('pointerover', ()=>{salaP11.setScale(1.1);});
      salaP11.on('pointerout', ()=>{salaP11.setScale(1)})
      salaP11.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s11");
        this.mapa.salaActual = "s11";
       this.scene.start("Descanso", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s12":
      let salaP12 = this.add.image(710, 876, 'salaDisponible').setInteractive();
      salaP12.on('pointerover', ()=>{salaP12.setScale(1.1);});
      salaP12.on('pointerout', ()=>{salaP12.setScale(1)})
      salaP12.on('pointerdown', ()=>{
       this.scene.start("CombateJefe", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3})});
      break;
  
    default:
      break;
  }
}
}
