let etiquetaHeader = document.querySelector("header")
let classHeader = etiquetaHeader.classList

let linksIndex = {
  index: "#",
  nosotros: "./paginas/nosotros.html",
  productosResidenciales: "./paginas/productosHogarenos.html",
  productosComerciales: "./paginas/productosComerciales.html"
}

let linksNosotros = {
  index: "../index.html",
  nosotros: "#",
  productosResidenciales: "./productosHogarenos.html",
  productosComerciales: "./productosComerciales.html"
}

let linksProductosHogarenos = {
  index: "../index.html",
  nosotros: "./nosotros.html",
  productosResidenciales: "#",
  productosComerciales: "./productosComerciales.html"
}

let linksProductosComerciales = {
  index: "../index.html",
  nosotros: "./nosotros.html",
  productosResidenciales: "./productosHogarenos.html",
  productosComerciales: "#"
}

function headerTieneClase(clase) {
  return classHeader.contains(clase)
}

let arrayLinksIndex = [
  linksIndex.index,
  linksNosotros.index,
  linksProductosHogarenos.index,
  linksProductosComerciales.index
]

let arrayLinksNosotros = [
  linksIndex.nosotros,
  linksNosotros.nosotros,
  linksProductosHogarenos.nosotros,
  linksProductosComerciales.nosotros
]

let arrayLinksProductosResidenciales = [
  linksIndex.productosResidenciales,
  linksNosotros.productosResidenciales,
  linksProductosHogarenos.productosResidenciales,
  linksProductosComerciales.productosResidenciales
]

let arrayLinksProductosComerciales = [
  linksIndex.productosComerciales,
  linksNosotros.productosComerciales,
  linksProductosHogarenos.productosComerciales,
  linksProductosComerciales.productosComerciales
]

let arrayClases = ["index", "nosotros", "productosHogarenos", "productosComerciales"]

function linkCorrecto(arrayLinks) {
  let link

  for(let i=0; i < arrayLinks.length; i++) {
    if(link == undefined){
      if(headerTieneClase(arrayClases[i])) {
        link = arrayLinks[i]
      }
    }
  }
  return link
}

let contenidoHeader = `
<div>
  <img class="logoimage" src="${headerTieneClase("index") ? "./recursos/recikli-logo.png" : "../recursos/recikli-logo.png"}" alt="Logo Recikli">

  <nav class="navbar hidden" role="navigation">
    <ul>
      <li> <a href="${linkCorrecto(arrayLinksIndex)}">Home</a> </li>
      <li> <a href="${linkCorrecto(arrayLinksNosotros)}">Nosotros</a> </li>
      <li class="dropdown productos hidden">
        <p class="productos-con-icono-dropdown">
          Productos
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-down-fill icono-dropdown" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
        </p>
        <div class="dropbtn">

          <div class="dropdown-content-container">
            <div class="dropdown-content">
              <a href="${linkCorrecto(arrayLinksProductosResidenciales)}">Residenciales</a>
              <a href="${linkCorrecto(arrayLinksProductosComerciales)}">Comerciales</a>
            </div>
          </div>
      </li>
    </ul>
  </nav>
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list icono-hamburguesa" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>
</div>`

etiquetaHeader.innerHTML = contenidoHeader


let botonDropdown = document.querySelector(".productos-con-icono-dropdown")
let contenidoDesplegable = document.querySelector(".navbar .productos")

function toggleHiddenAlElemento(contenidoADesplegar) {  
  return ()=>{contenidoADesplegar.classList.toggle("hidden")}
}

botonDropdown.addEventListener("click", toggleHiddenAlElemento(contenidoDesplegable))

let navbar = document.querySelector(".navbar")
let iconoMenuHamburguesa = document.querySelector(".icono-hamburguesa")

iconoMenuHamburguesa.addEventListener("click", toggleHiddenAlElemento(navbar))