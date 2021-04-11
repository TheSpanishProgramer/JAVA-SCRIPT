// creamos la clase padre Persona

class Persona {
    
    constructor (id, nombre, apellidos, edad){
        
       this.id = id;
       this.nombre = nombre; 
       this.apellidos = apellidos;
       this.edad = edad;
        
    }

}

//Creamos las clases hijas que heredan de la clase Persona

class Futbolista extends Persona {
    
    constructor(id, nombre, apellidos, edad, dorsal, demarcacion){
        
        super(id, nombre, apellidos, edad)
        
        this.dorsal = dorsal;
        this.demarcacion = demarcacion;
        
    }
    
}

class Entrenador extends Persona {
    
    constructor(id, nombre, apellidos, edad, idFederacion){
        
        super(id, nombre, apellidos, edad)
        
        this.idFederacion = idFederacion;
        
    }
    
}

class Masajista extends Persona {
    
    constructor(id, nombre, apellidos, edad, titulacion, aniosExperiencia){
        
        super(id, nombre, apellidos, edad)
        
        this.titulacion = titulacion;
        this.aniosExperiencia = aniosExperiencia;
        
    }
    
}

//Creamos los objetos futbolista, entrenador y masajista

var futbolista = new Futbolista(01, "paco", "pepe", 22, 2, "delantero");
var entrenador = new Entrenador(02, "manuel", "calzon", 33, 12343234);
var masajista = new Masajista(03, "hernan", "cortes", 1100, "graduado", 200);

// Creamos metodos para mostrar los datos de los objetos

Futbolista.prototype.mostrarFutbolista = function() {
    
      document.write ('Id del jugador: ' +
      this.id +
      ' ' +'/ Nombre y apellido: ' +
        this.nombre +
        ' ' +
        this.apellidos +
        '. / edad: ' +
        this.edad +
        '. / Dorsal: ' +
        this.dorsal +
        '. / Demarcacion en el campo: ' +
        this.demarcacion + "<br><br>");
        
};

futbolista.mostrarFutbolista ();//Mostramos los atributos del objeto futbolista

Entrenador.prototype.mostrarEntrenador = function() {
    
      document.write ('Id de entrenador: ' +
        this.id +
        ' ' +'/ Nombre y apellido: ' +
          this.nombre +
          ' ' +
          this.apellidos +
          '. / edad: ' +
          this.edad +
          '. / Identificacion de la federacion: ' +
         
          this.idFederacion +"<br><br>");
        
};

entrenador.mostrarEntrenador ();//Mostramos los atributos del objeto entrenador

Masajista.prototype.mostrarMasajista = function() {
    
      document.write ('Id del jugador: ' +
      this.id +
      ' ' +'/ Nombre y apellido: ' +
        this.nombre +
        ' ' +
        this.apellidos +
        '. / edad: ' +
        this.edad +
        '. / Titulacion: ' +
        this.titulacion +
        '. / Años de experiencia: ' +
        this.aniosExperiencia + "<br><br>");
        
};

masajista.mostrarMasajista ();//Mostramos los atributos del objeto masajista

//Metodos de las clases Persona, Futbolista, Entrenador y Masajista

Persona.prototype.concentrarse = function () {
    document.write("Toca concentrarse, " + this.nombre+ "<br><br>");
    
}
Persona.prototype.viajar = function () {
    document.write("Toca viajar " + this.nombre + "<br><br>");
   
}
Futbolista.prototype.jugarPartido = function () {
    document.write("A jugar " + this.nombre+ "<br><br>");
}
Futbolista.prototype.entrenar = function () {
    document.write("A entrenar " + this.nombre+ "<br><br>");
}

Entrenador.prototype.dirigirPartido = function () {
    document.write("A dirigir partido " + this.nombre+ "<br><br>");
}

Entrenador.prototype.dirigirEntrenamiento = function () {
    document.write("A dirigir entrenamiento " + this.nombre+ "<br><br>");
}

Masajista.prototype.darMasaje = function () {
    document.write("A masajear " + this.nombre+ "<br><br>");
}

//Llamada a los metodos que antes hemos implementado

document.write("<br><br>Verificamos el funcionamiento de los metodos que ejecutan nuestros distintos objetos: <br><br>");
document.write("<br><br>Metodos de la clase Persona: <br><br>");

futbolista.concentrarse ();
entrenador.concentrarse ();
masajista.concentrarse ();
futbolista.viajar ();
entrenador.viajar ();
masajista.viajar ();

document.write("<br><br>Metodos de la clase Futbolista: <br><br>");

futbolista.jugarPartido ();
futbolista.entrenar ();

document.write("<br><br>Metodos de la clase Entrenador: <br><br>");

entrenador.dirigirPartido ();
entrenador.dirigirEntrenamiento ();

document.write("<br><br>Metodos de la clase Masajista: <br><br>");

masajista.darMasaje ();
