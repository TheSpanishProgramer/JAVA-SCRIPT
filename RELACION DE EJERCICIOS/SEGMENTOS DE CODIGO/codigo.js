// PARA ORDENAR UNA SERIE DE NUMEROS DE MENOR A MAYOR

function ordenar() {
  var a = parseInt(prompt('Teclea el primer número'));//PRIMER NUMERO  
  var b = parseInt(prompt('Teclea el segundo número'));//SEGUNDO NUMERO
  var c = parseInt(prompt('Teclea el tercer número'));//TERCER NUMERO
  var arr = [a, b, c];//CREAMOS LA VARIABLE ARRAY QUE LOS VA A PERMITIR ORDENARLOS
  
  //La función debe devolver -1 para a ordenar a la izquierda de b, 1 para ordenar a la derecha de by 0 para ser considerada igual.
  
  //En este caso a - b devuelve
  
  //un número negativo si a es menor que b, por a lo que se ordenará a la izquierda deb
  //un número positivo si a es mayor que b, por a lo que se ordenará a la derecha deb
  //cero si son iguales, por lo que no importa cuál viene primero
  //Si desea ordenar en orden descendente, es decir, números más grandes primero, necesitará que 
  //su función vuelva b - aa invertir la lógica.
  
  arr.sort(function(a, b){return b - a});// AHORA VAMOS COMPARANDO NUMEROS 
  arr.reverse();
  alert(arr);
  }
  
  ordenar();//LLAMAMOS A LA FUNCION PARA ORDENAR
  
  //SUSTITUIR VALORES EN UN ARRAY
  
  var arr1 = [0, 7, 2, 3, 4, 2, 6, 2, 8, 2];
  var arr2 = arr1;
  document.write("valores del array sin sustituir son:<br/>");
  
  //RECORREMOS EL ARRAY arr1 SUSTITUYENDO EL NUMERO 2 POR EL 1
  
  for (var i = 0; i < arr1.length; i++) {
      document.write(arr1[i] + "<br/>");
      if (arr2[i] === 2) {
          arr2.splice(i, 1, 1);//LOS ARGUMENTOS DE   splice son: 
                                  //i posicion donde comenzamos vamos a cambiar el valor
                                  //1 numero de elementos que vamos a sustituir
                                  //1 valor por el que sustituimos 
      }
  
  }
  document.write("valores del array tras sustituir el valor 2 por el 1 es:<br/>");
  for (var i = 0; i < arr2.length; i++) {
      document.write(arr2[i] + "<br/>");
  }
  
  //CREAR UN VECTOR CON NUMEROS ALEATORIOS
  
  var vec=[];  
  var f;
  for(f=0;f<10;f++)
  {
    vec[f]=parseInt(Math.random()*1001);//HEMOS CREADO UN VECTOR CON VALORES POSITIVOS 
                                        //MENORES A 1000
  }
  
  document.write('Vector original<br>');
  
  //MOSTRAMOS EL VECTOR QUE SE HA GENERADO  

  for(f=0;f<vec.length;f++)
  {
    document.write(vec[f]+', ');
  }
  document.write('<p>');
  
  //VAMOS A ENCONTRAR EL VALOR MENOR DEL VECTOR Y SU POSICION
  
  var menor=vec[0];
  var pos=0;
  for(f=1;f<vec.length;f++)
  {
    if (vec[f]<menor)
    {
      menor=vec[f];//ALMANENAMIENTO DEL VALOR MENOR DEL VECTOR
      pos=f;//ALMACENAMIENTO DE LA POSICION QUE OCUPA EN EL VECTOR ORIGINAL
    }
  }
  
  document.write('Elemento menor del vector: ' + menor);
  document.write('<p>');
  
  var vec2=vec.slice(pos);//AHORA CREAMOS UN VECTOR CON LOS ELEMENTOS SIGUIENTES A LA POCICION 
                          //DEL VALOR MENOR DEL VECTOR ORIGINAL
  
  document.write('Vector resultante de la llamada a slice<br>');
  
  //MOSTRAMOS LOS VALORES DEL VECTOR RESULTANTE
  
  for(f=0;f<vec2.length;f++)
  {
    document.write(vec2[f]+', ');
  }
  
  //GENERACION DE UN VECTOR DE VALORES ENTEROS DEL 1 AL 10 
  
  var arr3 = [];
  for (var i = 0, t = 10; i < t; i++) {
      arr3.push(Math.round(Math.random() * t))
  }
  document.write('Vector sin ordenar: <br>' + arr3 + '<p>');
  document.write('Vector ordenado: <br>' + arr3.sort() + '<p>');
  document.write('Ordenado de forma inversa: <br>' + arr3.reverse());
  
  //A partir del siguiente array que se proporciona:
  
  var valores = [true, 5, false,"hola", "adios", 2];
  
  //1. Determinar cuál de los dos elementos de texto es mayor.
  //2. Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios
  //para obtener un resultado true y otro resultado false.
  //3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
  
  // Determinar cuál de los dos textos es mayor
  var valores = [true, 5, false, "hola", "adios", 2];
  var resultado = valores[3] > valores[4];
  document.write('Hola > adios = ' + resultado);
  document.write('<p>');
  
  // Combinamos valores booleanos
  var valor1 = valores[0];
  var valor2 = valores[2];
  
  // Obtención de resultado TRUE
  var resultado = valor1 || valor2;
  document.write('Obtención de resultado ' + resultado + ' tras combinar valores booleanos');
  document.write('<p>');
  // Obtención de resultado FALSE
  resultado = valor1 && valor2;
  document.write('Obtención de resultado ' + resultado + ' tras combinar valores booleanos');
  document.write('<p>');
  
  // 5 operaciones matemáticas
  var num1 = valores[1];
  var num2 = valores[5];
  
  var sum = num1 + num2;
  document.write('Resultado de suma: ' + sum);
  document.write('<p>');
  var rest = num1 - num2;
  document.write('Resultado de resta: ' + rest);
  document.write('<p>');
  var mult = num1 * num2;
  document.write('Resultado de multiplicación: ' + mult);
  document.write('<p>');
  var div = num1 / num2;
  document.write('Resultado de división: ' + div);
  document.write('<p>');
  var mod = num1 % num2;
  document.write('Resultado de obtención de resto de una división: ' + mod);
  
  
  //Escribe una función en JavaScript que sea capaz de clonar un array. Por ejemplo, para los siguientes datos
 
 //de ejemplo:
 
  //console.log( arrayClonado([1, 2, 4, 0]));
  //console.log( arrayClonado([1, 2, [4, 0]])); 
  // La dificultad es que dentro de una de las posiciones del array,
  //puede que haya otro array y dentro ese, otro, y otro, y otro...
  //Las salidas por consola serían:
      //[1, 2, 4, 0]
      //[1, 2, [4, 0]]
      
  function clonar() {
    var arrayOriginal = [1, 2, 4, 0];
    var arrayClonado = arrayOriginal.slice();

    document.write("EL ARRAY ORIGINAL SE MOSTRARIA: <br/>");

    for (var i = 0; i < arrayOriginal.length; i++) {
        if (i == 0) {

            document.write("[" + arrayOriginal[i] + ", ");
        }
        if (i > 0 && i < 3) {

            document.write(arrayClonado[i] + ", ");

        }
        if (i == 3) {

            document.write(arrayClonado[i] + "] <br/>");

        }

    }

    document.write("EL ARRAY CLONADO SE MOSTRARIA: <br/>");

    for (var i = 0; i < arrayClonado.length; i++) {
        if (i == 0) {

            document.write("[");
        }
        if (i < 2) {

            document.write(arrayClonado[i] + ", ");

        } else if (i == 2) {

            document.write("[" + arrayClonado[i] + "], ");

        } else if (i = 3) {

            document.write("[" + arrayClonado[i] + "] ");
        }

    }
    document.write("]<br/>");
}
  
  //Escribe un simple programa JavaScript que obtenga los siguientes resultados por consola.
  //Array inicia:
  //[ "Rojo","Verde","Blanco","Negro"]
  //Salida por consola:
  //"Rojo,Verde,Blanco,Negro"
  //"Rojo + Verde + Blanco + Negro"
  
  function verColor() {

    var colores = ["Rojo", "Verde", "Blanco", "Negro"];
    let nuevoString = colores.join(',');
    document.write("[");
    document.write(nuevoString);
    document.write("]");
    document.write("<br/>");
    let nuevoString2 = colores.join(' + ');
    document.write("[");
    document.write(nuevoString2);
    document.write("]");
}

  //Escribe una función capaz de fusionar 2 arrays y que elimine todos los elementos duplicados.
  //Datos de ejemplo:
  //let array1 = [1, 2, 3];
  //let array2 = [2, 30, 1];
  //console.log( fusionarArrays( array1 , array2));
  //Salida: [3, 2, 30, 1]
  
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function fusionarArrays() {
  
  let array1 = [1, 2, 3];
  let array2 = [2, 30, 1];

  let arrayFusionado = array1.concat(array2);

  arrayFusionado = arrayFusionado.filter(onlyUnique);

  for (var i = 0; i < arrayFusionado.length; i++) {

    if (i === 0) {

      document.write("[");

    }

    if (i < (arrayFusionado.length - 1)) {

      document.write(arrayFusionado[i] + ", ");

    } else {

      document.write(arrayFusionado[i] + "]");

    }

  }

}

  //Por si no lo sabéis, la letra del DNI está relacionada con el número. Se calcula cogiendo 
  //todas las letras, excepto la Ñ, la I y la O porque pueden inducir a errores, en un orden 
  //concreto (que no es el orden alfabético lógico, sino este ‘TRWAGMYFPDXBNJZSQVHLCKET’) y 
  //seleccionando la que coincide en la posición igual al resto de dividir el número del dni 
  //entre 23.
  
