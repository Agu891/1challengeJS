let auto = {
    color: "rojo",
    modelo: 1989,
    patente: "LFG233",
    marca: "Ford",
    prendido : "Electrico",
    velocidad : 20,
    velocidadmaxima: 120,

    encender(girarllave){
        if(girarllave === 1){
            console.log("WROOOM")
        }
        else {console.log("JJHJH")}
    },



    acelerar(pisar) {
     
        for(let i = this.velocidad; i < this.velocidadmaxima ; i++){
            if(pisar === "pisar acelerador"){console.log(i)}
        }
    },

     mostrarvelocidadactual(velocimetro) {
         if(velocimetro === "velocimetro"){
             console.log(this.velocidad)
         }
     },

     frenar(freno){
        for(let i = 0; i <= this.velocidad ; i++){
            if(freno === "pisar freno"){
                let detener = this.velocidad - i;
                console.log(detener)
            }
        }

     },

     apagar(girarllave){
         if(girarllave === -1){
             console.log("MOOORW")
         }
     }
}

auto.frenar("pisar freno")


