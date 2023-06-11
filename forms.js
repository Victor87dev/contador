const somar = document.getElementById("somar")
const subtrair = document.getElementById("subtrair")
const numero = document.getElementById("numero")
const resetar = document.getElementById("resetar")

let contador = 0
let intervalo

somar.addEventListener("mousedown",(evt)=>{
  intervalo = setInterval(()=>{
   contador++ 
   numero.innerHTML = contador 
  },80)
})

subtrair.addEventListener("mousedown",(evt)=>{
    intervalo = setInterval(()=>{
     contador--
     numero.innerHTML = contador
    },80)
})

resetar.addEventListener("click",(evt)=>{
  contador = 0
  numero.innerHTML = contador
})

document.addEventListener("mouseup",(evt)=>{
    clearInterval(intervalo)
})