function comprobarDni() {

  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

  var numero = prompt("Introduce tu número de DNI (sin letra)");
  var letra = prompt("Introduce la letra de tu DNI");
  letra = letra.toUpperCase();

  if (numero < 0 || numero > 99999999) {
      alert("El número proporcionado no es correcto");
  } else {
      var letraCalculada = letras[numero % 23];
      if (letraCalculada != letra) {
          alert("La letra o el número proporcionados no son correctos");
      } else {
          alert("El número de DNI y la letra son correctos");
      }
  }
}

//FACTORIAL DE UN NUMERO

function factorial() {

  var numero = prompt("Introduce un numero para mostrar el factorial");
  var resultado = 1;

  for (var i = 1; i <= numero; i++) {
      resultado *= i;
  }
  document.write('El factorial de ' + numero + ' es: ' + resultado);
}

  //Realiza las siguientes operaciones con un vector/array:
  
  //1. Crear un array con las siguientes elementos: “Sandía” y “Melón”.
  
  //2. Añade “Kiwi” al final del array.
  
  //3. Reemplaza el valor justo en la mitad del array por “Melocotón”. 
  //Ten cuidado porque el código para encontrar el elemento del medio debería de funcionar para arrays de cualquier tamaño.
  
  //4. Saca el primer elemento del vector y muestralo (el valor será eliminado del vector).
  
 // 5. Añade por el principio “Pera”.
  
  //6. Muestra todo el vector.

  //7. Muestra todo el vector ordenado alfabéticamente

