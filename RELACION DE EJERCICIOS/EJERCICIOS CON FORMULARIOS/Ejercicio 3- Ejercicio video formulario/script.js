document.addEventListener("DOMContentLoaded", function() {
	  document.getElementById("form").addEventListener('submit', validarFormulario); 
	});
	
function validarFormulario(evento) {
	//valido el nombre
		valor = document.getElementById("nombre").value;
	   if (valor == null || valor.length < 3 || valor.length > 15  || /^\s+$/.test(valor)){
			  alert("Tiene que escribir su nombre")
			  document.form.nombre.focus()
			  return 0;
	   }
	   
	   //valido el contraseñas
	   var p1 = document.getElementById("password").value;
	   var p2 = document.getElementById("password2").value;
	  
	   var espacios = false;
	   var cont = 0;
	   
	   while (!espacios && (cont < p1.length)) {
		 if (p1.charAt(cont) == " ")
		   espacios = true;
		 cont++;
	   }
		  
	   if (espacios) {
		 alert ("La contraseña no puede contener espacios en blanco");
		 document.form.password.focus();
		 document.form.password2.focus();
		 return 0;
	   }
	   
	   if ( p1.length < 6 || p1.length > 25 || p2.length < 6 || p2.length > 25 ){
			alert("Tiene que escribir una contraseña de entre 6 y 25 caracteres")
			document.form.password.focus();
			document.form.password2.focus();
			return 0;
	 	}
	   
	   if (p1.length == 0 || p2.length == 0) {
			 alert("Los campos de la password no pueden quedar vacios");
			 document.form.password.focus();
			 document.form.password2.focus();
			 return 0;
		   }
		  
		  if (p1 != p2) {
				alert("Las passwords deben de coincidir");
				document.form.password.focus();
				document.form.password2.focus();
				return 0;
			  } 
	
	   //Valicacion del email
	   valor = document.getElementById("email").value;
	   if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ){
			  alert("El email no es correcto vuelva a introducirlo.")
			  document.form.email.focus()
			  return 0;
	   }
	
	   //el formulario se envia
	   alert("Muchas gracias por enviar el formulario");
	   document.form.submit();
	}