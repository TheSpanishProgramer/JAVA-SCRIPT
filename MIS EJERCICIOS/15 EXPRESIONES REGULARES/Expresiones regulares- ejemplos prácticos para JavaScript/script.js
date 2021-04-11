var reg = /javascript/;
 “Esto es lenguaje javaScript”.match(reg);
 // devuelve un array de un elemento [“javascript”] porque dentro de la cadena se encuentra un elemento con esa secuencia concreta de letras. En el caso de que no existiera la palabras “javaScript” dentro de la cadena, devolvería un elemento null.
 
 if (“Esto es lenguaje javaScript”.match(/javascript/) {
	 // Se devolverá true porque si existe el elemento javaScript en la cadena.
  }
  if (“Esto es lenguaje Objective-C”.match(/javascript/) {
	 // Se devuelve false porque no existe el elemento javaScript en la cadena.
  }
  
  // Para la búsqueda de dígitos en distintas cadenas de texto:
  
  /\d{3}/      // Busca 3 dígitos en la cadena
  /\d{1,5}/    // Busca entre 1 y 5 dígitos en la cadena.
  /\d{2,}/     // Busca 2 dígitos o más en la cadena.
  
  // Aquí algunos ejemplos concretos con esta última expresión regular: en el primer ejemplo, la expresión permite buscar dentro de una cadena de texto concreta (en este caso, “1234”), un máximo de dos dígitos, por eso devuelve el elemento [“12”]; en el segundo caso se solicita buscar en la cadena de texto entre uno y tres dígitos, por eso devuelve [“123”]; y en el tercer caso, la expresión está diseñada para buscar dentro de la cadena entre tres y diez dígitos, por eso devuelve cuatro, la cadena de texto completa: [“1234”]. 
  
  “1234”.match(/\d{2}/);
  [“12”]
  
  “1234”.match(/\d{1,3}/);
  [“123”]
  
  “1234”.match(/\d{3,10}/)
  [“1234”]