import Phaser from 'phaser'
import { EN_US, ES_AR } from '../enums/lenguages'
import { FETCHED, FETCHING, READY, TODO } from '../enums/status'
import { getTranslations, getPhrase } from '../services/translations'
import { getData } from '../services/dataBase'

import { sharedInstance as events } from '../scenes/EventCenter'

export default class MainMenu extends Phaser.Scene
{

  #language;
  #textSpanish;
  #textEnglish;
  #updatedTextInScene;
	#updatedString = 'Siguiente'
  #wasChangedLanguage = TODO
  

	constructor()
	{
		super('MainMenu')
	}

  init(data){
    this.#language = data.language;
  }

	create() {
    
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondomenu');

    let audio = this.sound.add('musica', {loop: true});
    audio.play();

    var jugar = this.add.image(this.cameras.main.centerX,700,'boton').setInteractive()
    .on('pointerdown',()=> { this.scene.start("SelectorHumanos"); })
    .on('pointerover', ()=> {jugar.setScale(5.1)})
    .on('pointerout', ()=> {jugar.setScale(5)});
    jugar.setScale(5);


    var creditos = this.add.image(this.cameras.main.centerX,900,'boton').setInteractive()
    .on('pointerdown',()=> {this.scene.start("Creditos")})
    .on('pointerover', ()=> {creditos.setScale(5.1)})
    .on('pointerout', ()=> {creditos.setScale(5)});
    creditos.setScale(5);

    this.jugarTxt = this.add
     .text(817, 645, getPhrase('Jugar'),
     { 
       fontSize: "85px", 
       fill: "#330C03", 
       fontFamily:'Pixel'
    })

    this.creditosTxt = this.add
     .text(790, 860, getPhrase('Créditos'),
     { 
       fontSize: "70px", 
       fill: "#330C03", 
       fontFamily:'Pixel'
    })
  
    const BotonEspañol = this.add                                           /////
    .image(1830, 950, "menos")                                                 //
    .setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {    //   botones de idiomas:
      this.getTranslations(ES_AR)                                              //
    })                                                                         //      los botones cuando los clickean
    .setScale(4);                                                              //      disparan un evento que ejecuta
		                                                                           //      la funcion getTranslation con el 
		const BotonEEUU = this.add                                                 //      idioma correspondiente
    .image(1650, 950, "mas")                                                   //
		.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {    //
			this.getTranslations(EN_US)                                              //
		})                                                                         //
		.setScale(4);                                                           /////

    getData();                                                           /////   getData: ejecuta la función de tomar los datos
    events.on('dato-recibido', this.dato, this);                            //   almacenados en la firebase y activa los eventos 
    events.on('dato-recibido1', this.dato1, this);                          //   de "dato-recibido" que pasan el dato a esta escena
    this.add.text(500, 500, this.vH)                                        //   para mostrarlos por pantalla
    this.add.text(500, 400, this.vG)                                     /////

  }

  updateWasChangedLanguage = () => {            // funcion de cambio de idioma
		this.#wasChangedLanguage = FETCHED;
	}
	async getTranslations(lang){
		this.#language = lang;
		this.#wasChangedLanguage = FETCHING;
		await getTranslations(lang, this.updateWasChangedLanguage)
	}

	update(){
		
		if(this.#wasChangedLanguage === FETCHED){    // cuando se cambia el idioma tambien se cambian los carteles de jugar y creditos
		  this.#wasChangedLanguage = READY;
      this.creditosTxt.setText(getPhrase('Créditos'));
      this.jugarTxt.setText(getPhrase('Jugar'));
	  }
  }

  dato(data){
    this.vH = data
  }

  dato1(data1){
    this.vG = data1
  }
}