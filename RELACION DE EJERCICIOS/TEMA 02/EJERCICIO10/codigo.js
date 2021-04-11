function clonar() {
    var arrayOriginal = [1, 2, 4, 0];
    var arrayClonado = arrayOriginal.slice();

    document.write("EL ARRAY ORIGINAL SE MOSTRARIA: <br/>");

    for (var i = 0; i < arrayOriginal.length; i++) {
        if (i == 0) {

            document.write("[" + arrayOriginal[i] + ", ");
        }
        if (i > 0 && i < 3) {

            document.write(arrayClonado[i] + ", ");

        }
        if (i == 3) {

            document.write(arrayClonado[i] + "] <br/>");

        }

    }

    document.write("EL ARRAY CLONADO SE MOSTRARIA: <br/>");

    for (var i = 0; i < arrayClonado.length; i++) {
        if (i == 0) {

            document.write("[");
        }
        if (i < 2) {

            document.write(arrayClonado[i] + ", ");

        } else if (i == 2) {

            document.write("[" + arrayClonado[i] + "], ");

        } else if (i = 3) {

            document.write("[" + arrayClonado[i] + "] ");
        }

    }
    document.write("]<br/>");
}