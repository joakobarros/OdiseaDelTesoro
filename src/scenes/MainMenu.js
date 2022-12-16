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
  
    const BotonEspañol = this.add
    .image(1830, 950, "menos")
    .setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
      this.getTranslations(ES_AR)
    })
    .setScale(4);
		
		const BotonEEUU = this.add
    .image(1650, 950, "mas")
		.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
			this.getTranslations(EN_US)
		})
		.setScale(4);

    getData();
    events.on('dato-recibido', this.dato, this);
    events.on('dato-recibido1', this.dato1, this);
    console.log(this.vH)
    //this.add.text(150, 400, 'HOLA')
  }

  updateWasChangedLanguage = () => {
		this.#wasChangedLanguage = FETCHED;
	}
	async getTranslations(lang){
		this.#language = lang;
		this.#wasChangedLanguage = FETCHING;
		await getTranslations(lang, this.updateWasChangedLanguage)
	}

	update(){
		
		if(this.#wasChangedLanguage === FETCHED){
		  this.#wasChangedLanguage = READY;
      this.creditosTxt.setText(getPhrase('Créditos'));
      this.jugarTxt.setText(getPhrase('Jugar'));
	  }
  }

  dato(data){
    this.vH = data
    this.add.text(100, 500, this.vH)
    
    console.log("🚀 ~ file: MainMenu.js:85 ~ create ~ this.vG)", this.vH)

  }
  
  dato1(data1){
    this.vG = data1
    //this.add.text(150, 400, this.vG)
    console.log("🚀 ~ file: MainMenu.js:115 ~ dato1 ~ this.vG", this.vG)
  }
}