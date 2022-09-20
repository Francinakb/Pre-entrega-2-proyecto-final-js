// agrego en localStorage mi lista de productos, tambien utilizo el formato json

const objetoPrueba = { nombre: "Aceite sublingual Premium", porcentajeCBD: "39,9%", contenido: "10ml", precio: 3749 }
const objetoPruebaDos = { nombre: "Aceite sublingual Royal Premium", porcentajeCBD: "39,9%", contenido: "30ml", precio: 6599 }
const objetoPruebaTres = { nombre: "Crema corporal para dolores musculares y articulares", porcentajeCBD: "39,9%", contenido: "50gr", precio: 2699 }
const objetoPruebaCuatro = { nombre: "Aceite sublingual Rojo", porcentajeCBD: "10%", contenido: "10ml", precio: 2649 }

function test(){
    const aceiteTexto = JSON.stringify(objetoPrueba)                   

localStorage.setItem("Aceite sublingual Premium", aceiteTexto)

const aceiteTextoDos = JSON.stringify(objetoPruebaDos)                   

localStorage.setItem("Aceite sublingual Royal Premium", aceiteTextoDos)

const aceiteTextoTres = JSON.stringify(objetoPruebaTres)                   

localStorage.setItem("Crema corporal para dolores musculares y articulares", aceiteTextoTres)

const aceiteTextoCuatro = JSON.stringify(objetoPruebaCuatro)                   

localStorage.setItem("Aceite sublingual Rojo", aceiteTextoCuatro)
}

test()

console.log(localStorage)





