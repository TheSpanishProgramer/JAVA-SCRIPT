function rotacion() {

    var texto = prompt("Teclea lo que quieras cifrar (sin números ni espacios)");

    var cifrado = "";

    for (var i = 0; i < texto.length; i++) {

        if (parseInt(texto[i]) % 1 === 0)
            texto = prompt("No se aceptan números ni espacios");

        var ubicacionrotacion = (texto.toUpperCase().charCodeAt(i) - 65 + 33) % 26 + 65;

        var palabraCifrada = String.fromCharCode(ubicacionrotacion);

        cifrado += palabraCifrada;

    }

    return cifrado;

}

function decipher(cifrado) {

    alert("Palabra Cifrada: " + cifrado);

    var descifrado = "";

    for (var j = 0; j < cifrado.length; j++) {

        var ubicacionDescifrado = (cifrado.charCodeAt(j) + 65 - 33) % 26 + 65;
        var palabraDescifrada = String.fromCharCode(ubicacionDescifrado);

        descifrado += palabraDescifrada;
    }

    return descifrado;

}

decipher(rotacion());