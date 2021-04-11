const iceCreams = [
	{ flavor : 'pineapple' , color : 'white' },
	{ flavor : 'strawberry' , color : 'red' },
	{ flavor : 'watermelon' , color : 'red' },
	{ flavor : 'kiwi' , color : 'green' },
	{ flavor : 'mango' , color : 'yellow' },
	{ flavor : 'pear' , color : 'green' }
];
//3.1a Función para seleccionar los helados RED
function heladosRojos(iceCreams) {
	return iceCreams.color === 'red'
}
//3.1b Creación variable con método FILTER
var filtroHeladosRojos = iceCreams.filter(heladosRojos);
//3.1c Muestra resultado por consola
console.log(filtroHeladosRojos);

//3.2a Selección sabores

// Definición variable con MAP
var nombreSabor = iceCreams.map(function(itemActual){return itemActual.flavor});

console.log(nombreSabor);