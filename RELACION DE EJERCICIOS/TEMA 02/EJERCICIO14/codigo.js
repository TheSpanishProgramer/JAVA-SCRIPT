function factorial() {

    var numero = prompt("Introduce un numero para mostrar el factorial");
    var resultado = 1;

    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }
    document.write('El factorial de ' + numero + ' es: ' + resultado);
}