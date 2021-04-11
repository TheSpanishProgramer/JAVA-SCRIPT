window.onload = function() {
	
	function remarcar () {
		  
		  var nodo = document.getElementsByClassName('parrafo');
		  //console.log(nodo[0].textContent);  //accedo al primer elemento
		  //console.log(nodo[1].textContent);  //accedo al segundo elemento
		  
		  var parrafo1=nodo[0].textContent;
		  
		  var parrafo2=nodo[1].textContent;
		  
		  var parrafo1Palabras= parrafo1.split (' ');
		  var parrafo2Palabras= parrafo2.split (' ');
		  //console.log (parrafo1Palabras);
		  //console.log (parrafo2Palabras);
		  var palabra ='';
		  for (i=0;i < parrafo1Palabras.length; i++) {
			  	palabra=parrafo1Palabras[i].trim();
			    if (palabra.length < 7) {
					
				    document.write (palabra+ ' ');
			    }else {
				
				  document.write ("<mark>"+palabra+"</mark>"+ ' ')
			    }
		    }
			document.write("<p>");
			
			for (i=0;i < parrafo2Palabras.length; i++) {
				palabra=parrafo2Palabras[i].trim();
				if (palabra.length < 7) {
					
					document.write (palabra+ ' ');
				}else {
				
				  document.write ("<mark>"+palabra+"</mark>"+ ' ')
				}
			}
		}
	
	
	remarcar();
	
}
	