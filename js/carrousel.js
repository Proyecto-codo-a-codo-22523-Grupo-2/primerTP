const contenedorCards = document.querySelector(".contenedor-cards-carrousel")
const templateCardCarrousel = document.querySelector(".template-card-carrousel").content

const controladorCarrousel = document.querySelector(".controlador-carrousel")
const templateElementoControlador = document.querySelector(".boton-controlador-carrousel").content


const fragment = document.createDocumentFragment();
let jsonProductos
let cantidadProductosDestacados = 0

document.addEventListener('DOMContentLoaded', () => {
    fetch("https://recikli-171c9-default-rtdb.firebaseio.com/productos.json")
    .then((response)=>response.json())
    .then((json)=>{
        jsonProductos = json
        jsonProductos.forEach(producto=>{
            if(producto.destacado){
                ++cantidadProductosDestacados
            }
        })
        cargoContenidoCarrousel()
        cargoControladoresCarrousel()
        agregoEventosCarrousel()
    })
})


function cargoContenidoCarrousel() {
    let indexProductoDestacado = 0
    jsonProductos.map((producto) =>{

        if(producto.destacado) {
            ++indexProductoDestacado

            const clone = templateCardCarrousel.cloneNode(true)
        
            const img = producto.img
            const nombreProducto = producto.nombre
            const precioProducto = producto.precio
            const descripcionProducto = producto.descripcion

            let imgAlt = `Imágen ${nombreProducto}`

            let linkDelVerMas
            if(producto.categoria == "comercial") {
                linkDelVerMas = "./paginas/productosComerciales.html"
            } else if(producto.categoria == "residencial") {
                linkDelVerMas = "./paginas/productosHogarenos.html"
            } else {
                console.error("Categoría del producto mal cargada")
                linkDelVerMas = "#"
            }

            clone.querySelector(".card-carrousel").id = `card-${indexProductoDestacado}`
        
            clone.querySelector("img").src = `.${img}`
            clone.querySelector("img").alt = imgAlt
        
            clone.querySelector("h4").innerHTML = nombreProducto
            clone.querySelector(".precio").innerHTML = precioProducto
            clone.querySelector(".descripcion").innerHTML = descripcionProducto
        
            clone.querySelector("a").href = linkDelVerMas
        
            fragment.appendChild(clone)
        
            contenedorCards.appendChild(fragment)
        }
    })
}

function cargoControladoresCarrousel() {
    let indexProductoDestacado = 0
    jsonProductos.map((producto, index) => {
        if(producto.destacado) {
            ++indexProductoDestacado
            const clone = templateElementoControlador.cloneNode(true)
            
            let claseElemento
            
            if(index == 0){
                claseElemento = "seleccionado"
            } else {
                claseElemento = "no-seleccionado"
            }
            
            clone.querySelector("li").classList.add(claseElemento)
            clone.querySelector("li").id = `controlador-${indexProductoDestacado}`
            
            fragment.appendChild(clone)
            
            controladorCarrousel.appendChild(fragment)
        }
    })
}

function agregoEventosCarrousel() {
    const flechaAnterior = document.querySelector(".card-anterior")
    const flechaSiguiente = document.querySelector(".card-siguiente")
    const botonesControladores= controladorCarrousel.querySelectorAll("li")

    const elementosDeslizables = document.querySelectorAll(".card-carrousel")

    flechaAnterior.addEventListener("click", controladorBotonAnterior(elementosDeslizables, botonesControladores))
    flechaSiguiente.addEventListener("click", controladorBotonSiguiente(elementosDeslizables, botonesControladores))

    botonesControladores.forEach(boton =>{
        boton.addEventListener("click", controladorBotonInferior(elementosDeslizables, boton.id, botonesControladores))
    })
}

function colorearBotonesSelectores(botonesControladores, criterioParaDespintar, criterioParaPintar) {
    botonesControladores.forEach(boton =>{
        if(boton.id == criterioParaDespintar || boton.id == criterioParaPintar){
            boton.classList.toggle("seleccionado")
            boton.classList.toggle("no-seleccionado")
        }
    })
}

