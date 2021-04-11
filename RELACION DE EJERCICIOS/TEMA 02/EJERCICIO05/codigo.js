function ordenar() {
var a = parseInt(prompt('Teclea el primer número'));
var b = parseInt(prompt('Teclea el segundo número'));
var c = parseInt(prompt('Teclea el tercer número'));
var arr = [a, b, c];
arr.sort(function(a, b){return b - a});
arr.reverse();
alert(arr);
}

ordenar();