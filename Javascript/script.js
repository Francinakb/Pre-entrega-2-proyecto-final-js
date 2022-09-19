const aceites = [
    {
        nombre: 'Crema Corporal Royal para Dolores Musculares y Articulares 50gr 39,9%',
        precio: 2699,
        img: "../img/productos3.png",
        descripcion: 'Crema Corporal Royal CBD - Importada 39,9% de CBD 50gr. Crema Corporal Royal Para CBD es muy efectiva en los dolores de origen muscular o reumático, y en cuadros dermatológicos como urticarias, dermatitis o psoriasis. Tiene propiedades relajantes, antiinflamatorias y antioxidantes.',
        id: 0,
        cantidad: 0

    },
    {
        nombre: 'Aceite Sublingual Rojo 10% 10ml',
        precio: 2649,
        img: "../img/productos4.png",
        descripcion: 'Aceite Sublingual Rojo CBD Royal Importado 10% de CBD 10ml. Aceite Sublingual Rojo CBD de 10% (cáñamo) ROYAL un producto 100% medicinal con propiedades curativas increíbles. Uno de los aceites con más porcentaje de CBD del mercado (39,9%) La naturaleza no se equivoca, cada elemento natural tiene increíbles beneficios. Por ejemplo, la planta cannabinoide CBD te ofrece estos: antidepresivo, trastornos de bipolaridad, regula dolores crónicos, estimula el crecimiento óseo, suprime Nauseas y vómitos, ayuda a controlar la epilepsia, reducir el riesgo de obstrucción de arterias, alivia las migrañas.',
        id: 1,
        cantidad: 0

    },

    {
        nombre: 'Aceite Sublingual Royal Premium 39,9% 30ml',
        precio: 6599,
        img: "../img/productos2.png",
        descripcion: 'Aceite Sublingual Royal CBD de 39.9% (cáñamo) ROYAL un producto 100% medicinal con propiedades curativas increíbles. Uno de los aceites con más porcentaje de CBD del mercado (39,9%) La naturaleza no se equivoca, cada elemento natural tiene increíbles beneficios. Por ejemplo, la planta cannabinoide CBD te ofrece estos: antidepresivo, trastornos de bipolaridad, regula dolores crónicos, estimula el crecimiento óseo, suprime Nauseas y vómitos, ayuda a controlar la epilepsia, reducir el riesgo de obstrucción de arterias, alivia las migrañas.',
        id: 2,
        cantidad: 0

    },

        {
        nombre: 'Aceite Sublingual Premium 39,9% 10ml',
        precio: 2649,
        img: "../img/productos1.png",
        descripcion: 'Aceite Sublingual Rojo CBD Royal Importado 10% de CBD 10ml. Aceite Sublingual Rojo CBD de 10% (cáñamo) ROYAL un producto 100% medicinal con propiedades curativas increíbles. Uno de los aceites con más porcentaje de CBD del mercado (39,9%) La naturaleza no se equivoca, cada elemento natural tiene increíbles beneficios. Por ejemplo, la planta cannabinoide CBD te ofrece estos: antidepresivo, trastornos de bipolaridad, regula dolores crónicos, estimula el crecimiento óseo, suprime Nauseas y vómitos, ayuda a controlar la epilepsia, reducir el riesgo de obstrucción de arterias, alivia las migrañas.',
        id: 3,
        cantidad: 0

    },

]

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


function showData() {
    console.log('activo')
    aceites.map((el) => {
        let appendProduct = document.getElementById('divproductos')
        let productos_div = document.createElement("div")
        productos_div.innerHTML = `
    <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
    <img src=${el.img} alt="productos" width="180" height="160">
    <div>
        <h3 class="fs-5 mt-4 px-4 pb-1 text-success" id="productosDispojnibles">${el.nombre}</h3>
        
        <div id="content${el.id}">
            <button id="suma${el.id}" class="btn btn-outline-success m-2" type="button" >Comprar</button>
            <button id="resta${el.id}" class="btn btn-outline-success m-2" type="button" >Sacar del
                carrito</button>
            <h4 id="cant${el.id}">${el.cantidad}</h4> 
        </div>

        <h4 class="fs-5 mt-4 px-4 pb-1">$${el.precio}</h4>
        <p class="px-4">${el.descripcion}</p>
    </div>
</div>`
        appendProduct.appendChild(productos_div)
        console.log(productos_div)



        let Suma = document.getElementById(`suma${el.id}`)
        let Resta = document.getElementById(`resta${el.id}`)
        let cant = document.getElementById(`cant${el.id}`)

        Suma.onclick = (e) => {
            e.preventDefault()
            cant.textContent = el.cantidad = el.cantidad + 1
        }
        Resta.onclick = (e) => {

            e.preventDefault()
            // operador ternario
            cant.textContent = el.cantidad = el.cantidad <= 0 ? el.cantidad = 0 : el.cantidad -1
            cant.textContent = el.cantidad = el.cantidad <= 0 ? el.cantidad = 0 : el.cantidad -1
        }
    })
}

//login 

function login(event) {
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

function generarToken(username, password) {
    return username + password
}

function tokenExistente() {
    if (localStorage.getItem("token") !== null) {
        return true
    } else {
        return false
    }
}

showData()













































































































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







































































