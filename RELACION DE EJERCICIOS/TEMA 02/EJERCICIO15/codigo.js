function opVector() {

    //1. Crear un array con las siguientes elementos:  "Sandía" y "Melón". 
    var frutas = ["Sandía", "Melón"];

    document.write("<p>Los valores del vector frutas son: <br>");

    for (var i = 0; i < frutas.length; i++) {

        document.write(frutas[i] + ", ");
    }
    document.write("<br>");

    //2. Añade "Kiwi" al final del array
    document.write("<p>Los valores del vector frutas son, se ha añadido Kiwi: <br>");
    frutas.push("Kiwi");
    for (var i = 0; i < frutas.length; i++) {

        document.write(frutas[i] + ", ");
    }
    document.write("<br>");

    //3. Reemplaza el valor justo en la mitad del array por "Melocotón"
    document.write("<p>Los valores del vector frutas son, se ha añadido Melocoton en medio del vector: <br>");

    frutas.splice(1, 1, "Melocotón");

    for (var i = 0; i < frutas.length; i++) {

        document.write(frutas[i] + ", ");
    }
    document.write("<br>");


    //4. Saca el primer elemento del vector y muestralo (el valor será eliminado del vector).
    document.write("<p>Los valores del vector frutas son, se ha  eliminado del vector: " + frutas[0] + ", primer valor del vector y queda asi: <br>");

    frutas.shift(0);
    for (var i = 0; i < frutas.length; i++) {

        document.write(frutas[i] + ", ");
    }
    document.write("<br>");

    //5. Añade por el principio "Pera"
    document.write("<p>Los valores del vector frutas son, se ha añadido  al vector: Pera como primer valor del vector y queda asi: <br>");

    frutas.unshift("Pera");
    for (var i = 0; i < frutas.length; i++) {

        document.write(frutas[i] + ", ");
    }
    document.write("<br>");
    //6. Muestra todo el vector
    document.write("<p>Muestra todo el vector<br>");
    for (var i = 0; i < frutas.length; i++) {

        document.write(frutas[i] + ", ");
    }
    document.write("<br>");
    //7. Muestra todo el vector ordenado alfabéticamente
    document.write("<p>Muestra todo el vector ordenado alfabéticamente<br>" + frutas.sort());

}