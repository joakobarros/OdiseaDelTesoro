import Phaser from 'phaser'
import { sala1, sala10, sala11, sala2, sala3, sala4, sala5, sala6, sala7, sala8, sala9 } from '../Controladores/Salas';

export default class Menu extends Phaser.Scene
{

  sala;
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


	constructor()
	{
		super('Menu')
	}

    init(data) {
        this.sala = data.sala;
        this.hum1 = data.hum1;
        this.hum2 = data.hum2;
        this.hum3 = data.hum3;
        this.mapa = data.mapa;
        this.criaturas = data.criaturas;
        console.log(data);
    }

create() {

//////////////////////////////////////////////// variante de mapa

this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mapa');
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

switch (this.sala){

  case "s1":
    for (let p = 0; p < s1.salasPosibles.length; p++) {
      const salaPos = s1.salasPosibles[p];
      for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
        const salaPasada = this.mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break; 

  case "s2":
    for (let p = 0; p < s2.salasPosibles.length; p++) {
       const salaPos = s2.salasPosibles[p];
      for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
        const salaPasada = this.mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break;

  case "s3":
    for (let p = 0; p < s3.salasPosibles.length; p++) {
       const salaPos = s3.salasPosibles[p];
      for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
        const salaPasada = this.mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
           this.ActivarSala(salaPos);
        }
      }
    }
  break;
      
  case "s4":
    for (let p = 0; p < s4.salasPosibles.length; p++) {
       const salaPos = s4.salasPosibles[p];
      for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
         const salaPasada = this.mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
         }
      }
    }
  break;

