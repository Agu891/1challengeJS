// LocalStorage sirve para guardar cosas puntuales,  y es para mantener informacion para luego acceder a ella.
// Tiene sus propios metodos
// Funciona como un centro de la verdad
// Esta inforamcion de maneja con la memoria del browser
// LocalStorage genera un objeto
// setItem -- agregar key al LS
// getItem  -- consumir u obtener key del LS
// removeItem -- eliminar key del LS
// clear() -- reset de todo el LS


const button = document.querySelector("#set-local-storage")
const names = [
    {name : 'Agustin', age: 33},
    {name : 'Fernando', age: 31},
    {name : 'Nadia', age: 36},
]

/* button.addEventListener('click', () => {
    // setItem --> guardar info en el LS
    localStorage.setItem('Nucba', JSON.stringify (names))
    console.log(JSON.parse(localStorage.getItem('Nucba')))
}) */

button.addEventListener('click', () => {
    localStorage.setItem('Nucba', JSON.stringify (names))
    const list = JSON.parse(localStorage.getItem('Nucba'))

    list && list.forEach( item => {
        const results = document.querySelector('#results')
        let p = document.createElement('p')

        p.appendChild(document.createTextNode(item.name))

        results.appendChild(p)
    });
    
}) 