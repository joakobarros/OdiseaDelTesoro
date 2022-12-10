import Phaser from 'phaser'
import { sharedInstance as events } from "../scenes/EventCenter";
import { Personaje } from "../Controladores/Personajes";
import { getPhrase } from '../services/translations'

export default class CombateJefe extends Phaser.Scene{

  turnoTxt = getPhrase('Turno: ')
 
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
  
    this.humanos = [];
    console.log(this.data);
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondocombate');

    ////////////////////////////////////////////////////// sonidos
    this.daño = this.sound.add('daño', {loop: false});
    this.muerte = this.sound.add('muerte', {loop: false});
    this.golpe = this.sound.add('golpe', {loop: false});
    
    ////////////////////////////////////////////////////// jefe
    this.jefe = new Personaje(
      "Guardian",
      3,
      30,
      30,
      this,
      1450,
      500,
      "jefeAtaque",
      "jefeIdle",
      "jefeAtk",
      "CRIATURA"
    );
    this.jefe.setScale(4);
    this.vidaJefe = this.add.text(1430, 753, this.jefe.vida + "/" + this.jefe.vidaMax), 
    {
      fontSize: "50px",
      fontFamily: "Pixel",
    };
    this.vidaJefe.setScale(4);
    this.jefe.anims.play(this.jefe.keyIdle, true);

    ////////////////////////////////////////////// selector de sprites humanos
    let humano;
      humano = new Personaje(
        this.hum1.nombre,
        this.hum1.ataque,
        this.hum1.vida,
        this.hum1.vidaMax,
        this,
        200,
        535,
        this.hum1.keyAsset,
        this.hum1.keyIdle,
        this.hum1.keyAtk,
        this.hum1.tipo
      );
      this.humanos.push(humano);
      humano = new Personaje(
        this.hum2.nombre,
        this.hum2.ataque,
        this.hum2.vida,
        this.hum2.vidaMax,
        this,
        450,
        535,
        this.hum2.keyAsset,
        this.hum2.keyIdle,
        this.hum2.keyAtk,
        this.hum2.tipo
      );
      this.humanos.push(humano);
      humano = new Personaje(
        this.hum3.nombre,
        this.hum3.ataque,
        this.hum3.vida,
        this.hum3.vidaMax,
        this,
        700,
        535,
        this.hum3.keyAsset,
        this.hum3.keyIdle,
        this.hum3.keyAtk,
        this.hum3.tipo
      );
      this.humanos.push(humano);

    this.humanos.forEach((humano) => {
      if (humano.vida != 0) {
        humano.setScale(4);
        humano.play(humano.keyIdle, true)
  
        humano.vidaText = this.add.text(humano.x - 30, 753,
          humano.vida + "/" + humano.vidaMax,
          {
            fontSize: "50px",
            fontFamily: "Pixel",
          }
        );
      }
    }); 

    /// inicio del combate
    if (this.humanos[0].vida <= 0) {
      if (this.humanos[1].vida <= 0) {
        this.PersonajeAtacante = this.humanos[2];
        this.humanos[2].anims.play(this.humanos[2].keyAtk, true);
        this.ultimoTurnoHumano = 2;
      }else{ 
      this.PersonajeAtacante = this.humanos[1];
      this.humanos[1].anims.play(this.humanos[1].keyAtk, true);
      this.ultimoTurnoHumano = 1;
      }
    } else {
      this.PersonajeAtacante = this.humanos[0];
      this.humanos[0].anims.play(this.humanos[0].keyAtk, true);
      this.ultimoTurnoHumano = 0;
    }

    this.turno = "HUMANO";
    this.PersonajeAtacante.setScale(5);

    this.Tturno = this.add.text(650, 130, this.turnoTxt + this.turno, 
    {
      fontSize: "80px", 
      fontFamily: "Pixel",
    })
    
