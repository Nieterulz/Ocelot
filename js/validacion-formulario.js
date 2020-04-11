function validar_caracteres(id, spanId) {
    var span = document.getElementById(spanId);
    var input = document.forms["formulario"][id];
    var str = input.value;
    // Permite cualquier carácter del alfabeto, espacios, tildes y Ñs
    var regex = new RegExp(
        /^[a-zA-Z\sñäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]+$/
    );

    if (!regex.test(str)) {
        input.className = "input is-danger";
        span.className = "help is-danger";
    } else {
        input.className = "input is-success";
        span.className = "help is-danger is-hidden";
    }
}

function validar_email(id, spanId) {
    var span = document.getElementById(spanId);
    var input = document.forms["formulario"][id];
    var str = input.value;
    // Según el estándar Oficial RFC 5322 esta esta es la expresión regular para validar un email
    var regex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!regex.test(str)) {
        input.className = "input is-danger";
        span.className = "help is-danger";
    } else {
        input.className = "input is-success";
        span.className = "help is-danger is-hidden";
    }
}

function validar_telefono(id, spanId) {
    var span = document.getElementById(spanId);
    var input = document.forms["formulario"][id];
    var str = input.value;
    // Expresión regular para validar un número de teléfono
    var regex = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);

    if (!regex.test(str)) {
        input.className = "input is-danger";
        span.className = "help is-danger";
    } else {
        input.className = "input is-success";
        span.className = "help is-danger is-hidden";
    }
}

function desbloquearBoton() {
    var boton = document.getElementById("boton");
    if (boton.disabled == true) boton.disabled = false;
    else boton.disabled = true;
}
