
// utilizo foreach() para iterar sobre los elementos de mi arreglo y ver la lista de productos

const nombres = [
    "Aceite sublingual Premium",
    "Aceite sublingual Royal Premium",
    "Crema corporal para dolores musculares y articulares",
    "Aceite sublingual Rojo"
]

nombres.forEach((nom) => {
    console.log(nom)
})


// creo una constante con un arreglo, con objetos dentro, donde va a haber distintos productos

const listaProductos = [
    { nombre: "Aceite sublingual Premium", porcentajeCBD: "39,9%", contenido: "10ml", precio: 3749 },
    { nombre: "Aceite sublingual Royal Premium", porcentajeCBD: "39,9%", contenido: "30ml", precio: 6599 },
    { nombre: "Crema corporal para dolores musculares y articulares", porcentajeCBD: "39,9%", contenido: "50gr", precio: 2699 },
    { nombre: "Aceite sublingual Rojo", porcentajeCBD: "10%", contenido: "10ml", precio: 2649 }
]

// utilizo map() para poder modificar en un futuro, de ser necesario, la informacion, por ejemplo de los precios sin descuento

const listaPrecios = listaProductos.map((el) => el.precio)
console.log(listaPrecios)

const preciosSinDescuento = listaProductos.map((el) => {
    return {
        nombre: el.nombre,
        porcentajeCBD: el.porcentajeCBD,
        contenido: el.contenido,
        precio: el.precio * 1.25
    }
})

console.log(preciosSinDescuento)

// utilizo un find() que serviria para la busqueda de productos en el sitio 

const busqueda1 = listaProductos.find((el) => el.nombre === "Aceite sublingual Premium")
const busqueda2 = listaProductos.find((el) => el.nombre === "Aceite sublingual Royal Premium")
const busqueda3 = listaProductos.find((el) => el.nombre === "Crema corporal para dolores musculares y articulares")
const busqueda4 = listaProductos.find((el) => el.nombre === "Aceite sublingual Rojo")

// si se busca algun producto que no existe simplemente aparece undefined porque no esta en el array 

const busqueda5 = listaProductos.find((el) => el.nombre === "Aceite sublingual para Mascotas")

console.log(busqueda1)
console.log(busqueda2)
console.log(busqueda3)
console.log(busqueda4)
console.log(busqueda5)

// creo una class con un constructor para agregar un nuevo producto

class nuevoProducto {
    constructor(nombre, porcentajeCBD, contenido, precio) {
        this.nombre = nombre
        this.porcentajeCBD = porcentajeCBD
        this.contenido = contenido
        this.precio = precio
    }
}

const nuevoIngreso = new nuevoProducto("Capsula fish Oil", "39,9%", "60u", 7349)

console.log(nuevoIngreso)

// Aplicando DOM 
/* Tambien aplico queryselector para seleccionar nodo y con innerHTML modificar el encabezado, para la pagina de productos y la de contacto, y que no sea el mismo numero de inicio.*/

let encabezado = document.querySelector("#encabezado")
encabezado.innerHTML = `Contacto (011) 1546953217`


// Utilizo eventos para poder poner botones de compra, seleccionando 1 o mas productos, y pudiendo sacarlo, viendo cuantos seleccione.

let comprar = 0
let comprar2 = 0
let comprar3 = 0
let comprar4 = 0

let h4Comprar = document.querySelector("#comprar")
h4Comprar.innerHTML = comprar

let h4Comprar2 = document.querySelector("#comprar2")
h4Comprar2.innerHTML = comprar2

let h4Comprar3 = document.querySelector("#comprar3")
h4Comprar3.innerHTML = comprar3

let h4Comprar4 = document.querySelector("#comprar4")
h4Comprar4.innerHTML = comprar4

function sumarUno(){
    comprar++
    let h4Comprar = document.querySelector("#comprar")
h4Comprar.innerHTML = comprar
console.log(comprar)
}

function sumarDos(){
    comprar2++
    let h4Comprar2 = document.querySelector("#comprar2")
h4Comprar2.innerHTML = comprar2
console.log(comprar2)
}

function sumarTres(){
    comprar3++
    let h4Comprar3 = document.querySelector("#comprar3")
h4Comprar3.innerHTML = comprar3
console.log(comprar3)
}

function sumarCuatro(){
    comprar4++
    let h4Comprar4 = document.querySelector("#comprar4")
h4Comprar4.innerHTML = comprar4
console.log(comprar4)
}

function restarUno(){
    comprar--
    let h4Comprar = document.querySelector("#comprar")
h4Comprar.innerHTML = comprar
console.log(comprar)
}

function restarDos(){
    comprar2--
    let h4Comprar2 = document.querySelector("#comprar2")
h4Comprar2.innerHTML = comprar2
console.log(comprar2)
}

function restarTres(){
    comprar3--
    let h4Comprar3 = document.querySelector("#comprar3")
h4Comprar3.innerHTML = comprar3
console.log(comprar3)
}

function restarCuatro(){
    comprar4--
    let h4Comprar4 = document.querySelector("#comprar4")
h4Comprar4.innerHTML = comprar4
console.log(comprar4)
}


// Login de la pagina contacto

function login(event){
    event.preventDefault()
    console.log(event)
    let formulario = document.getElementById("login")
    console.dir(formulario)
    let valueUsername = formulario.username.value
    let valuePassword = formulario.password.value
    console.log(valueUsername)
    console.log(valuePassword)
    const token = generarToken(valueUsername, valuePassword)
    localStorage.setItem("token", token)
}

function generarToken(username, password){
    return username + password
}

function tokenExistente(){
    if (localStorage.getItem("token") !== null){
        return true
    } else {
        return false
    }
}












































































































// let nuevoUsuario = prompt("Ingrese nombre de usuario")

// if (nuevoUsuario == "") {
//     alert("No ingresaste un nombre de usuario")
// } else {
//     alert("Su nuevo nombre de usuario es " + nuevoUsuario)
// }

// Aplicando DOM 
// modifico el nombre de bienvenida del encabezado segun el nombre de usuario ingresado

// let bienvenidaUsuario = document.querySelector("#encabezado")
// bienvenidaUsuario.innerText = `Bienvenidx ${nuevoUsuario}`







































































