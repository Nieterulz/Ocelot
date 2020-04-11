// En dispositivos móviles sirve para desplegar el menú, que aparecerá oculto
function desplegarMenu() {
    var nav = document.getElementById("navMenu");
    var className = nav.getAttribute("class");
    if (className == "navbar-menu") {
        nav.className = "navbar-menu is-active"; // Añadimos la clase is-active
    } else {
        nav.className = "navbar-menu"; // Quitamos la clase is-active
    }
}

function mostrarDetalles() {
    var detallesAbono = document.getElementById("detalles-abono");
    var sel = document.getElementById("select-id");

    if (sel.value == "estandar") {
        detallesAbono.innerHTML = `
            <h1
            id="tipo-abono"
            class="has-text-centered has-text-weight-bold is-size-2"
            >
                Abono estándar
            </h1>

            <h3 class="has-text-weight-bold is-size-4">Incluye:</h3>

            <ul class="list centrar-texto">
                <li class="list-item">
                    Entrada al evento
                </li>
            </ul>
            <h3 class="is-size-4 has-text-weight-bold centrar-texto">
                Precio final: <b id="precio">30</b> €
            </h3>
        `;
    }

    if (sel.value == "medio") {
        detallesAbono.innerHTML = `
            <h1
            id="tipo-abono"
            class="has-text-centered has-text-weight-bold is-size-2"
            >
                Abono estándar
            </h1>

            <h3 class="has-text-weight-bold is-size-4">Incluye:</h3>

            <ul class="list centrar-texto">
                <li class="list-item">
                    Entrada al evento
                </li>
                <li class="list-item">
                    Posibilidad de participar en los torneos
                </li>
                <li class="list-item">
                    Premios
                </li>
            </ul>
            <h3 class="is-size-4 has-text-weight-bold centrar-texto">
                Precio final: <b id="precio">45</b> €
            </h3>
        `;
    }

    if (sel.value == "vip") {
        detallesAbono.innerHTML = `
            <h1
            id="tipo-abono"
            class="has-text-centered has-text-weight-bold is-size-2"
            >
                Abono estándar
            </h1>

            <h3 class="has-text-weight-bold is-size-4">Incluye:</h3>

            <ul class="list centrar-texto">
                <li class="list-item">
                    Entrada al evento
                </li>
                <li class="list-item">
                    Posibilidad de participar en los torneos
                </li>
                <li class="list-item">
                    Premios
                </li>
                <li class="list-item">
                    Entrada a los lugares donde se encuentran los invitados
                </li>
                <li class="list-item">
                    Alojamiento en el Hotel Playa Victoria
                </li>
                <li class="list-item">
                    Desplazamiento desde hotel a evento
                </li>
            </ul>
            <h3 class="is-size-4 has-text-weight-bold centrar-texto">
                Precio final: <b id="precio">100</b> €
            </h3>
        `;
    }
}

function desbloquearBoton() {
    var boton = document.getElementById("boton");
    if (boton.disabled == true) boton.disabled = false;
    else boton.disabled = true;
}
