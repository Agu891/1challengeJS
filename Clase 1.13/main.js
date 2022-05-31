// setTimeout(() => {
//     console.log("Hola Nucbers")
// }, 3000)

// const callBack = () => console.log("Este es el callback a llamar")

// setTimeout(callBack , 3000)

const saludo = name => console.log(`hola ${name}`)
const mensaje = message => console.log(message)
const despedida = name => console.log (`Adios ${name}`)

setTimeout(saludo("Agustin"), 2000)
setTimeout(mensaje("hola comoo estass seguid estudiando!"), 4000)
setTimeout(despedida("Amigo"), 6000)