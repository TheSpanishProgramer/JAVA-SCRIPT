function mueveReloj(){ 
	momentoActual = new Date() 
	hora = momentoActual.getHours() 
	minuto = momentoActual.getMinutes() 
	segundo = momentoActual.getSeconds() 

	horaImprimible = hora + " : " + minuto + " : " + segundo 

	document.form_reloj.reloj.value = horaImprimible;
	
	if(hora >= 12 && hora < 15){
		texto = "Es medio día.";
	  }
	 
	  if(hora >= 15 && hora < 21){
		texto = "Estamos en la tarde.";
	  }
	 
	  if(hora >= 21 && hora < 7){
		texto = "Es de noche";
	  }
	  if(hora >= 7 && hora < 12){
		  texto = "Es mañana";
		}
	 
	  document.getElementById('txtsaludo').innerHTML = texto;

	//La función se tendrá que llamar así misma para que sea dinámica, 
	//de esta forma:

	setTimeout(mueveReloj,1000)
	
	
}

