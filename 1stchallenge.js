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
