document.addEventListener("DOMContentLoaded", function() {
	  document.getElementById("miFormulario").addEventListener('submit', validarFormulario); 
	});
	
	function validarFormulario(evento) {
	//valido el nombre
		valor = document.getElementById("nombre").value;
	   if (document.miFormulario.nombre.value.length==0){
			  alert("Tiene que escribir su nombre")
			  document.miFormulario.nombre.focus()
			  return 0;
	   }
	   
	   //valido el telefono
	   valor = document.getElementById("telefono").value;
		  if ( !(/^\d{9}$/.test(valor)) ){
				 alert("Tiene que escribir un telefono con valores numericos")
				 document.miFormulario.telefono.focus()
				 return 0;
		  }
	
	   //valido fecha de nacimiento
	   var ano = document.getElementById("ano").value;
	   var mes = document.getElementById("mes").value;
	   var dia = document.getElementById("dia").value;
	   
	   valor = new Date(ano, mes, dia);
	   
	   if (!isNaN(valor)){
			  alert("Tiene que introducir una fecha correcta.")
			  document.miFormulario.dia.focus()
			  return 0;
	   }
	
	   //valido el checkbox de edad
	   elemento = document.getElementById("mayor");
	   if (!elemento.checked){
			  alert("Debe seleccionar un motivo de su contacto.")
			  document.miFormulario.mayor.focus()
			  return 0;
	   }
	
	   //el formulario se envia
	   alert("Muchas gracias por enviar el formulario");
	   document.miFormulario.submit();
	}