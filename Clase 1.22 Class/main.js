// los nombres de las classes siempre tienen que comenzar con mayusculas
/* -Las clases son una mejora significativa sobre el manejo de la herencia
basada en prototipos de JS
- Podemos escribir una sintaxis sencilla para crear objetos
- No necesita la palabra function o declararse con const, usa la palabra class.
- Las propieddades que se asignan estan adentro de un metodo constructor.
*/




// eso de abajo sirve para cuando el HTML este cargado cargue todo de inmediato
window.addEventListener("load", () => {

    class Smartphone {
        constructor(marca){
            this.marca = marca
        }
        mensaje(){
            return `Ha llegado tu smarphone de la marca ${this.marca}`
        }
    }
    //Herencia de clases
    //En el constructor referenciamos solo parametros
    class Modelo extends Smartphone {
        constructor(marca, modelo){
            super(marca)
            this.modelo = modelo
        }
        mensajeCompleto(){
            return `${this.mensaje()}, y el modelo es ${this.modelo}`
        }
    }

     //Calculadora
     class Calculadora {
         constructor (n1,n2){
             this.n1 = n1
             this.n2 = n2
        }
        restar(){
            return this.n1 - this.n2
        }
        sumar(){
            return this.n1 + this.n2
        }
        
        multiplicar(){
            return this.n1 * this.n2
        }

        dividir(){
            return this.n1 / this.n2
        }
     }
     
     const myCalculadora = (n1,n2) => {
        let myCalculadora = new Calculadora(n1,n2)
        return myCalculadora
     }
     console.log(myCalculadora(10,10).sumar())

    let mySmartphone = new Modelo('Samsung', 'S22')
    
    const setMySmartphone = (marca, modelo) =>{
        let mySmartphone2 = new Modelo(marca,modelo)
        return mySmartphone2
    }
    //let mySmartphone = new Smartphone('Apple')
    document.querySelector("#results").innerHTML = setMySmartphone('Android', 'S9').mensajeCompleto()
}, true)

