// Creamos dos promesas

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('2 segundos');
    }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('5 segundos');
    }, 5000);
});

Promise.race([promise1, promise2]) //Leemos las promesas
    .then(response => console.log(response)) //Muestra el resultado
    .catch(error => console.log(error)) //Muestra el error (si existe)

/* Este ejercicio está preparado para mostrar la primera promesa como resultado.
Si quisiéramos que se mostrara la segunda promesa, tan sólo tendríamos que cambiar
el valor correspondiente al método setTimeout de la primera promesa
por uno superior al de la segunda promesa */