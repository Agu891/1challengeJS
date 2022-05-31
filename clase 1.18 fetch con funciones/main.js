const API_URL = "https://jsonplaceholder.typicode.com"


// const loadUsers = async () => {
//     const response = await fetch(`${API_URL}/users`)   //metodo mas legible que usar un .then
//     const users = await response.json()
//     return users
// }

const loadUsers = async () => {
    return (await fetch(`${API_URL}/users`)).json()   //metodo mas resumido que el de arriba 
}


//el try catch es un metodo mas legible y util que el promise

document.addEventListener("DOMContentLoader",  async () => { 
    let users = []
    try{
        users = await loadUsers()
    }catch(e) {
        console.log(e)
    }
   // console.log(users)
    // console.log(users.flatMap(item => item.username))
    console.log(users.flatMap(item => item.username).includes("bret"))    // devuelve true o false sirve para buscar errores
    console.log(users.map(item => ({nombre : item.name})))  // creo un nuevo objeto y en ves de usersname lo guardo en nombre
    console.log(users.filter(item => item.id > 5))  // filtro por ID del los elementos del objeto devuelve un valor booleano
})