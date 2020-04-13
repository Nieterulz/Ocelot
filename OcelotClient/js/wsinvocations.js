function formID(id) {
    limpiar();
    cambiarRojo(id);
    $("#formID").removeClass("is-hidden");

    id == "get" ? $("#botonID").html("GET") : $("#botonID").html("DELETE");

    $("#botonID").prop("onclick", null);

    id == "get"
        ? $("#botonID").click(function () {
              getAsistente("ID");
          })
        : $("#botonID").click(function () {
              deleteAsistente("ID");
          });
}

function formPOST(id) {
    limpiar();
    cambiarRojo(id);
    $("#formPOST").removeClass("is-hidden");
    $("#botonPOST").html("POST");
    $("#botonID").prop("onclick", null);

    $("#botonPOST").click(function () {
        postAsistente();
    });
}

// Limpia la pantalla
function limpiar() {
    $("#contenido").html("");
    $("#formID").addClass("is-hidden");
    $("#ID").val("");

    $("#formPOST").addClass("is-hidden");
    $("#nombre").val("");
    $("#apellidos").val("");
    $("#email").val("");
    $("#telefono").val("");
    $("#abono").val("");
    $("#fechaIni").val("2020-07-03");
    $("#fechaFin").val("2020-07-05");
}

// Gestiona los colores del menú de navegación
function cambiarRojo(id) {
    $(".navbar-item").each(function () {
        $(this).removeClass("has-text-danger");
    });
    $("#" + id).addClass("has-text-danger");
}

function getAllAsistentes() {
    limpiar();
    cambiarRojo("getall");
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:8080/asistentes",
        success: function (data) {
            $("#contenido").html(JSON.stringify(data));
        },
        error: function (res) {
            alert("ERROR " + res.statusText);
        },
    });
}

function getAsistente(id) {
    var idAsistente = $("#" + id).val();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:8080/asistentes/" + idAsistente,
        success: function (data) {
            $("#contenido").html(JSON.stringify(data));
        },
        error: function (res) {
            alert("ERROR " + res.statusText);
        },
    });
}

function postAsistente() {
    var asistente = {
        nombre: $("#nombre").val(),
        apellidos: $("#apellidos").val(),
        email: $("#email").val(),
        telefono: $("#telefono").val(),
        abono: $("#abono").val(),
        fechaIni: new Date($("#fechaIni").val()),
        fechaFin: new Date($("#fechaFin").val()),
    };

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:8080/asistentes",
        data: asistente,
        success: function (data) {
            $("#contenido").html("Añadido correctamente");
        },
        error: function (res) {
            alert("ERROR " + res.statusText);
        },
    });
}

function putAsistente(id, asistente) {
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:8080/asistentes/" + id,
        data: JSON.stringify(asistente),
        success: function (data) {
            $("#contenido").html("Actualizado correctamente");
        },
        error: function (res) {
            alert("ERROR " + res.statusText);
        },
    });
}

function deleteAllAsistentes() {
    limpiar();
    cambiarRojo("deleteall");
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/asistentes",
        success: function (data) {
            $("#contenido").html("Eliminados correctamente");
        },
        error: function (res) {
            alert("ERROR " + res.statusText);
        },
    });
}

function deleteAsistente(id) {
    limpiar();
    cambiarRojo("delete");
    var idAsistente = $("#" + id).val();
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/asistentes/" + idAsistente,
        success: function (data) {
            $("#contenido").html("Eliminado correctamente");
        },
        error: function (res) {
            alert("ERROR " + res.statusText);
        },
    });
}
