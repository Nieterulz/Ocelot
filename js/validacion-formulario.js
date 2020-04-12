// Devuelve:
//      - 0 si el nombre y el apellido son correctas
//      - 1 si el nombre es incorrecto
//      - 2 si el apellido es incorrecto
function validar_caracteres(id, spanId) {
    var span = document.getElementById(spanId);
    var input = document.forms["formulario"][id];
    var str = input.value;
    // Permite cualquier carácter del alfabeto, espacios, tildes y Ñs
    var regex = new RegExp(
        /^[a-zA-Z\sñäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]+$/
    );

    var correcto;
    if (!regex.test(str)) {
        input.className = "input is-danger";
        span.className = "help is-danger";
        correcto = false;
    } else {
        input.className = "input is-success";
        span.className = "help is-danger is-hidden";
        correcto = true;
    }

    if (!correcto) return id == "nombre" ? 1 : 2;
    return 0;
}

// Valida si el email es correcto o no
function validar_email(id, spanId) {
    var span = document.getElementById(spanId);
    var input = document.forms["formulario"][id];
    var str = input.value;
    // Según el estándar Oficial RFC 5322 esta esta es la expresión regular para validar un email
    var regex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    var correcto;
    if (!regex.test(str)) {
        input.className = "input is-danger";
        span.className = "help is-danger";
        correcto = false;
    } else {
        input.className = "input is-success";
        span.className = "help is-danger is-hidden";
        correcto = true;
    }
    return correcto;
}

// Valida si el telefono es correcto o no
function validar_telefono(id, spanId) {
    var span = document.getElementById(spanId);
    var input = document.forms["formulario"][id];
    var str = input.value;
    // Expresión regular para validar un número de teléfono
    var regex = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);
    var correcto;
    if (!regex.test(str)) {
        input.className = "input is-danger";
        span.className = "help is-danger";
        correcto = false;
    } else {
        input.className = "input is-success";
        span.className = "help is-danger is-hidden";
        correcto = true;
    }
    return correcto;
}

window.onload = function change() {
    document
        .getElementById("select-id")
        .addEventListener("change", validar_fechas);
};

// Devuelve:
//      - 0 si las fechas son correctas
//      - 1 si la fecha de inicio es incorrecta
//      - 2 si la fecha de fin es incorrecta
//      - 3 si ambas son incorrecta
function validar_fechas() {
    var input1 = document.getElementById("fechaIni");
    var input2 = document.getElementById("fechaFin");
    var span1 = document.getElementById("spanFechaIni");
    var span2 = document.getElementById("spanFechaFin");
    var precio = document.getElementById("precio");
    var select = document.getElementById("select-id");
    var fechaIni = new Date(document.getElementById("fechaIni").value);
    var fechaFin = new Date(document.getElementById("fechaFin").value);

    var ini = new Date("2020-07-03");
    var fin = new Date("2020-07-05");

    var correcto1, correcto2;

    if (fechaIni >= ini && fechaIni <= fin) {
        input1.className = "input is-success";
        span1.className = "help is-danger is-hidden";
        span1.innerHTML = "";
        correcto1 = true;
    } else {
        input1.className = "input is-danger";
        span1.className = "help is-danger";
        span1.innerHTML = "Fecha de inicio errónea";
        correcto1 = false;
    }

    if (fechaFin <= fin && fechaFin >= ini) {
        input2.className = "input is-success";
        span2.className = "help is-danger is-hidden";
        span2.innerHTML = "";
        correcto2 = true;
    } else {
        input2.className = "input is-danger";
        span2.className = "help is-danger";
        span2.innerHTML = "Fecha de fin errónea";
        correcto2 = false;
    }

    if (fechaIni > fechaFin) {
        input1.className = "input is-danger";
        span1.className = "help is-danger";
        input2.className = "input is-danger";
        span2.className = "help is-danger";
        span1.innerHTML = "Fecha de inicio errónea";
        span2.innerHTML = "Fecha de fin errónea";
        correcto1 = false;
        correcto2 = false;
    }

    if (correcto1 && correcto2) {
        var precioBase;
        if (select.value == "estandar") precioBase = 30;
        if (select.value == "medio") precioBase = 45;
        if (select.value == "vip") precioBase = 100;

        var nDias =
            (fechaFin.getTime() - fechaIni.getTime()) / (1000 * 60 * 60 * 24) +
            1;

        var precioFinal = (precioBase / 3) * nDias;

        precio.innerText = Math.ceil(precioFinal);
    }

    if (correcto1 == false && correcto2 == false) return 3;
    if (correcto1 == true && correcto2 == false) return 2;
    if (correcto1 == false && correcto2 == true) return 1;
    return 0;
}

function validar_formulario() {
    var form = document.getElementById("formulario");
    var correcto = true;
    // Validamos los caracteres
    if (validar_caracteres("nombre", "spanNombre") == 1) {
        form.action = "#nombre";
        correcto = false;
    }

    // Validamos los apellidos
    if (validar_caracteres("apellidos", "spanApellidos") == 2) {
        form.action = "#apellidos";
        correcto = false;
    }

    // Validamos el email
    if (!validar_email("email", "spanEmail")) {
        form.action = "#email";
        correcto = false;
    }

    // Validamos el teléfono
    if (!validar_telefono("telefono", "spanTelefono")) {
        form.action = "#telefono";
        correcto = false;
    }

    // Validamos las fechas
    if (validar_fechas() == 1) {
        form.action = "#fechaIni";
        correcto = false;
    }
    if (validar_fechas() == 2) {
        form.action = "#fechaFin";
        correcto = false;
    }
    if (validar_fechas() == 3) {
        form.action = "#fechaIni";
        correcto = false;
    }

    if (correcto) form.action = "#";
}
