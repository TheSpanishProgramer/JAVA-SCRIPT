^           //Principio de entrada o línea.

$           //Fin de entrada o línea.

*           //El carácter anterior 0 o más veces.

+           //El carácter anterior 1 o más veces.

?           //El carácter anterior una vez como máximo (es decir, indica que el carácter anterior 				es opcional).

.           //Cualquier carácter individual, salvo el de salto de línea.

x|y         //x o y.

{n}         //Exactamente n apariciones del carácter anterior.

{n,m}       //Como mínimo n y como máximo m apariciones del carácter anterior.

[abc]       //Cualquiera de los caracteres entre corchetes. Especifique un rango de caracteres con 			un guión (por ejemplo, [a-f] es equivalente a [abcdef]).

[^abc]      //Cualquier carácter que no esté entre corchetes. Especifique un rango de caracteres 				con un guión (por ejemplo, [^a-f] es equivalente a [^abcdef]).

\b          //Límite de palabra (como un espacio o un retorno de carro).

\B          //Cualquiera que no sea un límite de palabra.

\d          //Cualquier carácter de dígito. Equivalente a [0-9].

\D          //Cualquier carácter que no sea de dígito. Equivalente a [^0-9].

\f          //Salto de página.

\n          //Salto de línea.

\r          //Retorno de carro.

\s          //Cualquier carácter individual de espacio en blanco (espacios, tabulaciones, saltos 				de página o saltos de línea).

\S          //Cualquier carácter individual que no sea un espacio en blanco.

\t          //Tabulación.

\w          //Cualquier carácter alfanumérico, incluido el de subrayado. Equivalente a [A-Za-					z0-9_].

\W         //Cualquier carácter que no sea alfanumérico. Equivalente a [^A-Za-z0-9_].