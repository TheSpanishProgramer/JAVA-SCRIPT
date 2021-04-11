var nombre = prompt("Dime tu nombre");
var apellidos = prompt("Dime tus apellidos");
var email = prompt("Dime tu email");
var contra = prompt("Dime tu contraseña");

//verificar el formato del nombre

var reg=new RegExp("^[A-Z]");

if (nombre.match(reg)){
	alert ("El formato del nombre es el correcto");
} else {
	alert ("El formato del nombre es incorrecto"); 
}

//verificar el formato del apellido

var espacios = / /;

if (espacios.test(apellidos)){
	alert ("El formato de los apellidos es el correcto");
} else {
	alert ("El formato de los apellidos es incorrecto"); 
}

//Verificar el formato del email

var regmail=new RegExp("/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i");
if (email.match(regmail)){
	alert ("El formato del email es el correcto");
} else {
	alert ("El formato del email es incorrecto"); 
}


//verificar el formato de la contraseña

if(contra.length == 8)
{		
	var mayuscula = false;
	var minuscula = false;
	var numero = false;
	var caracter_raro = false;
	
	
	for(var i = 0;i<contra.length;i++)
	{
		if(contra.charCodeAt(i) >= 65 && contra.charCodeAt(i) <= 90)
		{
			mayuscula = true;
		}
		else if(contra.charCodeAt(i) >= 97 && contra.charCodeAt(i) <= 122)
		{
			minuscula = true;
		}
		else if(contra.charCodeAt(i) >= 48 && contra.charCodeAt(i) <= 57)
		{
			numero = true;
		}
		else
		{
			caracter_raro = true;
		}
	}
	if(mayuscula == true && minuscula == true && caracter_raro == true && numero == true)
	{
		alert ("El formato de la contraseña es correcto");;
	}else {
		
		alert ("El formato de la contraseña es incorrecto"); 
	}
}
	