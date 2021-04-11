var arr1 = [0, 7, 2, 3, 4, 2, 6, 2, 8, 2];
var arr2 = arr1;
document.write("valores del array sin sustituir son:<br/>");
for (var i = 0; i < arr1.length; i++) {
    document.write(arr1[i] + "<br/>");
    if (arr2[i] === 2) {
        arr2.splice(i, 1, 1, 1);
    }

}
document.write("valores del array tras sustituir el valor 2 por el 1 es:<br/>");
for (var i = 0; i < arr2.length; i++) {
    document.write(arr2[i] + "<br/>");
}