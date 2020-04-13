function formGetAsistente() {
    limpiar();
    cambiarRojo("get");
    $("#formGetAsistente").removeClass("is-hidden");
}

function formDeleteAsistente() {
    limpiar();
    cambiarRojo("delete");
    $("#formDeleteAsistente").removeClass("is-hidden");
}

function formPOST(id) {
    limpiar();
    cambiarRojo("post");
    $("#formPOST").removeClass("is-hidden");
}

function formPUT(id) {
    limpiar();
    cambiarRojo("put");
    $("#formPUT").removeClass("is-hidden");
}

function botonDeleteAll() {
    limpiar();
    cambiarRojo("deleteall");

    $("#contenido").html(
        "<strong class='column'>¿Estás seguro de que quieres eliminar toda la colección de asistentes?</strong>"
    );
    $("#botonDeleteAll").removeClass("is-hidden");
}

// Limpia la pantalla
function limpiar() {
    $("#contenido").html("");
    $("#formGetAsistente").addClass("is-hidden");
    $("#formDeleteAsistente").addClass("is-hidden");
    $("#formPOST").addClass("is-hidden");
    $("#formPUT").addClass("is-hidden");
    $("#idGetAsistente").val("");
    $("#idDeleteAsistente").val("");
    $("#idPutAsistente").val("");
    $("#botonDeleteAll").addClass("is-hidden");

    $("#nombre").val("");
    $("#apellidos").val("");
    $("#email").val("");
    $("#telefono").val("");
    $("#fechaIni").val("2020-07-03");
    $("#fechaFin").val("2020-07-05");

    $("#nombrePUT").val("");
    $("#apellidosPUT").val("");
    $("#emailPUT").val("");
    $("#telefonoPUT").val("");
    $("#fechaIniPUT").val("2020-07-03");
    $("#fechaFinPUT").val("2020-07-05");
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
            mostrarAsistentes(data);
        },
        error: function (res) {
            alert("ERROR " + res.statusText);
        },
    });
}

function getAsistente() {
    var idAsistente = $("#idGetAsistente").val();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:8080/asistentes/" + idAsistente,
        success: function (data) {
            mostrarAsistentes(data);
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
        telefono: parseInt($("#telefono").val()),
        abono: $("#abono").val(),
        fechaIni: new Date($("#fechaIni").val()).toDateString(),
        fechaFin: new Date($("#fechaFin").val()).toDateString(),
    };

    console.log(asistente);
    console.log(JSON.stringify(asistente));

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:8080/asistentes",
        data: { JObject: JSON.stringify(asistente) },
        success: function (data) {
            mostrarAsistentes(data);
        },
        error: function (res) {
            alert("ERROR " + res.statusText);
        },
    });
}

function putAsistente() {
    var id = $("#idPutAsistente").val();
    var asistente = {
        nombre: $("#nombrePUT").val(),
        apellidos: $("#apellidosPUT").val(),
        email: $("#emailPUT").val(),
        telefono: parseInt($("#telefonoPUT").val()),
        abono: $("#abonoPUT").val(),
        fechaIni: new Date($("#fechaIniPUT").val()),
        fechaFin: new Date($("#fechaFinPUT").val()),
    };
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:8080/asistentes/" + id,
        data: asistente,
        success: function (data) {
            mostrarAsistentes(data);
        },
        error: function (res) {
            alert("ERROR " + res.statusText);
        },
    });
}

function deleteAllAsistentes() {
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

function deleteAsistente() {
    var idAsistente = $("#idDeleteAsistente").val();
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

function mostrarAsistentes(data) {
    var content = "";
    for (let i = 0; i < data.length; i++) {
        content += mostrarAsistente(data[i]);
    }

    $("#contenido").html(content);
}

function mostrarAsistente(data) {
    var content =
        `
    <div class ='box'>
        <article class='media'>
            <div class='media-content'>
                <div class='content'>
                    <p>
                    <strong>ID: </strong> ` +
        data["_id"] +
        `</p>
                    <p>
                    <strong>Nombre: </strong> ` +
        data["nombre"] +
        `</p>
                    <p>
                    <strong>Apellidos: </strong> 
                    ` +
        data["apellidos"] +
        `</p>
                    <p>
                    <strong>Email: </strong> 
                    ` +
        data["email"] +
        `</p>
                    <p>
                    <strong>Teléfono: </strong> 
                    ` +
        data["telefono"] +
        `
                    </p>
                    <p>
                    <strong>Abono: </strong> 
                    ` +
        data["abono"] +
        `
                    </p>
                    <p>
                    <strong>Fecha inicio: </strong> 
                    ` +
        data["fechaIni"] +
        `
                    </p>
                    <p>
                    <strong>Fecha fin: </strong> 
                    ` +
        data["fechaFin"] +
        `
                    </p>
                </div>
            </div>
        </article>
    </div>`;

    return content;
}