  case "s5":
    for (let p = 0; p < s5.salasPosibles.length; p++) {
       const salaPos = s5.salasPosibles[p];
      for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
        const salaPasada = this.mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break;

  case "s6":
    for (let p = 0; p < s6.salasPosibles.length; p++) {
       const salaPos = s6.salasPosibles[p];
      for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
         const salaPasada = this.mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break;

  case "s7":
    for (let p = 0; p < s7.salasPosibles.length; p++) {
       const salaPos = s7.salasPosibles[p];
      for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
         const salaPasada = this.mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break;

  case "s8":
    for (let p = 0; p < s8.salasPosibles.length; p++) {
       const salaPos = s8.salasPosibles[p];
      for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
         const salaPasada = this.mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break;

  case "s9":
    for (let p = 0; p < s9.salasPosibles.length; p++) {
       const salaPos = s9.salasPosibles[p];
      for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
         const salaPasada = this.mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break;

  case "s10":
    for (let p = 0; p < s10.salasPosibles.length; p++) {
       const salaPos = s10.salasPosibles[p];
      for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
         const salaPasada = this.mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break;

  case "s11":
    for (let p = 0; p < s11.salasPosibles.length; p++) {
       const salaPos = s11.salasPosibles[p];
      for (let n = 0; n < this.mapa.salasPasadas.length; n++) {
         const salaPasada = this.mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break;

  default:
  break;
    }
}

///////////////////////////////// funcion activar sala
ActivarSala(salaPos){
  switch (salaPos) {
    case "s2":
      let salaP2 = this.add.image(100, 100, 'sala').setInteractive();
      salaP2.on('pointerover', ()=>{salaP2.setScale(4);});
      salaP2.on('pointerout', ()=>{salaP2.setScale(4.1)})
      salaP2.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s2");
        this.sala = "s2";
       this.scene.start("selectorC", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, sala: this.sala, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s3":
      let salaP3 = this.add.image(100, 100, 'sala').setInteractive();
      salaP3.on('pointerover', ()=>{salaP3.setScale(4);});
      salaP3.on('pointerout', ()=>{salaP3.setScale(4.1)})
      salaP3.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s3");
        this.sala = "s3";
       this.scene.start("selectorC", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, sala: this.sala, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s4":
      let salaP4 = this.add.image(100, 100, 'sala').setInteractive();
      salaP4.on('pointerover', ()=>{salaP4.setScale(4);});
      salaP4.on('pointerout', ()=>{salaP4.setScale(4.1)})
      salaP4.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s4");
        this.sala = "s4";
       this.scene.start("selectorC", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, sala: this.sala, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s5":
      let salaP5 = this.add.image(100, 100, 'sala').setInteractive();
      salaP5.on('pointerover', ()=>{salaP5.setScale(4);});
      salaP5.on('pointerout', ()=>{salaP5.setScale(4.1)})
      salaP5.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s5");
        this.sala = "s5";
       this.scene.start("selectorC", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, sala: this.sala, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s6":
      let salaP6 = this.add.image(100, 100, 'sala').setInteractive();
      salaP6.on('pointerover', ()=>{salaP6.setScale(4);});
      salaP6.on('pointerout', ()=>{salaP6.setScale(4.1)})
      salaP6.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s6");
        this.sala = "s6";
       this.scene.start("selectorC", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, sala: this.sala, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s7":
      let salaP7 = this.add.image(100, 100, 'sala').setInteractive();
      salaP7.on('pointerover', ()=>{salaP7.setScale(4);});
      salaP7.on('pointerout', ()=>{salaP7.setScale(4.1)})
      salaP7.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s7");
        this.sala = "s7";
       this.scene.start("selectorC", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, sala: this.sala, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s8":
      let salaP8 = this.add.image(100, 100, 'sala').setInteractive();
      salaP8.on('pointerover', ()=>{salaP8.setScale(4);});
      salaP8.on('pointerout', ()=>{salaP8.setScale(4.1)})
      salaP8.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s8");
        this.sala = "s8";
       this.scene.start("selectorC", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, sala: this.sala, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s9":
      let salaP9 = this.add.image(100, 100, 'sala').setInteractive();
      salaP9.on('pointerover', ()=>{salaP9.setScale(4);});
      salaP9.on('pointerout', ()=>{salaP9.setScale(4.1)})
      salaP9.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s9");
        this.sala = "s9";
       this.scene.start("selectorC", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, sala: this.sala, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s10":
      let salaP10 = this.add.image(100, 100, 'sala').setInteractive();
      salaP10.on('pointerover', ()=>{salaP10.setScale(4);});
      salaP10.on('pointerout', ()=>{salaP10.setScale(4.1)})
      salaP10.on('pointerdown', ()=>{
       this.mapa.salasPasadas.push("s10");
       this.sala = "s10";
       this.scene.start("selectorC", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, sala: this.sala, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s11":
      let salaP11 = this.add.image(100, 100, 'sala').setInteractive();
      salaP11.on('pointerover', ()=>{salaP11.setScale(4);});
      salaP11.on('pointerout', ()=>{salaP11.setScale(4.1)})
      salaP11.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s11");
        this.sala = "s11";
       this.scene.start("selectorC", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, sala: this.sala, criaturas: this.criaturas, mapa: this.mapa });
      });
      break;

      case "s12":
      let salaP12 = this.add.image(100, 100, 'sala').setInteractive();
      salaP12.on('pointerover', ()=>{salaP12.setScale(4);});
      salaP12.on('pointerout', ()=>{salaP12.setScale(4.1)})
      salaP12.on('pointerdown', ()=>{
        this.mapa.salasPasadas.push("s12");
        this.sala = "s12";
       this.scene.start("selectorC", { hum1: this.hum1, hum2: this.hum2, hum3: this.hum3, sala: this.sala, mapa: this.mapa, criaturas: this.criaturas });
      });
      break;
  
    default:
      break;
  }
}

//////////////////////////////////////////////// selector de sprites
  switch (this.hum1.nombre) {
    case "Arquero":
      this.humImg1 = this.add.image(133, 185, 'arquero');
      this.humImg1.setScale(2);
      break;
          
    case "Caballero":
      this.humImg1 = this.add.image(133, 185, 'caballero');
      this.humImg1.setScale(2);
      break;
          
    case "Piromano":
      this.humImg1 = this.add.image(133, 185, 'piromano');
      this.humImg1.setScale(2);
      break;
          
    default:
      break;
  }
          
  switch (this.hum2.nombre) {
    case "Arquero":
      this.humImg2 = this.add.image(133, 544, 'arquero')
      this.humImg2.setScale(2);
      break;
          
    case "Caballero":
      this.humImg2 = this.add.image(133, 544, 'caballero')
      this.humImg2.setScale(2);
      break;
          
    case "Piromano":
      this.humImg2 = this.add.image(133, 544, 'piromano')
      this.humImg2.setScale(2);
      break;
          
    default:
      break;
  }
          
  switch (hum3.nombre) {
    case "Arquero":
      this.humImg3 = this.add.image(133, 900, 'arquero').setInteractive()
      this.humImg3.setScale(2);
      break;
          
    case "Caballero":
      this.humImg3 = this.add.image(133, 900, 'caballero').setInteractive()
      this.humImg3.setScale(2);
      break;
          
    case "Piromano":
      this.humImg3 = this.add.image(133, 900, 'piromano').setInteractive();
      this.humImg3.setScale(2);
      break;
          
    default:
      break;
  }


//////////////////////////////////////////////////// estadisticas
        this.atk1 = this.add.text(220, 150, "atk: " + this.hum1.ataque, {
            fontSize: "37px",
            fill: "#FFFFFF",
            fontFamily: "georgia"
        })
        this.vida1 = this.add.text(220, 200, "vida: " + this.hum1.vida + "/" + this.hum1.vidaMax, {
            fontSize: "37px",
            fill: "#FFFFFF",
            fontFamily: "georgia"
        })

        this.atk2 = this.add.text(220, 500, "atk: " + this.hum2.ataque, {
            fontSize: "37px",
            fill: "#FFFFFF",
            fontFamily: "georgia"
        })
        this.vida2 = this.add.text(220, 550, "vida: " + this.hum2.vida + "/" + this.hum2.vidaMax, {
            fontSize: "37px",
            fill: "#FFFFFF",
            fontFamily: "georgia"
        })

        this.atk3 = this.add.text(220, 860, "atk: " + this.hum3.ataque, {
            fontSize: "37px",
            fill: "#FFFFFF",
            fontFamily: "georgia"
        })
        this.vida3 = this.add.text(220, 910, "vida: " + this.hum3.vida + "/" + this.hum3.vidaMax, {
            fontSize: "37px",
            fill: "#FFFFFF",
            fontFamily: "georgia"
        })

        this.cantCriaturas = this.add.text(1545, 590, "criaturas: " + this.criaturas, {
            fontSize: "50px",
            fill: "#FFFFFF",
            fontFamily: "georgia"
        })


      let pausa = this.add.image(1800,50,'pausa').setInteractive()
        .on('pointerdown',()=> {this.scene.start("pausa");})
        .on('pointerover',()=> {pausa.setScale(3.1)})
        .on('pointerout', ()=> {pausa.setScale(3)});
        pausa.setScale(3);

      
        //var continuar = this.add.image(1680,950,'continuar').setInteractive()
        //.on('pointerdown',()=> {  switch (sala) {
                    
          //case 1:{
          // this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
           //break;
          //}
          //case 2:{
          // this.scene.start("descanso", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
          // break;
          //}
          //case 3:{
          // this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
          // break;
          //}
          //case 4:{
          // this.scene.start("descanso", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
          // break;
          //}
          //case 5:{
          // this.scene.start("combateJefe", { hum1: hum1, hum2: hum2, hum3: hum3});
          // break;
          //}

       //}
   //})
        //.on('pointerover',()=> {continuar.setScale(5.1)})
        //.on('pointerout', ()=> {continuar.setScale(5)});
        //continuar.setScale(5);
 // }

//}

