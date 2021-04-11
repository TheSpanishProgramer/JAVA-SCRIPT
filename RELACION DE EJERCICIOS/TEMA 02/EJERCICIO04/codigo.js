var numa;
var numb;
numa=parseInt(prompt('Introduce el primer número',''));
numb=parseInt(prompt('Introduce el segundo número',''));
if (numa > numb) {
	var suma = numa+numb;
	var resta = numa-numb;
	alert('Resultado suma: ' + suma +
	'\nResultado resta: ' + resta);
}
if (numa < numb) {
	var multi = numa*numb;
	var divi = numb/numa;
	alert('Resultado multiplicación: ' + multi +
	'\nResultado división: ' + divi);
}