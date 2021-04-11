//Usando una expresión regular literal, que consiste en un patrón encerrado entre barras, como 
//sigue:

let re = /ab+c/;

//O llamando a la función constructora del objeto RegExp, de la siguiente manera:

let re = new RegExp('ab+c');

//Métodos que usan expresiones regulares

//En el siguiente ejemplo, el script utiliza el método exec() para encontrar una coincidencia en 
//una cadena.

var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbdbsbz');

//Si no necesitas acceder a las propiedades de la expresión regular, una forma alternativa de 
//crear myArray es con este script:

var myArray = /d(b+)d/g.exec('cdbbdbsbz');
// similar a "cdbbdbsbz" .match(/d(b+)d/g); sin embargo,
// "cdbbdbsbz" .match (/d(b+)d/g) genera Array ["dbbd"], mientras
// /d(b+)d/g.exec('cdbbdbsbz ') produce Array ['dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ].

//Si deseas construir la expresión regular a partir de una cadena, otra alternativa más es este 
//script:

var myRe = new RegExp('d(b+)d', 'g');
var myArray = myRe.exec('cdbbdbsbz');

/*Como se muestra en la segunda forma de este ejemplo, puedes usar una expresión regular creada con un iniciador de objeto sin asignarla a una variable. Sin embargo, si lo hace, cada aparición es una nueva expresión regular. Por este motivo, si utilizas esta forma sin asignarla a una variable, no podrás acceder posteriormente a las propiedades de esa expresión regular. Por ejemplo, supongamos que tienes este script:*/

var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbdbsbz');
console.log('El valor de lastIndex es ' + myRe.lastIndex);

// "El valor de lastIndex es 5"

//Sin embargo, si tienes este script:

var myArray = /d(b+)d/g.exec('cdbbdbsbz');
console.log('El valor de lastIndex es ' + /d(b+)d/g.lastIndex);

// "El valor de lastIndex es 0"

/*Las apariciones de /d(b+)d/g en las dos declaraciones son objetos de expresión regular diferentes y, por lo tanto, tienen valores diferentes para su propiedad lastIndex. Si necesitas acceder a las propiedades de una expresión regular creada con un iniciador de objeto, primero debes asignarla a una variable.*/

