function formGetAsistente() {
    var form = document.getElementById("formGetAsistente");
    form.classList.remove("is-hidden");
}

function getAllAsistentes() {
    var navbaritem = document.getElementById("getall");
    navbaritem.className =
        "navbar-item has-text-weight-bold redHover separarInicio has-text-danger";
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
    var input = document.getElementById(id);
    idAsistente = input.value;
    console.log("http://localhost:8080/asistentes/" + idAsistente);
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

function postAsistente(asistente) {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:8080/asistentes",
        data: JSON.stringify(asistente),
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
    $.ajax({
        type: "DELETE",
        dataType: "json",
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
    $.ajax({
        type: "DELETE",
        dataType: "json",
        url: "http://localhost:8080/asistentes/" + id,
        success: function (data) {
            $("#contenido").html("Eliminado correctamente");
        },
        error: function (res) {
            alert("ERROR " + res.statusText);
        },
    });
}
