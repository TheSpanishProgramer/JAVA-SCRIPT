function verColor() {

    var colores = ["Rojo", "Verde", "Blanco", "Negro"];
    let nuevoString = colores.join(',');
    document.write("[");
    document.write(nuevoString);
    document.write("]");
    document.write("<br/>");
    let nuevoString2 = colores.join(' + ');
    document.write("[");
    document.write(nuevoString2);
    document.write("]");
}