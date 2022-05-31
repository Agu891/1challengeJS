const myForm = event =>{
    event.preventDefault()
    // Expresion regular -->
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const formState = []
    let name = document.querySelector("#nombre")
    let lastname = document.querySelector("#apellido")
    let email = document.querySelector("#email")

    !name.value ? name.classList.add("error"):
    formState.push({element: "nombre" , value: name.value }) && name.classList.remove("error")

    !lastname.value ? lastname.classList.add("error") :
    formState.push({element : "apellido" , value: lastname.value}) && lastname.classList.remove("error")

    !email.value || !email.value.match(mailformat) ? email.classList.add("error") :
    formState.push({element : "email" , value: email.value}) && email.classList.remove("error")
        
        const html = formState.map(item => item.value)
        console.log(html)
        const dato = document.querySelector("#formValues")
        formState.length === 3 &&  ( dato.innerHTML = JSON.stringify(formState))
    
}