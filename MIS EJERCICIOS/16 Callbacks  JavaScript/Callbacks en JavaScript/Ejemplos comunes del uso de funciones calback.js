//Observa el siguiente ejemplo. La función  addEventListener()  , acepta otra función como parámetro que se ejecutará cuando se produzca el evento:

document.getElementById("btn1").addEventListener("click", function() {
	
	  console.log("has pulsado el botón 1");

});

//Otro ejemplo, podemos encontrarlo en el método  map  de los array en JavaScript. Este método crea un nuevo array con el resultado de la llamada a la función callback aplicada a cada uno de los elementos del array.

var array = [1, 2, 4, 8];
var arrayDuplicado = array.map(function(elemento) {
   return elemento * 2;
}); //  [2, 4, 8, 16]

//Creando nuestra propia función map

function miMap(arr, fn) {
	  var nuevoArray = [];
	  for (var i = 0; i < arr.length; i++) {
		nuevoArray.push(fn(arr[i]));
	  }
	  return nuevoArray;
}

//La función  miMap  acepta dos parámetros: un array y una función. Dentro de  miMap  se crea un nuevo array y, haciendo uso de un bucle for, se itera a través del array.

var array1 = miMap([1,2,3,4,5], function(e) {
	return e * 2;
}); // [2, 4, 6, 8, 10]
	
	
var array2 = miMap([1,2,3,4,5], function(e) {
	return e + 1;
}); // [2, 3, 4, 5, 6]