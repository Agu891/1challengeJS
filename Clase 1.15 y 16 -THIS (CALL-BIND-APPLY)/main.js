const luis = {
    name :"Luis",
    age : 35,
    instagram: "lanzaroth.js",
    saludar : function(vozAlta, enDespedida){
        const saludoOficial = `Hola, soy ${this.name} y tengo ${this.age}`
        const despedidaOficial = "Adios"

        const seguimeEnInstagram = () => console.log(`Hola, seguime en ${this.instagram}`)

        const saludo = vozAlta ? saludoOficial.toUpperCase() : saludoOficial
        const despedida = enDespedida ? despedidaOficial.toUpperCase() : despedidaOficial

        console.log(saludo)

        if(enDespedida){
            console.log(despedida)
        }
        seguimeEnInstagram()
    },
    familia : {
        name : "Mariana",
        age: 38,
        saludar : function(){
            console.log(`Hola ${this.name}`)
           
    }
  },
 
  
  
}

function saludar (name) {
    console.log(name)
}

const saludar2 = new saludar("Agustin") // new asigna el valor a saludar2 de la funcion a la que hace referenncia 


class Persona {
    constructor(name){
        this.name = name
        this.saludar = this.saludar.bind(this)
    }
    saludar() {
        console.log(`Hola soy ${this.name}`)
    }

}

Persona("Luis")

//const alfredo = { name : "Alfredo", age :23}
//alfredo.saludar = luis.saludar   // asigno el metodo saludar de luis pero hacer esto hace que se pierda la nocion del This 


// luis.saludar.call(alfredo, true, true) // llamo a el metodo dentro del objeto  luis y se lo aplico a el objeto alfredo

//Apply

//luis.saludar.apply(alfredo, [true, true]) // es lo mismo que usar el call cualquiera de los dos es valido

//Bind

// const botton = document.getElementById("botn")

// botton.addEventListener("click" , luis.saludar.bind(alfredo))  // call en este caso no entiende que this tiene que consumir, por eso usamos bind


const boton = document.querySelector("#botn")

 boton.addEventListener("click", luis.saludar.bind(luis))

           