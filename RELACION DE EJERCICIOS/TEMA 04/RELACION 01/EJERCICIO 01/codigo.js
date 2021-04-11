
//Constructor 

function Jugador(nombre, apellido, empleo, nivel, puntuacion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.empleo = empleo;
    this.nivel = nivel;
    this.puntuacion = puntuacion;
  }

//Objeto jugador 1

var jugador1 = {
    nombre: 'jugador 1',
    apellido: 'el primero',
    empleo: 'cuelga botas ',
    nivel: 44,
    puntuacion: 10000000,
  };
  
  //Objeto jugador 2

  var jugador2 = {
    nombre: 'jugador 2',
    apellido: 'el segundo',
    empleo: 'cierra bares',
    nivel: 66,
    puntuacion: 2000000,
  };
  
  //No he tenido forma de hacer que me funcione el metodo toString utilizando Object.prototype ()
  //Jugador.prototype.mostrarJugador = function() {
  
  //  document.write ('Nombre y apellido: ' +
  //    this.nombre +
  //    ' ' +
  //    this.apellido +
  //    '. / Trabajo: ' +
  //     this.empleo +
  //    '. / Nivel: ' +
  //    this.nivel +
  //    '. / Puntuación: ' +
  //    this.puntuacion + "<br><br>");
      
  //};
  
  
  
  document.write ("Los datos del primer Jugador son:");
  
  document.write('Nombre y apellido: ' +
      jugador1.nombre +
      ' ' +
      jugador1.apellido +
      '. / Trabajo: ' +
      jugador1.empleo +
      '. / Nivel: ' +
      jugador1.nivel +
      '. / Puntuación: ' +
      jugador1.puntuacion + "<br><br>");
    
  document.write ("Los datos del segundo Jugador son:");
  
  document.write('Nombre y apellido: ' +
    jugador2.nombre +
    ' ' +
    jugador2.apellido +
    '. / Trabajo: ' +
    jugador2.empleo +
    '. / Nivel: ' +
    jugador2.nivel +
    '. / Puntuación: ' +
    jugador2.puntuacion + "<br>");
    
    document.write ("<br>" + "Modificacion de puntuaciones:" + "<br>");
    
   function eliminar() {
        var seleccionado = document.getElementById("jugador"); 
       
        if (seleccionado.selectedIndex == null || seleccionado.selectedIndex == 0) { 
           alert("No se ha seleccionado ningun jugador; \n Debes elegir un jugador de la lista.");
           return false
           }
        else { 
            miSeleccion = document.seleccionar.jugador.value;
            seleccionado.innerHTML = miSeleccion;
            
            if (miSeleccion =='jugador1') {
                jugador1.puntuacion=0;
                
                alert("Los puntos se han eliminado para el usuario: " + miSeleccion + " actualmente tiene: " + jugador1.puntuacion + " puntos.");
            }else {
                jugador2.puntuacion=0;
      
                alert("Los puntos se han eliminado para el usuario: " + miSeleccion + " actualmente tiene: " + jugador2.puntuacion + " puntos.");
            }
                
           
           
           }		
        }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    