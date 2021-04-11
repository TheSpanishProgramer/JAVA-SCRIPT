var formulario = document.getElementById("miFormulario");

window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
    
}

function validaNombre(){
    var elemento = document.getElementById("nombre");
    if (elemento.value == "") {
        alert("El campo no puede estar vacío");
        return false;
    }
    return true;
}

function validaTelefono(){
    var elemento = document.getElementById("telefono");
    if (isNaN(elemento.value)) {
        alert("El campo teléfono tiene que ser numérico");
        return false;
    }
    return true;
}

function validaFecha() {
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    var fecha = new Date(ano, mes, dia);
    if (isNaN(fecha)){
        alert("Los campos de la fecha son incorrectos");
        return false;
    }
    return true;
}
function validaCheck() {
    var campoCheck = document.getElementById("mayor");
    if (!campoCheck.checked) {
        alert("Debes ser mayor de edad");
        return false;
    }
    return true;
}

function validar(e) {
    if (validaNombre() && validaTelefono() && validaFecha() && validaCheck() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}
