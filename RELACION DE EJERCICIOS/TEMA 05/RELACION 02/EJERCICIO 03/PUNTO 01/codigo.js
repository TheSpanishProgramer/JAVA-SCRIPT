//Funcion que cambia el color de los enlaces a naranja al pasar por encima

function dentroFuera() {
	
	
	document.getElementById("enlace").addEventListener("mouseover", dentro);
	document.getElementById("enlace").addEventListener("mouseout", fuera);
	
}

function dentro() {

	document.getElementById("enlace").style.color = "red";

}

function fuera() {

	document.getElementById("enlace").style.color = "black";

}

dentroFuera();