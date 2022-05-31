// function gustos (){
//   let x =  document.getElementById("helados").value
//   document.getElementById("resultado").innerHTML = x
// }

// function escribi (){
//     let valorInput = document.getElementById("input")
//     alert(valorInput.value.toUpperCase())
// }

// function calculadora () {
//   let numAction = prompt("que operacion aritmetica deseas hacer?")
//   let num1 = parseInt(prompt("ingresa el primer valor"))
//   let num2 = parseInt(prompt("ingresa el segundo valor"))

//   if(numAction=== "sumar" || numAction === "+"){
//     document.getElementById("resultado").innerHTML = num1 + num2 
//   }
// }


const selectElement = document.querySelector("#helados")
const resultado = document.querySelector("#resultado")

selectElement.addEventListener("change" , (event) =>{
   resultado.innerHTML = event.target.value
})


const calcular = document.querySelector("#calcular")

calcular.addEventListener("click", (event) =>{
  resultado.innerHTML = event.target.value
})