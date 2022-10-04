const contenedorCards = document.querySelector(".contenedor-cards-carrousel")
const templateCardCarrousel = document.querySelector(".template-card-carrousel").content

const controladorCarrousel = document.querySelector(".controlador-carrousel")
const templateElementoControlador = document.querySelector(".boton-controlador-carrousel").content


const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    cargoContenidoCarrousel()
    cargoControladoresCarrousel()
    agregoEventosCarrousel()
})

const json = [
    {
        img: "./recursos/panel 20w.png",
        imgAlt: "Panel Solar",
        nombre: "Panel Solar 20W",
        precio: "$15.000",
        descripcion: "Panel Solar 20W: Encargado de transformar la energía del sol en electricidad.",
        linkDelVerMas: "./paginas/productosHogarenos.html"
    },
    {
        img: "./recursos/panel 20w.png",
        imgAlt: "Panel Solar",
        nombre: "Panel Solar 20W",
        precio: "$15.000",
        descripcion: "Panel Solar 20W: Encargado de transformar la energía del sol en electricidad.",
        linkDelVerMas: "./paginas/productosHogarenos.html"
    },
    {
        img: "./recursos/panel 20w.png",
        imgAlt: "Panel Solar",
        nombre: "Panel Solar 20W",
        precio: "$15.000",
        descripcion: "Panel Solar 20W: Encargado de transformar la energía del sol en electricidad.",
        linkDelVerMas: "./paginas/productosHogarenos.html"
    }
]

function cargoContenidoCarrousel() {

    json.forEach(producto =>{

        const clone = templateCardCarrousel.cloneNode(true)
    
        const img = producto.img
        const imgAlt = producto.imgAlt
        const nombre = producto.nombre
        const precio = producto.precio
        const descripcion = producto.descripcion
        const linkDelVerMas = producto.linkDelVerMas
    
        clone.querySelector("img").src = img
        clone.querySelector("img").alt = imgAlt
    
        clone.querySelector("h4").innerHTML = nombre
        clone.querySelector(".precio").innerHTML = precio
        clone.querySelector(".descripcion").innerHTML = descripcion
    
        clone.querySelector("a").href = linkDelVerMas
    
        fragment.appendChild(clone)
    
        contenedorCards.appendChild(fragment)
    })
}

function cargoControladoresCarrousel() {
    let i = 0
    json.forEach(()=>{
        i++
        const clone = templateElementoControlador.cloneNode(true)

        let claseElemento

        if(i==1){
            claseElemento = "seleccionado"
        } else {
            claseElemento = "no-seleccionado"
        }

        clone.querySelector("li").classList.add(claseElemento)
        clone.querySelector("li").id = `controlador-${i}`

        fragment.appendChild(clone)

        controladorCarrousel.appendChild(fragment)
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

function controladorBotonAnterior(elementosDeslizables, botonesControladores) {
    return ()=>{
            const valorPrevTranslate = elementosDeslizables[0].style.transform
            const valorNumericoPrevioTranslate = Number(valorPrevTranslate.slice(11, -2))
            
            if(valorNumericoPrevioTranslate != 0) {
                const numeroBotonSeleccionadoAntes = (Number(valorNumericoPrevioTranslate.toString().slice(0,-2))*-1 + 1).toString()
                elementosDeslizables.forEach(elemento =>{
                    //Muestro el elemento anterior (cuanto menor el valor del translateX más adelante está el producto mostrado)
                    elemento.style.transform = `translateX(${valorNumericoPrevioTranslate+100}%)`

                    //Luego ilumino el botón inferior correspondiente a la card actual
                    botonesControladores.forEach(boton=>{
                        if(boton.id.includes("controlador-" + numeroBotonSeleccionadoAntes)){
                            boton.classList.toggle("seleccionado")
                            boton.classList.toggle("no-seleccionado")
                        } else if(boton.id.includes("controlador-" + (Number(numeroBotonSeleccionadoAntes)-1).toString())){
                            boton.classList.toggle("seleccionado")
                            boton.classList.toggle("no-seleccionado")
                        }
                    })
                })
            }
    }
    
}

function controladorBotonSiguiente(elementosDeslizables, botonesControladores) {
    return ()=>{
            const valorPrevTranslate = elementosDeslizables[0].style.transform
            const valorNumericoPrevioTranslate = Number(valorPrevTranslate.slice(11, -2))
            const cardSeleccionadaPreviamente = Number(valorNumericoPrevioTranslate.toString().slice(0, -2))*-1 + 1
            
            if(cardSeleccionadaPreviamente != json.length) {
                elementosDeslizables.forEach(elemento =>{
                    //Muestro el elemento siguiente (cuanto menor el valor del translateX más adelante está el producto mostrado)
                    elemento.style.transform = `translateX(${valorNumericoPrevioTranslate-100}%)`

                    //Luego ilumino el botón inferior correspondiente a la card actual
                    botonesControladores.forEach(boton=>{
                        if(boton.id.includes("controlador-" + cardSeleccionadaPreviamente.toString())){
                            boton.classList.toggle("seleccionado")
                            boton.classList.toggle("no-seleccionado")
                        } else if(boton.id.includes("controlador-" + (Number(cardSeleccionadaPreviamente.toString())+1).toString())){
                            boton.classList.toggle("seleccionado")
                            boton.classList.toggle("no-seleccionado")
                        }
                    })
                })
            }
    }
    
}

function controladorBotonInferior(elementosDeslizables, IDBoton, botonesControladores){
    return ()=>{
        const cardSeleccionada = Number(IDBoton.slice(-1))
        const nuevoValorTranslate = (cardSeleccionada-1)*-1*100

        elementosDeslizables.forEach(elemento=>{
            elemento.style.transform = `translateX(${nuevoValorTranslate}%)`
        })

        botonesControladores.forEach(boton =>{
            boton.classList.remove("seleccionado")
            boton.classList.add("no-seleccionado")

            if(boton.id.includes("controlador-" + cardSeleccionada)){
                boton.classList.toggle("seleccionado")
                boton.classList.toggle("no-seleccionado")
            }
        })

    }
}