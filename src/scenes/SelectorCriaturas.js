import Phaser from 'phaser'
import { Personaje } from '../Controladores/Personajes';
import { getPhrase } from '../services/translations'

export default class SelectorCriaturas extends Phaser.Scene{

	constructor()
	{
		super('SelectorCriaturas')
	}

	init(data) {
    this.hum1 = data.hum1;
    this.hum2 = data.hum2;
    this.hum3 = data.hum3;
    this.mapa = data.mapa;
    this.criaturas = data.criaturas;
  }
  
  create() {
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'selector');

    ////////////////////////////////////////////// indicadores de cantidad
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let cant = 0;

    this.text1 = this.add.text(315, 870, "0", {
      fontSize: "120px",
      fontFamily: "Pixel"
    })
    this.text2 = this.add.text(925, 870, "0", {
      fontSize: "120px",
      fontFamily: "Pixel"
    })
    this.text3 = this.add.text(1525, 870, "0", {
      fontSize: "120px",
      fontFamily: "Pixel"
    })
    this.tcant = this.add.text(470, 160, getPhrase('Selecciona 3 unidades'), {
      fontSize: "50px",
      fontFamily: "Pixel",
      wordWrap: { width: 1000 }
    });

    //////////////////////////////////////////////// estadisticas
    const vidatxt = getPhrase('Vida: ')
    const dañotxt = getPhrase('Daño: ')

    let text4 = this.add.text(280, 700, vidatxt + "4", 
    {
      fontSize: "40px",
      fontFamily: "Pixel"
    })
    let text5 = this.add.text(280, 660, dañotxt + "1", 
    {
      fontSize: "40px",
      fontFamily: "Pixel"
    })
    let text6 = this.add.text(895, 700, vidatxt + "3", 
    {
      fontSize: "40px",
      fontFamily: "Pixel"
    })
    let text7 = this.add.text(895, 660, dañotxt + "2", 
    {
      fontSize: "40px",
      fontFamily: "Pixel"
    })
    let text8 = this.add.text(1500, 700, vidatxt + "5", 
    {
      fontSize: "40px",
      fontFamily: "Pixel"
    })
    let text9 = this.add.text(1500, 660, dañotxt + "3", 
    {
      fontSize: "40px",
      fontFamily: "Pixel"
    })

    //////////////////////////////////////////////////// sprites
    this.imag1 = new Personaje(
      'Esqueletos',
      1, 
      4, 
      4, 
      this, 
      350, 
      515, 
      'esqueletosIdle',
      'esqIdle',
      'esqAtk', 
      'CRIATURA'
    );
    this.imag2 = new Personaje(
      'Polilla', 
      2, 
      3, 
      3, 
      this, 
      960, 
      515, 
      'polillaAtaque', 
      'polIdle',
      'polAtk',
      'CRIATURA'
    );
    this.imag3 = new Personaje(
      'Mago', 
      2, 
      4, 
      4, 
      this, 
      1550, 
      515, 
      'magoAtaque',
      'magoIdle',
      'magoAtk', 
      'CRIATURA'
    );

    this.imag1.setScale(4);
    this.imag2.setScale(4);
    this.imag3.setScale(4);
    // animaciones idle
    this.imag1.anims.play(this.imag1.keyIdle, true);
    this.imag2.anims.play(this.imag2.keyIdle, true);
    this.imag3.anims.play(this.imag3.keyIdle, true);

    ////////////////////////////////////////////////// botones
    var menos3 = this.add.image(1440,950, 'menos').setInteractive()
      .on('pointerdown',()=> { 
        if (num3 > 0 && cant != 0){
          num3--
          cant--
          this.text3.text = num3;
        }})
    .on('pointerover', ()=> {
      menos3.setScale(4.4)
    })
    .on('pointerout', ()=> {
      menos3.setScale(4.3)
    });
    menos3.setScale(4.3);   

    var mas3 = this.add.image(1700,950,'mas').setInteractive()
      .on('pointerdown',()=> { 
        if (num3 < 3 && cant < 3){
          num3++
          cant++
          this.text3.text = num3;
        }})
    .on('pointerover', ()=> {
      mas3.setScale(4.4)
    })
    .on('pointerout', ()=> {
      mas3.setScale(4.3)
    });
    mas3.setScale(4.3);

    
    var mas2 = this.add.image(1090,950,'mas').setInteractive()
      .on('pointerdown',()=> { 
        if (num2 < 3 && cant < 3){
          num2++
          cant++
          this.text2.text = num2;
        }})
    .on('pointerover', ()=> {
      mas2.setScale(4.4)
    })
    .on('pointerout', ()=> {
      mas2.setScale(4.3)
    });
    mas2.setScale(4.3);

    var menos2 = this.add
      .image(830,950,'menos')
      .setInteractive()
      .on('pointerdown',()=> { 
        if (num2 > 0 && cant != 0){
          num2--
          cant--
          this.text2.text = num2;
        }
      })
    .on('pointerover', ()=> {
      menos2.setScale(4.4)
    })
    .on('pointerout', ()=> {
      menos2.setScale(4.3)
    });
    menos2.setScale(4.3); 

    var mas1 = this.add
      .image(475,950,'mas')
      .setInteractive()
      .on('pointerdown',()=> { 
        if (num1 < 3 && cant < 3){
          num1++
          cant++
          this.text1.text = num1;
        }
      })
    .on('pointerover', ()=> {
      mas1.setScale(4.4)
    })
    .on('pointerout', ()=> {
      mas1.setScale(4.3)
    });
    mas1.setScale(4.3);

    var menos1 = this.add
      .image(220,950,'menos')
      .setInteractive()
      .on('pointerdown',()=> { 
        if (num1 > 0 && cant != 0){
          num1--
          cant--
          this.text1.text = num1;
        }
      })
    .on('pointerover', ()=> {
      menos1.setScale(4.4)
    })
    .on('pointerout', ()=> {
      menos1.setScale(4.3)
    });
    menos1.setScale(4.3);

        
    /////////////////////////////////////////////// matriz de personajes
    var criats = []

    var continuar = this.add
    .image(1300, 190,'boton')
    .setInteractive()
    .on('pointerdown',()=> {
      if (cant == 3) {  
        for (let i = 0; i < num1; i++) {
        criats.push(this.imag1)
        }
        for (let i = 0; i < num2; i++) {
        criats.push(this.imag2)
        }
        for (let i = 0; i < num3; i++) {
        criats.push(this.imag3)
        }
        this.criaturas -= 3;
        this.scene.start("Combate", { 
          criat1: criats[0], 
          criat2: criats[1], 
          criat3: criats[2],
          mapa: this.mapa, 
          criaturas: this.criaturas, 
          hum1: this.hum1, 
          hum2: this.hum2, 
          hum3: this.hum3 
        })
      }
    })   
    .on('pointerover', ()=> {
      continuar.setScale(5.1)
    })
    .on('pointerout', ()=> {
      continuar.setScale(5)
    });
    continuar.setScale(5);

    this.continuartxt = this.add.text(1130, 150, getPhrase('Continuar'), 
    {
      fontSize: "60px",
      fill: "#330C03",
      fontFamily: "Pixel",
    });
  }
}