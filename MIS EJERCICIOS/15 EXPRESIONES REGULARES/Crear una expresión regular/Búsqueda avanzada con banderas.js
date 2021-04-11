/*

Las expresiones regulares tienen seis indicadores opcionales que permiten funciones como la búsqueda global y que no distinga entre mayúsculas y minúsculas. Estos indicadores se pueden usar por separado o juntos en cualquier orden y se incluyen como parte de la expresión regular.

*/

//Para incluir una bandera con la expresión regular, usa esta sintaxis:

var re = /patrón/banderas;

//o

var re = new RegExp('patrón', 'banderas');

//Ten en cuenta que las banderas son parte integral de una expresión regular. No se pueden agregar 
//ni eliminar más tarde.

//Por ejemplo, re = /\w+\s/g crea una expresión regular que busca uno o más caracteres seguidos de 
//un espacio y busca esta combinación en toda la cadena.

var re = /\w+\s/g;
var str = 'fee fi fo fum';
var myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]

//Podrías reemplazar la línea:

var re = /\w+\s/g;

//con:

var re = new RegExp('\\w+\\s', 'g');

//y obtener el mismo resultado.

/*El comportamiento asociado con el indicador g es diferente cuando se usa el método .exec(). Los roles de "clase" y "argumento" se invierten: En el caso de .match(), la clase cadena (o tipo de datos) posee el método y la expresión regular es solo un argumento, mientras que en el caso de .exec(), es la expresión regular la que posee el método, siendo la cadena el argumento. Compara esto str.match(re) con re.exec(str). El indicador g se usa con el método .exec() para obtener una progresión iterativa.*/

var xArray; while(xArray = re.exec(str)) console.log(xArray);
// produce:
// ["fee ", index: 0, input: "fee fi fo fum"]
// ["fi ", index: 4, input: "fee fi fo fum"]
// ["fo ", index: 7, input: "fee fi fo fum"]

/*La bandera m se utiliza para especificar que una cadena de entrada de varias líneas se debe tratar como varias líneas. Si se usa el indicador m, ^ y $ coinciden al principio o al final de cualquier línea dentro de la cadena de entrada en lugar del inicio o el final de toda la cadena.*/
