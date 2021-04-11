function add(a, b, callback) {
	  setTimeout(function() {
		callback(a + b);
	  }, 500);
	}
	
	console.log('Antes de la ejecucion');
	add(3, 5, function(result) {
	  console.log(result);
	});
	console.log('Despues de la ejecucion');
	
	// Resultado en pantalla
	// Antes de la ejecucion
	// Despues de la ejecucion
	// 8
	//En el ejemplo cambia el orden de la ejecución del código, mostrando al final el resultado de la suma. Usamos la función setTimeout para simular una operación asíncrona. La función setTimeout toma como primer parámetro una función callback y como segundo parámetro el tiempo de demora en ejecutar el contenido de la función callback.