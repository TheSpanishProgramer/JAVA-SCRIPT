const result = [1, 2, 3, 4, 5].map(function(item) {
	  return item * 2;
	});
	
	console.log(result);
	
	// Resultado en pantalla
	// [2, 4, 6, 8, 10]
	//En el ejemplo 5, la función callback es usada para obtener el elemento que itera sobre el arreglo, y no para propagar el resultado. Incluso, el resultado es devuelto de forma síncrona usando el estilo directo, es decir, devolviendo el resultado usando la instrucción return.