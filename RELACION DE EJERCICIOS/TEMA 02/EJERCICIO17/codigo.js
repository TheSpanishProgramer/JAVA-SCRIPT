function multiplos(valor, multiple) {
    resto = valor % multiple;
    if (resto == 0)
        return true;
    else
        return false;
}

// Arrays que contendr�n los valores multiples del 3 y del 5

var multiples_3 = [];
var multiples_5 = [];
var sumaMultiples3 = 0;
var sumaMultiples5 = 0;

// bucle del 1 al 100
for (var i = 1; i <= 1000; i++) {
    if (multiplos(i, 3))
        sumaMultiples3 = sumaMultiples3 + multiples_3.push(i);
    if (multiplos(i, 5))
        sumaMultiples5 = sumaMultiples5 + multiples_5.push(i);
}
document.write("La suma de los multiplos de 3 son: ", sumaMultiples3);
document.write("<br>La suma de los multiplos de 5 son: ", sumaMultiples5);