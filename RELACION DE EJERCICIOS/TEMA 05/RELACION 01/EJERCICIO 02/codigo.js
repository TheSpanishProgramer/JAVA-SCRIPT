window.onload = function() {
	  var text = document.getElementById("parrafos");
	
	  // 1. Número de enlaces de la página
	  var parrafos = document.getElementsByTagName("a");
	  text.innerHTML = "1. Número de enlaces de la página = "+parrafos.length + "<br/>";
	
	  // 2. Dirección a la que enlaza el penúltimo enlace
	  var mensaje = "2. Dirección a la que enlaza el penúltimo enlace: "+parrafos[parrafos.length-2].href;
	  text.innerHTML = text.innerHTML + "<br/>" + mensaje + "<br/>" + "<br/>";
	
	  // 3. Número de enlaces que enlazan a http://prueba/
	  var cont = 0;
	  for(var i=0; i<parrafos.length; i++) {
		
		if(parrafos[i].href == "http://prueba" || parrafos[i].href == "http://prueba/") {
		  cont++;
		}
	  }
	  text.innerHTML = text.innerHTML  + "3. Número de enlaces que enlazan a http://prueba/ es: " + cont + "<br/>"
	
	  // 4. Número de enlaces del tercer párrafo
	  var parrafos = document.getElementsByTagName("p");
	  parrafos = parrafos[2].getElementsByTagName("a");
	  text.innerHTML = text.innerHTML + "<br/>" + "4. Número de enlaces del tercer párrafo = "+parrafos.length;
	}
	
	