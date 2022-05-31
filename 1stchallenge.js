let supermarketList = ["mozzarella", "jamon", "prepizza", "salsa", "birra", "salame", "aceitunas", "cebolla", "ajo", "condimentos"];

    const primerascosas = () => {
    let primero = "";
    let i = 0;
    for (let i = 0; i < 5; i++)
        
        primero = primero + " " +  supermarketList[i];


     return primero;
}


 console.log(`Primero tengo que comprar ${primerascosas()} `)



 const ultimascosas = () => {
    let primero = "";
    let i = 0;
    for (let i = 5; i < 10 ; i++)
        
        primero = primero + " " +  supermarketList[i];


     return primero;
}
 

console.log( `Por ultimo tengo que comprar${ultimascosas()}`)



console.log(`tengo que comprar ${supermarketList.length} productos`)


const usuario = {

    Username : "Nitsuga",
    Name : "Agustin",
    Age : 32,
    Hobbies : ["Musica", "Basquet", "Caminar"],
    City : "La Plata",
    Student : true 
}



console.log(`Mi username es ${usuario.Username}`)

console.log(`Mi nombre es ${usuario.Name}`)

console.log(`Mi edad es ${usuario.Age}`)

console.log(`Tengo ${usuario.Hobbies.length} hobbies y son ${usuario.Hobbies} `)

const rtaestudio = () => {

    if (usuario.Student === true){

    return "Si soy estudiante";
}

    else {return "No estudio actualmente";
    }
}

console.log(`${rtaestudio()}`)

console.log(`Soy de ${usuario.City}`)


// const nombre = prompt("¿como te llamas?");

// if (nombre == "Agustin") {
//   alert("hola Agustin");
// }

// let numeroSuma = 3;
// const numero = Number(prompt("elegi un numero"));

//     if (numero ===2 ){
//        let suma = numero + numeroSuma;
//         alert (suma)
//     }

    //  let numeroResta = 3;
    //  const numeroR = Number(prompt("elegi un numero"))  
    //   if (numeroR === 4 ){
    //     let suma = numeroR - numeroResta;      
    //          alert (suma);
    //  }






   const diasdelasemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
  
// let dia = "Sabado"

// for(let i = 0; i < diasdelasemana.length ; i++){
//     if (dia === diasdelasemana[i] && (diasdelasemana[i] === "Lunes" || diasdelasemana[i] === "Martes" ||diasdelasemana[i] === "Miercoles" || diasdelasemana[i] === "Jueves" ||diasdelasemana[i] === "Viernes" )){
//         console.log("Es dia Habil")
//         break;
//     } 
//       else if (dia === diasdelasemana[i] && (diasdelasemana[i] === "Sabado" || diasdelasemana[i] === "Domingo")) {
//         console.log("Es fin de semana")
//         break;
        
//     }
  

   //} 

    const saymyname = (nombre,apellido) =>{
     return nombre + " " + apellido
    }

    console.log(saymyname("agus", "bertrand"))

  const finde = (dia) =>{

     for(let i = 0; i < diasdelasemana.length ; i++){
         if(dia === diasdelasemana[i] && (diasdelasemana[i] === "Lunes" || diasdelasemana[i] === "Martes" ||diasdelasemana[i] === "Miercoles" || diasdelasemana[i] === "Jueves" ||diasdelasemana[i] === "Viernes" )){
             return "Es dia habil"
         }else if (dia === diasdelasemana[i] && (diasdelasemana[i] === "Sabado" || diasdelasemana[i] === "Domingo")) 
         { return "Es fin de semana"}
      
     }
 }
 console.log(finde("Sabado"))



