
const cuadrado = document.querySelector("#cuadrado")
function updateBg (reset){
    
    if(reset){
        cuadrado.classList.remove("extra")
    }else {
        cuadrado.classList.add("extra") 

    }
}