function opVector() {

  //1. Crear un array con las siguientes elementos:  "Sandía" y "Melón". 
  var frutas = ["Sandía", "Melón"];

  document.write("<p>Los valores del vector frutas son: <br>");

  for (var i = 0; i < frutas.length; i++) {

      document.write(frutas[i] + ", ");
  }
  document.write("<br>");

  //2. Añade "Kiwi" al final del array
  document.write("<p>Los valores del vector frutas son, se ha añadido Kiwi: <br>");
  frutas.push("Kiwi");
  for (var i = 0; i < frutas.length; i++) {

      document.write(frutas[i] + ", ");
  }
  document.write("<br>");

  //3. Reemplaza el valor justo en la mitad del array por "Melocotón"
  document.write("<p>Los valores del vector frutas son, se ha añadido Melocoton en medio del vector: <br>");

  frutas.splice(1, 1, "Melocotón");

  for (var i = 0; i < frutas.length; i++) {

      document.write(frutas[i] + ", ");
  }
  document.write("<br>");


  //4. Saca el primer elemento del vector y muestralo (el valor será eliminado del vector).
  document.write("<p>Los valores del vector frutas son, se ha  eliminado del vector: " + frutas[0] + ", primer valor del vector y queda asi: <br>");

  frutas.shift(0);
  for (var i = 0; i < frutas.length; i++) {

      document.write(frutas[i] + ", ");
  }
  document.write("<br>");

  //5. Añade por el principio "Pera"
  document.write("<p>Los valores del vector frutas son, se ha añadido  al vector: Pera como primer valor del vector y queda asi: <br>");

  frutas.unshift("Pera");
  for (var i = 0; i < frutas.length; i++) {

      document.write(frutas[i] + ", ");
  }
  document.write("<br>");
  //6. Muestra todo el vector
  document.write("<p>Muestra todo el vector<br>");
  for (var i = 0; i < frutas.length; i++) {

      document.write(frutas[i] + ", ");
  }
  document.write("<br>");
  //7. Muestra todo el vector ordenado alfabéticamente
  document.write("<p>Muestra todo el vector ordenado alfabéticamente<br>" + frutas.sort());

}

  //Código de rotación
  
  //El objetivo de esta actividad es utilizar alguna de las funciones predefinidas del lenguaje JavaScript. Puede utilizar las funciones: chat, indexOf, alert, length, prompt y toUpperCase.
  
  //El dictador Julio César utilizaba un código cuando quería mantener en secreto un mensaje. 
  
  //El cifrado consistía en sustituir la primera letra del alfabeto (A) por la cuarta (D) y así sucesivamente con las otras, es decir, B, por la quinta (I) la tercera (C) para la sexta (F ) ...
  
  //El alfabeto latino que utilizaba Julio César constaba de 21 letras, por lo tanto la sustitución de letras para cifrar o descifrar mensajes queda descrita como sigue:
  
    //Alfabeto original: ABCDEFGHIKLMNOPQRSTV
    //Alfabeto cifrado: DEFGHIKLMNOPQRSTVABC
    
  //Este tipo de cifrado es un código de rotación, donde la clave de rotación es 3. Escribe un programa que permita cifrar utilizando un código de rotación  
  
  function rotacion() {

    var texto = prompt("Teclea lo que quieras cifrar (sin números ni espacios)");

    var cifrado = "";

    for (var i = 0; i < texto.length; i++) {

        if (parseInt(texto[i]) % 1 === 0)
            texto = prompt("No se aceptan números ni espacios");

        var ubicacionrotacion = (texto.toUpperCase().charCodeAt(i) - 65 + 33) % 26 + 65;

        var palabraCifrada = String.fromCharCode(ubicacionrotacion);

        cifrado += palabraCifrada;

    }

    return cifrado;

}

