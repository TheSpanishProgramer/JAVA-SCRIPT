window.onload = function() {
	
	function alinear () {
		
		var nodo = document.getElementsByClassName('parrafo');
		//console.log(nodo[0].textContent);  //accedo al primer elemento
		//console.log(nodo[1].textContent);  //accedo al segundo elemento
		
		var parrafo1=nodo[0].textContent;
		
		var parrafo2=nodo[1].textContent;
		
		var caracter ='.';
		
		for (i=0;i < parrafo1.length; i++) {
			document.write (parrafo1 [i])
			if (parrafo1 [i]=== caracter) {
				document.write ('<p>')
			}
			
		}
		
		for (i=0;i < parrafo2.length; i++) {
			document.write (parrafo2 [i])
			if (parrafo2 [i]=== caracter) {
				document.write ('<p>')
			}
			
		}
		
	}
	
	alinear();
	
	}