    var atacar = this.add
      .image(950,910,'boton')
      .setInteractive()
    .on('pointerdown',()=> {
      this.handleAtaque(this.PersonajeAtacante, this.personajeAtacar);
    })
    .on('pointerover',()=> {
      atacar.setScale(5.1)
    })
    .on('pointerout',()=> {
      atacar.setScale(5)
    })
    atacar.setScale(5) 

    this.atacartxt = this.add.text(790, 860, "atacar", 
    {
      fontSize: "80px",
      fill: "#330C03",
      fontFamily: "Pixel",
    });

    /////////// EVENTOS
    events.on("click_en_personaje", this.handleClickEnPersonaje, this);
    events.on("ataque_uno_a_otro", this.handleAtaque, this);
}

handleClickEnPersonaje(personaje) {
  if (this.turno !== personaje.tipo) {
    this.personajeAtacar = personaje;
  }
}

handleCambioTurno() {
  //// win condition
  let humMuertos = 0;
  this.humanos.forEach((humano) =>{
    if (humano.vida <= 0) {
      humMuertos += 1;
    }
    if (humMuertos == 3) {
      setTimeout(()=>{
        this.scene.start("WinGuardian"
      )},1000)
    }   
  })
  ///// cambio de turno
  if (this.turno === "HUMANO") {
    this.PersonajeAtacante.setScale(4);
    this.ultimoTurnoHumano += 1;

    if (this.ultimoTurnoHumano == 3) {
      this.PersonajeAtacante.anims.play(this.PersonajeAtacante.keyIdle, true)
      this.ultimoTurnoHumano = 0;
      this.turno = "CRIATURA"
      this.PersonajeAtacante.setScale(4);
      this.PersonajeAtacante = this.jefe;      
      this.PersonajeAtacante.setScale(5);
      this.jefe.anims.play(this.jefe.keyAtk, true)
    }else{ 
    if (this.humanos[this.ultimoTurnoHumano].vida <= 0) {
      this.handleCambioTurno();
    }else{
      this.PersonajeAtacante.anims.play(this.PersonajeAtacante.keyIdle, true)
      this.PersonajeAtacante = this.humanos[this.ultimoTurnoHumano];
      this.PersonajeAtacante.setScale(5);
      this.PersonajeAtacante.anims.play(this.PersonajeAtacante.keyAtk, true)
    }
   }
  } else {
    this.jefe.anims.play(this.jefe.keyIdle, true)
    this.PersonajeAtacante.setScale(4);
    this.turno = "HUMANO"
    if (this.humanos[this.ultimoTurnoHumano].vida <= 0) {
      this.handleCambioTurno();
    }else{
      this.PersonajeAtacante = this.humanos[this.ultimoTurnoHumano];
      this.PersonajeAtacante.setScale(5);
      this.PersonajeAtacante.anims.play(this.PersonajeAtacante.keyAtk, true)
    }
  }
  this.Tturno.setText(this.turnoTxt + this.turno);
}
  handleAtaque(personajeAtacante, personajeAtacado) {

    if (personajeAtacado.vida > 0) {
      personajeAtacado.vida -= personajeAtacante.ataque;
      if (personajeAtacado.nombre == "Guardian") {
          this.jefe.vida = personajeAtacado.vida;
          this.vidaJefe.setText(personajeAtacado.vida + "/" + personajeAtacado.vidaMax);
          this.daño.play();
          if (this.jefe.vida <= 0){
            this.muerte.play();
            setTimeout(()=>{
              this.scene.start("WinHumanos"
            )},1000)
          }
      } else {
        personajeAtacado.vidaText.setText(
        personajeAtacado.vida + "/" + personajeAtacado.vidaMax) 
      }
    
    if (personajeAtacado.vida <= 0) {
      personajeAtacado.vidaText.setText("0/" + personajeAtacado.vidaMax);
      personajeAtacado.visible = false;
      personajeAtacado.vidaText.visible = false;
      this.muerte.play();
    }else{
      this.golpe.play();
    }
    this.handleCambioTurno();}
  }
}