function decipher(cifrado) {

    alert("Palabra Cifrada: " + cifrado);

    var descifrado = "";

    for (var j = 0; j < cifrado.length; j++) {

        var ubicacionDescifrado = (cifrado.charCodeAt(j) + 65 - 33) % 26 + 65;
        var palabraDescifrada = String.fromCharCode(ubicacionDescifrado);

        descifrado += palabraDescifrada;
    }

    return descifrado;

}

decipher(rotacion());

//Escribe un programa JavaScript que sume todos los múltiplos de 3 y de 5 que estén por debajo de 1000

function multiplos(valor, multiple) {
  resto = valor % multiple;
  if (resto == 0)
    return true;
  else
    return false;
}

// Arrays que contendrá los valores multiples del 3 y del 5

var multiples_3 = [];
var multiples_5 = [];
var sumaMultiples3 = 0;
var sumaMultiples5 = 0;

// bucle del 1 al 100
for (var i = 1; i <= 1000; i++) {
    if (multiplos(i, 3))
        sumaMultiples3 = sumaMultiples3 + multiples_3.push(i);
    if (multiplos(i, 5))
        sumaMultiples5 = sumaMultiples5 + multiples_5.push(i);
}
document.write("La suma de los multiplos de 3 son: ", sumaMultiples3);
document.write("<br>La suma de los multiplos de 5 son: ", sumaMultiples5);
  
  //Escribe una programa Javascript que encuentre todos los “números de armstrong” de 3 dígitos.
  
  //Un número de Armstrong de 3 dígitos es un entero tal que la suma de sus cubos de sus dígitos 
  //es igual al número en sí. Ejemplo: 371 es un número de Armstrong porque 3^3 + 7^3 + 1^3 = 371
  
function numArmstrong() {

  document.write("Listado de numeros Armstrong de tres cifras:<p>");
  for (var i = 100; i <= 999; i++) {

      var miString = i.toString();

      var a, b, c;

      a = miString.substring(0, 1);
      b = miString.substring(1, 2);
      c = miString.substring(2, 3);

      var y = (a * a * a) + (b * b * b) + (c * c * c);

      if (y === i) {
          document.write(i + "<p>");
      }
  }
}  

/**
 * Funcion que devuelve true o false dependiendo de si la fecha es correcta.
 * Tiene que recibir el dia, mes y año
 */
function isValidDate(day,month,year)
{
    var dteDate;
 
    // En javascript, el mes empieza en la posicion 0 y termina en la 11 
    //   siendo 0 el mes de enero
    // Por esta razon, tenemos que restar 1 al mes
    month=month-1;
    // Establecemos un objeto Data con los valore recibidos
    // Los parametros son: año, mes, dia, hora, minuto y segundos
    // getDate(); devuelve el dia como un entero entre 1 y 31
    // getDay(); devuelve un num del 0 al 6 indicando siel dia es lunes,
    //   martes, miercoles ...
    // getHours(); Devuelve la hora
    // getMinutes(); Devuelve los minutos
    // getMonth(); devuelve el mes como un numero de 0 a 11
    // getTime(); Devuelve el tiempo transcurrido en milisegundos desde el 1
    //   de enero de 1970 hasta el momento definido en el objeto date
    // setTime(); Establece una fecha pasandole en milisegundos el valor de esta.
    // getYear(); devuelve el año
    // getFullYear(); devuelve el año
    dteDate=new Date(year,month,day);
 
    //Devuelva true o false...
    return ((day==dteDate.getDate()) && (month==dteDate.getMonth()) && (year==dteDate.getFullYear()));
}
 
