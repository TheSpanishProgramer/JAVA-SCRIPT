let promise1 = Promise.resolve('Hola');
let promise2 = Promise.resolve({pais:'España', sexo:'masculino'});
let promise3 = 10;
//Los valores numéricos pueden usarse con promise.all sin necesidad de usar "Promise.resolve"

Promise.all([promise1, promise2, promise3]) // Acepta un array de promesas e intentará cumplirlas todas. Saldrá antes de tiempo si sólo se rechaza una.
	.then(response => console.log(response)) // Retorna una promesa recibiendo como argumentos un callback para los casos de éxito y fallo del Promise.
	.catch(error => console.log(Error(error))) // Podemos capturar los errores mediante un método CATCH