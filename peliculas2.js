const peliculas = []

const agregarpeli = (ID, titulo, descripción, año, duración, actores, director) => {

    peliculas.push(peli ={

        ID : ID,
        titulo : titulo,
        descripción: descripción,
        año : año,
        duración: duración,
        actores: [actores],
        director: director,

        cambiartitulo(title){
            this.titulo = title;
            
        },
        cambiardescripcion(description){
            this.descripción = description;
            
        },
        cambiaraño(year){
            this.año = year;
            
        },
        cambiarduración(duration){
            this.duración = duration;
            
        },
        agregaractores(actors){
            this.actores.push (actors);
            console.log(this.actores)
        },

     
        cambiardirector(director){
            this.director = director
           
        }


    })

console.log(peliculas)

}



agregarpeli(343,"The dark", "the dark se situa en londres, en el año 1200..",1989, "2h30m", "ryan goslyn", "tim burton")

peli.agregaractores("keanu reeves")