/**
 * Funcion para validar una fecha
 * Tiene que recibir:
 *  La fecha en formato ingles yyyy-mm-dd
 * Devuelve:
 *  true-Fecha correcta
 *  false-Fecha Incorrecta
 */
function validate_fecha(fecha)
{
    var patron=new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");
 
    if(fecha.search(patron)==0)
    {
        var values=fecha.split("-");
        if(isValidDate(values[2],values[1],values[0]))
        {
            return true;
        }
    }
    return false;
}
 
/**
 * Funcion que devuelve true o false dependiendo de si la fecha es correcta.
 * Tiene que recibir el dia, mes y año
 */
function isValidDate(day,month,year)
{
    var dteDate;
 
    // En javascript, el mes empieza en la posicion 0 y termina en la 11 
    //   siendo 0 el mes de enero
    // Por esta razon, tenemos que restar 1 al mes
    month=month-1;
    // Establecemos un objeto Data con los valore recibidos
    // Los parametros son: año, mes, dia, hora, minuto y segundos
    // getDate(); devuelve el dia como un entero entre 1 y 31
    // getDay(); devuelve un num del 0 al 6 indicando siel dia es lunes,
    //   martes, miercoles ...
    // getHours(); Devuelve la hora
    // getMinutes(); Devuelve los minutos
    // getMonth(); devuelve el mes como un numero de 0 a 11
    // getTime(); Devuelve el tiempo transcurrido en milisegundos desde el 1
    //   de enero de 1970 hasta el momento definido en el objeto date
    // setTime(); Establece una fecha pasandole en milisegundos el valor de esta.
    // getYear(); devuelve el año
    // getFullYear(); devuelve el año
    dteDate=new Date(year,month,day);
 
    //Devuelva true o false...
    return ((day==dteDate.getDate()) && (month==dteDate.getMonth()) && (year==dteDate.getFullYear()));
}
 
/**
 * Funcion para validar una fecha
 * Tiene que recibir:
 *  La fecha en formato ingles yyyy-mm-dd
 * Devuelve:
 *  true-Fecha correcta
 *  false-Fecha Incorrecta
 */
function validate_fecha(fecha)
{
    var patron=new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");
 
    if(fecha.search(patron)==0)
    {
        var values=fecha.split("-");
        if(isValidDate(values[2],values[1],values[0]))
        {
            return true;
        }
    }
    return false;
}
 
/**
 * Esta función calcula la edad de una persona y los meses
 * La fecha la tiene que tener el formato yyyy-mm-dd que es
 * metodo que por defecto lo devuelve el <input type="date">
 */
function calcularEdad()
{
    var fecha=document.getElementById("user_date").value;
    if(validate_fecha(fecha)==true)
    {
        // Si la fecha es correcta, calculamos la edad
        var values=fecha.split("-");
        var dia = values[2];
        var mes = values[1];
        var ano = values[0];
 
        // cogemos los valores actuales
        var fecha_hoy = new Date();
        var ahora_ano = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth()+1;
        var ahora_dia = fecha_hoy.getDate();
 
        // realizamos el calculo
        var edad = (ahora_ano + 1900) - ano;
        if ( ahora_mes < mes )
        {
            edad--;
        }
        if ((mes == ahora_mes) && (ahora_dia < dia))
        {
            edad--;
        }
        if (edad > 1900)
        {
            edad -= 1900;
        }
 
        // calculamos los meses
        var meses=0;
        if(ahora_mes>mes)
            meses=ahora_mes-mes;
        if(ahora_mes<mes)
            meses=12-(mes-ahora_mes);
        if(ahora_mes==mes && dia>ahora_dia)
            meses=11;
 
        // calculamos los dias
        var dias=0;
        if(ahora_dia>dia)
            dias=ahora_dia-dia;
        if(ahora_dia<dia)
        {
            ultimoDiaMes=new Date(ahora_ano, ahora_mes, 0);
            dias=ultimoDiaMes.getDate()-(dia-ahora_dia);
        }
        document.getElementById("result").innerHTML="Tienes "+edad+" años, "+meses+" meses y "+dias+" días";
    }else{
        document.getElementById("result").innerHTML="La fecha "+fecha+" es incorrecta";
    }
}

  //Realiza un script que sea capaz de calcular los días que hay entre dos fechas. Siempre el 
  //número de días debe de ser positivo, ya que el usuario debe de introducir 2 fechas, da igual 
  //cual es anterior a la otra, para que calcule la diferencia de días de ambas
  
