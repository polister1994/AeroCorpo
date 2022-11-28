//Variables

const botonCarrito = document.getElementById("boton-carrito");
const btnComprar = document.querySelectorAll(".boton-comprar");
const btnVaciarCarrito = document.getElementById("vaciar-carrito");

const informacionPrecio = document.querySelectorAll(".preciop")
const informacionFecha = document.querySelectorAll(".fecha");
const informacionDestino = document.querySelectorAll(".destino");

const carritoTBody = document.getElementById("carrito-tbody")

let articulosCarrito = [];

// AddElisteners

cargarEventListeners();

function cargarEventListeners(){
    botonCarrito.addEventListener("click", activarCarrito)

    btnVaciarCarrito.addEventListener("click", vaciarCarrito)

    btnComprar.forEach(compraBoleto => {
        compraBoleto.addEventListener("click",(e) =>{ 
            e.preventDefault();
            agregarVuelo(compraBoleto);
        })

    });
    
}

// Mostrar Carrito en HTML
function activarCarrito(e){
    const activarFlexCarrito = document.getElementById("div-carrito")

    console.log(activarFlexCarrito)
    e.preventDefault();
    console.log("click")

    if (activarFlexCarrito.classList.contains("flex")) {
        activarFlexCarrito.classList.remove("flex")
        
    } else {
        activarFlexCarrito.classList.add("flex");
    }

}

// Agregar vuelo

function agregarVuelo(compraBoleto){

    // console.log(compraBoleto.dataset)

    const datosDeCompra = compraBoleto.dataset
    
    articulosCarrito.push(datosDeCompra)
    imprimirHTML();
    // console.log(articulosCarrito)
    
}
 // Imprimir carrito en el HTML
function imprimirHTML(){
    carritoTBody.innerHTML= ""

    articulosCarrito.forEach(ticket => {
        const {precio,destino,fecha} = ticket
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${destino}</td>
            <td>${fecha}</td>
            <td>$${precio}</td>
        `

        carritoTBody.appendChild(row);
    });
}



// Vaciar carrito

function vaciarCarrito(){
    carritoTBody.innerHTML = ""


}
