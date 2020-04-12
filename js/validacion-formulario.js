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

window.onload = function change() {
    document
        .getElementById("select-id")
        .addEventListener("change", validar_fechas);
};

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

    var correcto = true;

    if (fechaIni >= ini && fechaIni <= fin) {
        input1.className = "input is-success";
        span1.className = "help is-danger is-hidden";
        span1.innerHTML = "";
    } else {
        input1.className = "input is-danger";
        span1.className = "help is-danger";
        span1.innerHTML = "Fecha de inicio errónea";
        correcto = false;
    }

    if (fechaFin <= fin && fechaFin >= ini) {
        input2.className = "input is-success";
        span2.className = "help is-danger is-hidden";
        span2.innerHTML = "";
    } else {
        input2.className = "input is-danger";
        span2.className = "help is-danger";
        span2.innerHTML = "Fecha de fin errónea";
        correcto = false;
    }

    if (fechaIni > fechaFin) {
        input1.className = "input is-danger";
        span1.className = "help is-danger";
        input2.className = "input is-danger";
        span2.className = "help is-danger";
        span1.innerHTML = "Fecha de inicio errónea";
        span2.innerHTML = "Fecha de fin errónea";
        correcto = false;
    }

    if (correcto) {
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
}