function calcular(){
  var fechaini = new Date(document.getElementById('dateini').value);
  var fechafin = new Date(document.getElementById('datefin').value);
  var diasdif= fechafin.getTime()-fechaini.getTime();
  var contdias = Math.round(diasdif/(1000*60*60*24));
  alert("los dias que pasan entre ambas fechas son: "+contdias+ " dias.");
}

  //Crea un programa que muestre la hora en diferentes formatos, según el valor que meta el 
  //usuario por parámetro: los parámetros que debe introducir el usuario son la hora, los 
  //minutos, los segundos.
  
  //1. 14:35:07 (hora detallada con minutos y segundos).
  //2. 14:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio día)
  
  function formatoFecha () {
    
    var f = new Date();
    
    document.write("<p>La fecha actual es: </p>"+f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
    
    // El formato americano lo pondrá en AM/PM
    document.write("<p>La hora actual en formato 24h es: </p>"+f.toLocaleTimeString('en-US'));
    
    // El formato español lo pondrá en un formato 24h
    document.write("<p>La hora actual en formato español es: </p>"+f.toLocaleTimeString('es-ES'));
    
  }
  
  //Crea un programa que pida al usuario que elija una opción del siguiente menú:
  
  //1. Potencia.
  //2. Raíz.
  //3. Redondeo.
  //4. Trigonometría.
  
  //Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el 
  //resultado en pantalla
  
  //(La potencia de X elevado a Y es: )
  
  //Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en 
  //pantalla (La raíz de X es: )
  
  //Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al 
  //entero más próximo, al alta y a la baja.
  
  //Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla los valores trigonométricos del seno, coseno y tangente.
  
  function calculadoraAritmetica() {
    
    var opcion = prompt("Elige: \n1.- Potencia \n2.- Raíz \n3.- Redondeo \n4.- Trigonometría", "");

    function casos(opcion) {
        switch(opcion) {
            case "1":
      var base = prompt("Introduce la base(x)");
      var exponente = prompt("Introduce el exponente base(y)");
      alert("El resultado es "+Math.pow(base, exponente));
                break;
            case "2":
      var raiz = prompt("Introduce un número para calcular su raíz");
      if (raiz < 0) {
      alert("Debes introducir un número positivo");
      }else{
      alert("La raíz de "+ raiz + " es " + Math.sqrt(raiz));
      }
                break;
            case "3":
      var numeroRedondeo = prompt("Introduce un número con decimales");
      alert("El número introducido ("+numeroRedondeo+") una vez redondeado es " + Math.round(numeroRedondeo)); 
                break;
            case "4":
      var angulo = prompt("Introduce un ángulo entre 0º y 360º");
      if (angulo < 0 || angulo > 360) {
      alert("El número que has introducido no es válido (debe de ser entre 0 y 360)");
      }else{
      alert("El seno de "+angulo+" es "+Math.sin(angulo)+"\nEl coseno de "+angulo+" es "+Math.cos(angulo)+"\nLa tangente de "+angulo+" es "+Math.tan(angulo));
      }
                break;
      default:
        alert("Debes introducir una opción entre 1 y 4");
            }
    }
  casos(opcion);
}

  //OPERACIONES CON CIRCUNFERENCIAS Y ESFERAS

function operacionesCirculoEsfera() {
  //Solicitamos introducir el radio de la circunferencia
  var radio = prompt("Introduzca el valor del radio de la circunferencia: ", "");
  //Mostramos el radio de la circunferencia
  document.write("<p>El valor del radio de la circunferencia es: </p>"+radio);
  //Calculamos el diametro de la circunferencia
  var diametro= 2*radio;
  //Mostramos el diametro de la circunferencia
  document.write("<p>El valor del diametro de la circunferencia es: </p>"+diametro);
  //Calculamos el perimetro de la circunferencia
  var perimetro= (2*Math.PI)*radio;
  //Mostramos el perimetro de la circunferencia
  document.write("<p>El valor del perimetro de la circunferencia es: </p>"+perimetro);
  //Calculamos el area de la circunferencia
  var areac= Math.PI*(Math.pow(radio,2));
  //Mostramos el area de la circunferencia
  document.write("<p>El valor del area de la circunferencia es: </p>"+areac);
  //Calculamos el area de la esfera
  var areae= 4*Math.PI*(Math.pow(radio,2));
  //Mostramos el area de la esfera
  document.write("<p>El valor del area de la esfera es: </p>"+areae);
  //Calculamos el volumen de la esfera
  var volumen= (4/3)*Math.PI*Math.pow(radio,3);
  //Mostramos el volumen de la esfera
  document.write("<p>El valor del volumen de la esfera es: </p>"+volumen);
}

  //Crea un programa que pida al usuario su nombre y apellidos y muestre:
  
  //1. El tamaño del nombre más los apellidos (sin contar espacios).
  //2. La cadena en minúsculas y en mayúsculas.
  //3. Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / 
    //Apellido 1: /
    //Apellido 2: y además,
  //Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido 
  //y la inicial del segundo apellido: ej. Para Laura Folgado Galache sería lfolgadog.
  //Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y de los 
  //dos apellidos: ej. Laufolgal.

function operacionesNombres() {
  var nombre = prompt("Dime tu nombre");
  var cadMinusculas=nombre.toLowerCase();
  var cadMayusculas=nombre.toUpperCase();

  document.write("0 El nombre introducido es: "+nombre+"<br/>");
  document.write("<br/>");
  function lenWithoutSpaces(str) {
    return str.replace( /\s/g, '' ).length;
  }
  var nombreSinEspacios= lenWithoutSpaces (nombre);
 
  document.write("1. El tamaño del nombre mas los apellidos (sin contar espacios): " + nombreSinEspacios+"<br/>" );
  document.write("<br/>");
  document.write("2.1. La cadena en minusculas: " + cadMinusculas+"<br/>" );
  document.write("<br/>");
  document.write("2.2. La cadena en mayusculas: " + cadMayusculas+"<br/>" );
  document.write("<br/>");
  //Vamos a dividir en nombre y apellidos
  var arraynombre = nombre.split(" ");
  var longitud = arraynombre.length;
  var name;
  var ape1="";
  var ape2="";
  var espacio= " ";
  var priApellido=0;
  for (var i=0; i < arraynombre.length; i++) {

    if (longitud>=4 && i<2){

      name= arraynombre [0]+" "+arraynombre [1];
      
    }
    if (longitud < 4 && i>=1 && priApellido==0){
      name= arraynombre [0];
      ape1=ape1+" "+arraynombre [i];
      priApellido=1;
      i++;

    } 
    
    if (longitud < 4 && i>=1 && priApellido==1) {

      ape2=ape2+" "+arraynombre [i];

    }
    if (longitud>=4 && i>1&& priApellido==0){

      ape1=ape1+" "+arraynombre [i];
      priApellido=1;
       i++;
    }
    
    if (longitud>=4 && i>1&& priApellido==1){

      ape2=ape2+" "+arraynombre [i];

    }

   
 }
  
  document.write("3. Que divida el nombre y los apellidos y los muestre en 3 lineas: <br/>" );
  document.write("Nombre: "+name+"<br/>");
  document.write("1er Apellido: "+ape1+"<br/>");
  document.write("2do Apellido: "+ape2+"<br/>");

  document.write("<br/>");

  //Propuestas de nombre compuesto por la inicial del nombre, el primer apellido y la
  //inicial del segundo apellido: ej. Para Laura Folgado Galache sería lfolgadog
  var propuesta1=name.charAt(0)+ape1+ape2.charAt(1);
  propuesta1 = propuesta1.replace(/ /g, "");
  document.write("La primera propuesta de nombre de usuario es: "+propuesta1+"<br/>");
  
  // Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y de 
  //los dos apellidos: ej. Laufolgal

  document.write("<br/>");
  
  var propuesta2=name.substr(0,3)+ape1.substr(1,3)+ape2.substr(1,3);
  document.write("La segunda propuesta de nombre de usuario es: "+propuesta2+"<br/>");
}

  //El objetivo de esta actividad es calcular el tiempo que tarda un script en ejecutarse. Para 
  //ello, utilizaremos el objeto Date , el cual tiene precisión de milisegundos.
  
  //En el siguiente enlace tenéis un algoritmo para encontrar los decimales de PI que es fácil de //reutilizar en su código.
  //  - Debe de mostrar cuánto tiempo tarda en calcular los primeros 60 decimales de PI
  
  var start = Date.now();


  function CalculatePi(NumberOfDigits) {
  this.data = {}
  this.name = ""
  var $ = this; 
  this._ = [
      function (x, y) {
          return this._[6](x, this._[9](x) + this._[9](y));
      }.bind($),

      function (x, y) {
          return this._[8](x, this._[9](y));
      }.bind($),
      
      function (x, y) {
          return this._[8](this._[9](x), y);
      }.bind($),

      function (x, y) {
          return this._[6](x, this._[9](x) / this._[9](y));
      }.bind($),

      function (x, y) {
          return this._[6](x, this._[9](x) - this._[9](y));
      }.bind($),

      function (x, y) {
          return this._[9](x) != this._[9](y);
      }.bind($),

      function (x, y) {
          this.data[-x] = Math.floor(y);
      }.bind($),

      function (x, y) {
          return this._[6](x, this._[9](x) % this._[9](y));
      }.bind($),
  
      function (x, y) {
          this.data[-x] = this._[9](y)
      }.bind($),
  
      function (x) {
          return (this.data[-x] == undefined) ? 0 : this.data[-x];
      }.bind($),
  
      function (x, y) {
          return this.name += this._[9](-6);
      }.bind($),

      function (x, y) {
          return this._[6](x, this._[9](x) * this._[9](y));
      }.bind($),

      function (x, y) {
          return this._[9](x) < this._[9](y);
      }.bind($),
  
      function (x, y) {
          return this._[9](x) > this._[9](y);
      }.bind($),

      function (y, n) {
          var x = "dermatoglyphics!?", m, x;
          for (var $ = 0; $ < y.length; ++$) {
              if ($ % 3 == 0)
                  m = this._[x.indexOf(y[$])];
              else if ($ % 3 == 1)
                  a = -x.length + x.indexOf(y[$]);
              else
                  m = m(a, -x.length + x.indexOf(y[$]));
          }
          return m;
      }.bind($),
  
      function (x, y) {
          return this._[14](x, y) ? this._[14](y, x) : undefined;
      }.bind($),

      function (x, y) {
          return this._[14](x, y) ? undefined : this._[14](y, x);
      }.bind($),

      function (x, y) {
          return this._[14](x, y) ? (this._[14](y, x), this._[17](x, y)) : undefined;
      }.bind($),

      function (x, z) {
          for (var $ in x) {
              this._[x[$][0]](x[$][1], x[$][2]);
          }
      }.bind($),

      function (x, y) {
          this._[18]([[14, "lcmlglhgtmgr", "csm"],
          [17, "cgs", "logaoaeoohotlpchpgdoplpghpeapalcomcpgoplpgaparpoaga"],
          [14, "lhilicmitdiylycgyt", "csm"],
          [16, "tit", "limdha"],
          [15, "t?m", "p?h"],
          [14, "d?a", "csm"]], undefined);
      }.bind($),

      function (x, y) {
          return this._[x](-1, -9) ? (this._[y](-1, -2), this._[y+1](x, y)) : undefined;
      }.bind($),
      
      function(x, y) {
          for (var $ in x) {
              this._[x[$][0]](x[$][1], x[$][2]);
          }
      }.bind($)
  ]
  this._[21]([[6, -9, NumberOfDigits], [6, -12, 10], [6, -13, 1], [6, -14, 0], 
                   [6, -15, 3], [14, "leraeal?mlslhstmsr", "csm"], [17, "csm", 
                    "l!sa!ar!easa"], [20, 12, 19], [18, -1, -2]], undefined);
}

console.log(new CalculatePi(60).name);
var end = Date.now();
document.write("El tiempo que tarda este script en mostrar los 60 primeros números de PI es de " + (end - start) + " ms");

//<!-- En la línea de de incio de la condición de la función se tiene en consideración que: -->
//<!-- · Debe empezar por letra o número -->
//<!-- · Puede contener puntos, guiones además de letras y números -->
//<!-- Insertaremos toda la combinación entre paréntesis -->
//<!-- \w+([\.-]?\w+)* -->
//<!-- El dominio irá al final tras el punto. Se han insertado los dominios -->
//<!-- de hotmail, outlook, yahoo, live y gmail. Todo aquello que no recoja estos -->
//<!-- dominios no será válido -->
//<!-- @(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/ -->

function validarEmail(valor) { // Inicio de la función
  if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(valor)){
   alert("La dirección de email " + valor + " es correcta."); // Caso de que sea correcto, mostrará mensaje de confirmación
  } else {
   alert("La dirección de email es incorrecta.");  // Caso de que sea incorrecto, mostrará mensaje de error
  }
}
validarEmail(prompt("Introduzca un mail válido")); // Llamada a la función con petición de entrada por teclado al usuario

