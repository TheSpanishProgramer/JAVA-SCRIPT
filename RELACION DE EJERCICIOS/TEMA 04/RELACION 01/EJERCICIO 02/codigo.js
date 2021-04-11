//Constructor 

function Jugador() {
   
  }

function Jugador(nombre, apellido, empleo, nivel, puntuacion) {
    
    // Los atributos por defecto se crean publicos mediante el this.
    //Si queremos que sean privados tenemos que crearlos como variable
    
    this.nombre = nombre;// atributo publico
    var apellido = apellido;//atributo privado accesible mediante metodo
    var empleo = empleo;
    var nivel = nivel;
    this.puntuacion = puntuacion;
    
    //Metodos creados para acceder a los atributos privados
    
    this.getapellido = function() {return apellido;}
    this.getempleo = function() {return empleo;}
    this.getnivel = function() {return nivel;}
    
  }
    
   
    //Objetos de la clase Jugador
    
    var jugador1 = new Jugador('jugador 1', 'el primero', 'cuelga botas ', 44, 10000000);
    var jugador2 = new Jugador('jugador 2', 'el segundo', 'cierra bares', 66, 2000000);
    
 
    // Creamos una funcion para mostrar los datos de los objetos creados de la clase Jugador
    
    Jugador.prototype.mostrarJugador = function() {
        
          document.write ('Nombre y apellido: ' +
            this.nombre +
            ' ' +
            this.getapellido () + //accedemso al atributo mediante el metodo anteriormente creado
            '. / Trabajo: ' +
            this.getempleo ()+//accedemso al atributo mediante el metodo anteriormente creado
            '. / Nivel: ' +
            this.getnivel ()+//accedemso al atributo mediante el metodo anteriormente creado
            '. / Puntuación: ' +
            this.puntuacion + "<br><br>");
            
    };
    
    
    // Llamadas al método mostrarJugador para mostrar los atributos de los objetos creados.
    
    jugador1.mostrarJugador(); // muestra: Nombre y apellido: jugador 1 el primero. / Trabajo: cuelga botas . / Nivel: 44. / Puntuación: 10000000
    jugador2.mostrarJugador(); // muestra: Nombre y apellido: jugador 2 el segundo. / Trabajo: cierra bares. / Nivel: 66. / Puntuación: 2000000
    
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