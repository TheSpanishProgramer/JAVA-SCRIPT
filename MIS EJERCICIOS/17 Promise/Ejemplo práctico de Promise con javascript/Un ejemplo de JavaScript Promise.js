var promesa1 = function() {
	return new Promise(function(resolver, cancelar) {

		setTimeout(function() {
			console.log("pasan 4 segundos");
			resolver();

		}, 4000);
	});
}


var promesa2 = function() {
	return new Promise(function(resolver, cancelar) {

		setTimeout(function() {

			console.log("pasan 1 segundos");
			resolver();
		}, 1000);

	});
}

promesa1().then(promesa2).then(function() {

	console.log("termino");
});

//En este caso la promesa dispone de dos parámetros resolver o cancelar . Cuando se termina el timeout invocamos a resolver para dar la promesa por finalizada. Esta a través de su método then invocará a la siguiente y así sucesivamente.
//De esta forma conseguiremos que el código asíncrono se ejecute de la forma que deseamos y primero veamos pasar por pantalla el 4 , luego el 1 y la finalización.