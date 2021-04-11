function numArmstrong() {

    document.write("Listado de numeros Armstrong de tres cifras:<p>");
    for (var i = 100; i <= 999; i++) {

        var miString = i.toString();

        var a, b, c;

        a = miString.substring(0, 1);
        b = miString.substring(1, 2);
        c = miString.substring(2, 3);

        var y = (a * a * a) + (b * b * b) + (c * c * c);

        if (y === i) {
            document.write(i + "<p>");
        }
    }
}