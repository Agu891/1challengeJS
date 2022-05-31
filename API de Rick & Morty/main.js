const URL = 'https://rickandmortyapi.com/api/character'
const form = document.querySelector("#form")

form.addEventListener('submit', async (event)=> {
    event.preventDefault()
    const character = document.querySelector('#characters')
    const ul = document.createElement('ul')
    const input = document.querySelector('#search').value.toLowerCase()
    let data = []


    if(input){
        let response = await fetch(URL)
        let names = await response.json()
        data = names.results
    }
      const newArray =  data.flatMap(item => ({name : item.name.toLowerCase() , image: item.image}))
      const filterArray = newArray.filter(item => item.name === input )
      
      filterArray && filterArray.map(item =>{
        const li = document.createElement('li')
        const img = document.createElement('img')
        const p = document.createElement('p')
        p.appendChild(document.createTextNode(item.name))
        img.src = item.image
        li.appendChild(img)
        li.appendChild(p)
        ul.appendChild(li)
        character.appendChild(ul)
    })
    
})
/*
window.addEventListener('load', () => {
    const character = document.querySelector('#characters')
    const ul = document.createElement('ul')
    const data = JSON.parse(localStorage.getItem('characters'))
   
    const getData = () => {
        return fetch(URL)
        .then(response => response.json())
        // .then(characters => localStorage.setItem ('characters', JSON.stringify(characters.results.flatMap(item => item.image))))
        .then(characters => localStorage.setItem ('characters', JSON.stringify(characters.results.flatMap(item => ({name: item.name, image: item.image})))))
    }
    
    getData()

    data && data.map(item =>{
            const li = document.createElement('li')
            const img = document.createElement('img')
            const p = document.createElement('p')
            p.appendChild(document.createTextNode(item.name))
            img.src = item.image
            li.appendChild(img)
            li.appendChild(p)
            ul.appendChild(li)
            character.appendChild(ul)
        })

})*/