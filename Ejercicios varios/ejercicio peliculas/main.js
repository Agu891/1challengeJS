let moviesArray = []
const mensaje = document.querySelector("#mensaje")

const joinMovie = event => {
    event.preventDefault()
    const nombresPelis = document.querySelector("#movieName").value
    const añoPelis = document.querySelector("#movieYear").value
   
   moviesArray.length < 5 && moviesArray.push({movie : nombresPelis, year: añoPelis})
    console.log(moviesArray)

    /*if(moviesArray.length === 5) {
        console.log("Que buenas pelis")} */
    
    moviesArray.length === 5 ? mensaje.innerHTML = "Que buenas pelis" : mensaje.innerHTML = "Elegi mas pelis"

}



