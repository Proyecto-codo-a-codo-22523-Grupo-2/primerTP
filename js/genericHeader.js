let etiquetaHeader = document.querySelector("header")
let contenidoHeader = ``

let botonDropdown = document.querySelector(".productos-con-icono-dropdown")
let contenidoDesplegable = document.querySelector(".navbar .productos .dropbtn")

function controladorDropdown(contenidoADesplegar) {  
  return ()=>{contenidoADesplegar.classList.toggle("hidden")}
}

botonDropdown.addEventListener("click", controladorDropdown(contenidoDesplegable))