function controladorBotonAnterior(elementosDeslizables, botonesControladores) {
    return ()=>{
        
        const botonSeleccionadoAntes = document.querySelector(".controlador-carrousel .seleccionado")            
        const numeroBotonSeleccionadoAntes = botonSeleccionadoAntes.id.slice(12)
        
        const valorNumericoPrevioTranslate = numeroBotonSeleccionadoAntes * 100 - 100

            if(numeroBotonSeleccionadoAntes > 1) {
                elementosDeslizables.forEach(elemento =>{
                    //Muestro el elemento anterior (cuanto menor el valor del translateX más adelante está el producto mostrado)
                    elemento.style.transform = `translateX(calc(${-1 * valorNumericoPrevioTranslate + 100}% - ${20 * (numeroBotonSeleccionadoAntes - 1) - 40}px))`

                })
                //Luego ilumino el botón inferior correspondiente a la card actual
                colorearBotonesSelectores(
                    botonesControladores,"controlador-" + numeroBotonSeleccionadoAntes,
                    "controlador-" + (Number(numeroBotonSeleccionadoAntes)-1).toString()
                )
            //Si es el primer ítem de la lista voy al último
            } else {
                elementosDeslizables.forEach(elemento =>{
                    elemento.style.transform = `translateX(calc(${-100 * (elementosDeslizables.length - 1)+6}% - ${20 * (elementosDeslizables.length-1)}px))`
                })
                colorearBotonesSelectores(
                    botonesControladores,
                    "controlador-" + numeroBotonSeleccionadoAntes,
                    "controlador-" + (botonesControladores.length).toString()
                )
            }
    }
    
}

function controladorBotonSiguiente(elementosDeslizables, botonesControladores) {
    return ()=>{        
        const botonSeleccionadoAntes = document.querySelector(".controlador-carrousel .seleccionado")            
        const numeroBotonSeleccionadoAntes = botonSeleccionadoAntes.id.slice(12)

        const valorNumericoPrevioTranslate = numeroBotonSeleccionadoAntes * 100 - 100
        
        if(numeroBotonSeleccionadoAntes < cantidadProductosDestacados) {
            elementosDeslizables.forEach(elemento =>{
                //Muestro el elemento siguiente (cuanto menor el valor del translateX más adelante está el producto mostrado)
                elemento.style.transform = `translateX(calc(${-1 * valorNumericoPrevioTranslate - 100}% - ${20 * (numeroBotonSeleccionadoAntes -1)}px))`
                //Luego ilumino el botón inferior correspondiente a la card actual
            })
            colorearBotonesSelectores(
                botonesControladores,
                "controlador-" + numeroBotonSeleccionadoAntes.toString(),
                "controlador-" + (Number(numeroBotonSeleccionadoAntes)+1).toString()
            )
        //Si es el último item de la lista voy al primero
        } else {
            elementosDeslizables.forEach(elemento =>{
                elemento.style.transform = `translateX(0%)`
            })    
            colorearBotonesSelectores(
                botonesControladores,
                "controlador-" + numeroBotonSeleccionadoAntes.toString(),
                "controlador-1"
            )
        }            
    }
}

function controladorBotonInferior(elementosDeslizables, IDBoton, botonesControladores){
    return ()=>{
        const cardSeleccionada = Number(IDBoton.slice(IDBoton.indexOf("-")+1))
        
        elementosDeslizables.forEach(elemento=>{
            elemento.style.transform = `translateX(calc(${-1 * (100 * (cardSeleccionada - 1))}% - ${20 * (cardSeleccionada-1)}px))`
        })
        
        botonesControladores.forEach(boton =>{
            boton.classList.remove("seleccionado")
            boton.classList.add("no-seleccionado")

            if(boton.id == "controlador-" + cardSeleccionada){
                boton.classList.toggle("seleccionado")
                boton.classList.toggle("no-seleccionado")
            }
        })

    }
}