import { Mapa } from "../Controladores/mapa";

salas = [];
let sala = new Sala("s1", "descanso", ["s2", "s5"], 1204, 200);
this.salas.push(sala);
sala = new Sala("s2", "combate", ["s3"], 1204, 430);
this.salas.push(sala);
sala = new Sala("s3", "descanso", ["s4","s2"], 1204, 650);
this.salas.push(sala);
sala = new Sala("s4", "combate", ["s8", "s3"], 1204, 876);
this.salas.push(sala);
sala = new Sala("s5", "combate", ["s9", "s6"], 960, 200);
this.salas.push(sala);
sala = new Sala("s6", "descanso", ["s10", "s7","s5"], 960, 430);
this.salas.push(sala);
sala = new Sala("s7", "combate", ["s6", "s11","s8"], 960, 650);
this.salas.push(sala);
sala = new Sala("s8", "descanso", ["s12", "s7","s4"], 960, 876);
this.salas.push(sala);
sala = new Sala("s9", "descanso", ["s10", "s5"], 710, 200);
this.salas.push(sala);
sala = new Sala("s10", "combate", ["s9", "s6"], 710, 430);
this.salas.push(sala);
sala = new Sala("s11", "descanso", ["s12", "s7"], 710, 650);
this.salas.push(sala);
sala = new Sala("s12", "combateJefe", [], 710, 876);
this.salas.push(sala);


this.salas.map((sala) => {
   if (sala.nombre == this.mapa.salaActual) {
        for (let p = 0; p < sala.salasPosibles.length; p++) {
            const salaPos = sala.salasPosibles[p];
            if (!this.mapa.salasPosibles.includes(salaPos)) {
                this.mapa.salasPosibles.push(salaPos);
            }
        }
        sala = this.add.image(posX, posY, "salaActual");
   }
});

this.salas.forEach(sala => {
    if (this.mapa.salasPosibles.includes(sala.nombre) && !this.mapa.salasPasadas.includes(sala.nombre)) {
            this.sala = this.add
             .image(posX, posY, "salaDisponible")
             .setInteractive();
            this.sala.on("pointerover", () => {
              this.sala.setScale(1.1);
            });
            this.sala.on("pointerout", () => {
             this.sala.setScale(1);
            });
            this.sala.on("pointerdown", () => {
              this.mapa.salasPasadas.push(this.mapa.salaActual);
              this.mapa.salaActual = sala.nombre;
                switch (this.sala.tipo) {
                    case "combate":
                        this.scene.start("SelectorCriaturas", {
                            hum1: this.hum1,
                            hum2: this.hum2,
                            hum3: this.hum3,
                            criaturas: this.criaturas,
                            mapa: this.mapa
                        });
                    break;

                    case "descanso":
                        this.scene.start("Descanso", {
                            hum1: this.hum1,
                            hum2: this.hum2,
                            hum3: this.hum3,
                            criaturas: this.criaturas,
                            mapa: this.mapa,
                        });
                    break;

                    case "combateJefe":
                        this.scene.start("CombateJefe", {
                            hum1: this.hum1,
                            hum2: this.hum2,
                            hum3: this.hum3,
                        });
                    break;

                    default:
                    break;
                }
              
            });
    }else{ 
        if (this.mapa.salasPasadas.includes(sala.nombre)) {
            this.sala =this.add.image(salaX,salaY,"salaPasada");
        }
    }
});