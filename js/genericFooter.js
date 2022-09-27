let etiquetaFooter = document.querySelector("footer")
let classFooter = etiquetaFooter.classList

function rutaRelativa() {
    return classFooter.contains("index") ? "." : ".."
}

let contenidoFooter = `
<div class="primera-parte">
    <div class="nuestro-local">
        <h4>Nuestro local :</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.866693025428!2d-58.44795928505902!3d-34.60753228045843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca1189c237db%3A0x7d00b48da5073e21!2sCid%20Campeador!5e0!3m2!1ses-419!2sar!4v1661940247523!5m2!1ses-419!2sar"
            style="border:0" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="contacto">
        <h4>Contacto</h4>
        <div>
            <img src="${rutaRelativa()}/recursos/whatsapp-logo-24.png"/>
            <span>(+54)011-5555-2626</span>    
        </div>
        <div>
            <img src="${rutaRelativa()}/recursos/gmail-logo-24.png"/>
            <span>m_rossi93@hotmail.com</span>
        </div>
        <div>
            <img src="${rutaRelativa()}/recursos/telegram-logo-24.png"/>
            <span>+54)11-6455-1800</span>
        </div>
    </div>
</div>

<div class="redes">
    <h4>Redes</h4>
    <ul>
        <li><a href="#"><img src="${rutaRelativa()}/recursos/facebook-logo-24.png"/></a></li>
        <li><a href="#"><img src="${rutaRelativa()}/recursos/instagram-alt-logo-24.png"/></a></li>
        <li><a href="#"><img src="${rutaRelativa()}/recursos/youtube-logo-24.png"/></a></li>
        <li><a href="#"><img src="${rutaRelativa()}/recursos/twitter-logo-24.png"/></a></li>
        <li><a href="#"><img src="${rutaRelativa()}/recursos/linkedin-logo-24.png"/></a></li>
    </ul>
</div>

<p class="pie-seccion">Recikli© 2022</p>`

etiquetaFooter.innerHTML = contenidoFooter