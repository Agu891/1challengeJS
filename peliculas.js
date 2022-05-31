const peliculas = []

const añadirpelicula = ( ID, Titulo) => {

  
   

    peliculas.push(peli = {
        ID : ID,
        Titulo : Titulo
    })
}






const evaluar = (peli) =>{

    for(let i = 0; i < peliculas.length; i++){
        if(peli === peliculas[i].Titulo){
            return "La pelicula  ya existe en el registro "

        } 
    }  
    return "La pelicula no existe en el registro"
}



añadirpelicula( 4, "Aquaman")
añadirpelicula(3, "Superboy")
añadirpelicula(5, "Batman")
añadirpelicula(1, "matrix")

const ordenarTitulo = () =>{
    peliculas.sort((a, b) =>{
        const tituloA = a.Titulo.toLowerCase();
        const tituloB = b.Titulo.toLowerCase();
        if(tituloA < tituloB ){
            return -1;
        }
        else if(tituloA >tituloB){
            return 1;
        }
        return 0;
    });
    console.log(peliculas)
}


const ordenarID = () =>{
    peliculas.sort((a, b) =>{
        
        if(a.ID < b.ID ){
            return -1;
        }
        else if(a.ID > b.ID){
            return 1;
        }
        return 0;
    });
    console.log(peliculas)
}


const eliminarpeliID = (number) =>{
    let i = 0;
    for(let i = 0; i < peliculas.length; i++){
        if(number === peliculas[i].ID){
            peliculas.splice(i,1)
        }

  }
}


console.log("")
