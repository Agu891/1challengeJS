const API_URL = "https://jsonplaceholder.typicode.com"

const dataContainer = document.querySelector("#dataContainer")
const ulElement = document.createElement("ul")

/*
fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(users => {
        const template = users.map(user => `<li>${user.name} ${user.email}<li>` )    //esto no es lo mas recomendable    
        dataContainer.innerHTML = `<ul>${template}<ul>`
    })
    */

fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then( users => {
        users.map(user=>{
            let liElement = document.createElement("li")
            liElement.appendChild(
                document.createTextNode(`${user.name}  ${user.email}`)
            )
            ulElement.appendChild(liElement)
        })
        dataContainer.appendChild(ulElement)
    })
