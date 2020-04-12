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

window.onload = function change() {
    document
        .getElementById("select-id")
        .addEventListener("change", mostrarDetalles);
};

function desbloquearBoton() {
    var boton = document.getElementById("boton");
    if (boton.disabled == true) boton.disabled = false;
    else boton.disabled = true;
}
