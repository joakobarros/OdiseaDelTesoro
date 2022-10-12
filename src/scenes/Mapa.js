import Phaser from 'phaser'
import { sala1, sala10, sala11, sala2, sala3, sala4, sala5, sala6, sala7, sala8, sala9 } from '../Controladores/Salas';

let sala;
let hum1;
let hum2;
let hum3;
let criaturas;
let atk1;
let atk2;
let atk3;
let vida1;
let vida2;
let vida3;
let cantCriaturas;
let humImg1;
let humImg2;
let humImg3;
let mapa;


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
        mapa = data.mapa;
        criaturas = data.criaturas;
        console.log(data);
    }

create() {

//////////////////////////////////////////////// variante de mapa

this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mapa');
var s1 = new sala1();
var s2 = new sala2();
var s3 = new sala3();
var s4 = new sala4();
var s5 = new sala5();
var s6 = new sala6();
var s7 = new sala7();
var s8 = new sala8();
var s9 = new sala9();
var s10 = new sala10();
var s11 = new sala11();

switch (sala){

  case "s1":
    for (let p = 0; p < s1.salasPosibles.length; p++) {
      const salaPos = s1.salasPosibles[p];
      for (let n = 0; n < mapa.salasPasadas.length; n++) {
        const salaPasada = mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break; 

  case "s2":
    for (let p = 0; p < s2.salasPosibles.length; p++) {
       const salaPos = s2.salasPosibles[p];
      for (let n = 0; n < mapa.salasPasadas.length; n++) {
        const salaPasada = mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break;

  case "s3":
    for (let p = 0; p < s3.salasPosibles.length; p++) {
       const salaPos = s3.salasPosibles[p];
      for (let n = 0; n < mapa.salasPasadas.length; n++) {
        const salaPasada = mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
           this.ActivarSala(salaPos);
        }
      }
    }
  break;
      
  case "s4":
    for (let p = 0; p < s4.salasPosibles.length; p++) {
       const salaPos = s4.salasPosibles[p];
      for (let n = 0; n < mapa.salasPasadas.length; n++) {
         const salaPasada = mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
         }
      }
    }
  break;

  case "s5":
    for (let p = 0; p < s5.salasPosibles.length; p++) {
       const salaPos = s5.salasPosibles[p];
      for (let n = 0; n < mapa.salasPasadas.length; n++) {
        const salaPasada = mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break;

  case "s6":
    for (let p = 0; p < s6.salasPosibles.length; p++) {
       const salaPos = s6.salasPosibles[p];
      for (let n = 0; n < mapa.salasPasadas.length; n++) {
         const salaPasada = mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break;

  case "s7":
    for (let p = 0; p < s7.salasPosibles.length; p++) {
       const salaPos = s7.salasPosibles[p];
      for (let n = 0; n < mapa.salasPasadas.length; n++) {
         const salaPasada = mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break;

  case "s8":
    for (let p = 0; p < s8.salasPosibles.length; p++) {
       const salaPos = s8.salasPosibles[p];
      for (let n = 0; n < mapa.salasPasadas.length; n++) {
         const salaPasada = mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break;

  case "s9":
    for (let p = 0; p < s9.salasPosibles.length; p++) {
       const salaPos = s9.salasPosibles[p];
      for (let n = 0; n < mapa.salasPasadas.length; n++) {
         const salaPasada = mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break;

  case "s10":
    for (let p = 0; p < s10.salasPosibles.length; p++) {
       const salaPos = s10.salasPosibles[p];
      for (let n = 0; n < mapa.salasPasadas.length; n++) {
         const salaPasada = mapa.salasPasadas[n];
        if (salaPos != salaPasada) {
          this.ActivarSala(salaPos);
        }
      }
    }
  break;

  case "s11":
    for (let p = 0; p < s11.salasPosibles.length; p++) {
       const salaPos = s11.salasPosibles[p];
      for (let n = 0; n < mapa.salasPasadas.length; n++) {
         const salaPasada = mapa.salasPasadas[n];
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
       mapa.salasPasadas.push("s2");
       sala = "s2";
       this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
      });
      break;

      case "s3":
      let salaP3 = this.add.image(100, 100, 'sala').setInteractive();
      salaP3.on('pointerover', ()=>{salaP3.setScale(4);});
      salaP3.on('pointerout', ()=>{salaP3.setScale(4.1)})
      salaP3.on('pointerdown', ()=>{
       mapa.salasPasadas.push("s3");
       sala = "s3";
       this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
      });
      break;

      case "s4":
      let salaP4 = this.add.image(100, 100, 'sala').setInteractive();
      salaP4.on('pointerover', ()=>{salaP4.setScale(4);});
      salaP4.on('pointerout', ()=>{salaP4.setScale(4.1)})
      salaP4.on('pointerdown', ()=>{
       mapa.salasPasadas.push("s4");
       sala = "s4";
       this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
      });
      break;

      case "s5":
      let salaP5 = this.add.image(100, 100, 'sala').setInteractive();
      salaP5.on('pointerover', ()=>{salaP5.setScale(4);});
      salaP5.on('pointerout', ()=>{salaP5.setScale(4.1)})
      salaP5.on('pointerdown', ()=>{
       mapa.salasPasadas.push("s5");
       sala = "s5";
       this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
      });
      break;

      case "s6":
      let salaP6 = this.add.image(100, 100, 'sala').setInteractive();
      salaP6.on('pointerover', ()=>{salaP6.setScale(4);});
      salaP6.on('pointerout', ()=>{salaP6.setScale(4.1)})
      salaP6.on('pointerdown', ()=>{
       mapa.salasPasadas.push("s6");
       sala = "s6";
       this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
      });
      break;

      case "s7":
      let salaP7 = this.add.image(100, 100, 'sala').setInteractive();
      salaP7.on('pointerover', ()=>{salaP7.setScale(4);});
      salaP7.on('pointerout', ()=>{salaP7.setScale(4.1)})
      salaP7.on('pointerdown', ()=>{
       mapa.salasPasadas.push("s7");
       sala = "s7";
       this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
      });
      break;

      case "s8":
      let salaP8 = this.add.image(100, 100, 'sala').setInteractive();
      salaP8.on('pointerover', ()=>{salaP8.setScale(4);});
      salaP8.on('pointerout', ()=>{salaP8.setScale(4.1)})
      salaP8.on('pointerdown', ()=>{
       mapa.salasPasadas.push("s8");
       sala = "s8";
       this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
      });
      break;

      case "s9":
      let salaP9 = this.add.image(100, 100, 'sala').setInteractive();
      salaP9.on('pointerover', ()=>{salaP9.setScale(4);});
      salaP9.on('pointerout', ()=>{salaP9.setScale(4.1)})
      salaP9.on('pointerdown', ()=>{
       mapa.salasPasadas.push("s9");
       sala = "s9";
       this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
      });
      break;

      case "s10":
      let salaP10 = this.add.image(100, 100, 'sala').setInteractive();
      salaP10.on('pointerover', ()=>{salaP10.setScale(4);});
      salaP10.on('pointerout', ()=>{salaP10.setScale(4.1)})
      salaP10.on('pointerdown', ()=>{
       mapa.salasPasadas.push("s10");
       sala = "s10";
       this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
      });
      break;

      case "s11":
      let salaP11 = this.add.image(100, 100, 'sala').setInteractive();
      salaP11.on('pointerover', ()=>{salaP11.setScale(4);});
      salaP11.on('pointerout', ()=>{salaP11.setScale(4.1)})
      salaP11.on('pointerdown', ()=>{
       mapa.salasPasadas.push("s11");
       sala = "s11";
       this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
      });
      break;

      case "s12":
      let salaP12 = this.add.image(100, 100, 'sala').setInteractive();
      salaP12.on('pointerover', ()=>{salaP12.setScale(4);});
      salaP12.on('pointerout', ()=>{salaP12.setScale(4.1)})
      salaP12.on('pointerdown', ()=>{
       mapa.salasPasadas.push("s12");
       sala = "s12";
       this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, mappa: mappa, criaturas: criaturas });
      });
      break;
  
    default:
      break;
  }
}

//////////////////////////////////////////////// selector de sprites
  switch (hum1.nombre) {
    case "Arquero":
      humImg1 = this.add.image(133, 185, 'arquero');
      humImg1.setScale(2);
      break;
          
    case "Caballero":
      humImg1 = this.add.image(133, 185, 'caballero');
      humImg1.setScale(2);
      break;
          
    case "Piromano":
      humImg1 = this.add.image(133, 185, 'piromano');
      humImg1.setScale(2);
      break;
          
    default:
      break;
  }
          
  switch (hum2.nombre) {
    case "Arquero":
      humImg2 = this.add.image(133, 544, 'arquero')
      humImg2.setScale(2);
      break;
          
    case "Caballero":
      humImg2 = this.add.image(133, 544, 'caballero')
      humImg2.setScale(2);
      break;
          
    case "Piromano":
      humImg2 = this.add.image(133, 544, 'piromano')
      humImg2.setScale(2);
      break;
          
    default:
      break;
  }
          
  switch (hum3.nombre) {
    case "Arquero":
      humImg3 = this.add.image(133, 900, 'arquero').setInteractive()
      humImg3.setScale(2);
      break;
          
    case "Caballero":
      humImg3 = this.add.image(133, 900, 'caballero').setInteractive()
      humImg3.setScale(2);
      break;
          
    case "Piromano":
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

