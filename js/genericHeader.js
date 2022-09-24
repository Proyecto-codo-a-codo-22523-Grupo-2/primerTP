let etiquetaHeader = document.querySelector("header")
let contenidoHeader = ``

let botonDropdown = document.querySelector(".productos-con-icono-dropdown")
let contenidoDesplegable = document.querySelector(".navbar .productos")

function toggleHiddenAlElemento(contenidoADesplegar) {  
  return ()=>{contenidoADesplegar.classList.toggle("hidden")}
}

botonDropdown.addEventListener("click", toggleHiddenAlElemento(contenidoDesplegable))

let navbar = document.querySelector(".navbar")
let iconoMenuHamburguesa = document.querySelector(".icono-hamburguesa")

iconoMenuHamburguesa.addEventListener("click", toggleHiddenAlElemento(navbar))