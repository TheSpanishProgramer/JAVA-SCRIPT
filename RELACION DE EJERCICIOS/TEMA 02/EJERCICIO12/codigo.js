function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function fusionarArrays() {
    let array1 = [1, 2, 3];
    let array2 = [2, 30, 1];

    let arrayFusionado = array1.concat(array2);

    arrayFusionado = arrayFusionado.filter(onlyUnique);

    for (var i = 0; i < arrayFusionado.length; i++) {

        if (i === 0) {

            document.write("[");

        }

        if (i < (arrayFusionado.length - 1)) {

            document.write(arrayFusionado[i] + ", ");

        } else {

            document.write(arrayFusionado[i] + "]");

        }



    }



}