const mainTag = document.querySelector("main")
const mainID = mainTag.id

const contenedorCardsProductos = document.querySelector(".productosCard")
const templateCardProducto = document.querySelector("#template-card-producto").content

const fragment = document.createDocumentFragment();

fetch("https://recikli-171c9-default-rtdb.firebaseio.com/productos.json")
.then((res)=>res.json())
.then((json)=>{

    let categoriaSeccion
    if(mainID == "productos-hogarenos") {
        categoriaSeccion = "residencial"
    } else if(mainID == "productos-comerciales") {
        categoriaSeccion = "comercial"
    } else {
        console.error(`Sección categoría ${mainID} no está definido`)
    }

    json.forEach(producto=> {
        if(producto.categoria == categoriaSeccion) {
            const clone = templateCardProducto.cloneNode(true)

            const imgSrc = producto.img
            const nombreProducto = producto.nombre
            const precioProducto = producto.precio
            const descripcionProducto = producto.descripcion

            let imgAlt = `Imágen ${nombreProducto}`

            clone.querySelector(".contenedor-textos-card h4").innerHTML = nombreProducto
            clone.querySelector(".contenedor-textos-card .descripcion-producto").innerHTML = descripcionProducto

            clone.querySelector(".precio").innerHTML = precioProducto

            clone.querySelector("img").src = `..${imgSrc}`
            clone.querySelector("img").alt = imgAlt

            fragment.appendChild(clone)

            contenedorCardsProductos.appendChild(fragment)
        }        
    })
})