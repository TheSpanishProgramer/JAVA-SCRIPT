// Determinar cuál de los dos textos es mayor
var valores = [true, 5, false, "hola", "adios", 2];
var resultado = valores[3] > valores[4];
document.write('Hola > adios = ' + resultado);
document.write('<p>');

// Combinamos valores booleanos
var valor1 = valores[0];
var valor2 = valores[2];

// Obtención de resultado TRUE
var resultado = valor1 || valor2;
document.write('Obtención de resultado ' + resultado + ' tras combinar valores booleanos');
document.write('<p>');
// Obtención de resultado FALSE
resultado = valor1 && valor2;
document.write('Obtención de resultado ' + resultado + ' tras combinar valores booleanos');
document.write('<p>');

// 5 operaciones matemáticas
var num1 = valores[1];
var num2 = valores[5];

var sum = num1 + num2;
document.write('Resultado de suma: ' + sum);
document.write('<p>');
var rest = num1 - num2;
document.write('Resultado de resta: ' + rest);
document.write('<p>');
var mult = num1 * num2;
document.write('Resultado de multiplicación: ' + mult);
document.write('<p>');
var div = num1 / num2;
document.write('Resultado de división: ' + div);
document.write('<p>');
var mod = num1 % num2;
document.write('Resultado de obtención de resto de una división: ' + mod);