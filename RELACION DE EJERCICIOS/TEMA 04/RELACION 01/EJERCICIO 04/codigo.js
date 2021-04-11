
//Declaracion de la clase Vehiculo

class Vehiculo {
    
    constructor(numRUedas, color, nombre, velocidadMax) {//Constructor de clase
    this.numRUedas = numRUedas;
    this.color = color;
    this.nombre = nombre;
    this.velocidadMax = velocidadMax;
    }
    
    static mayorNumRuedas (vehiculo1, vehiculo2) {//Metodo estatico que nos devuelve el vehiculo con mas numero de ruedas
        
        if (vehiculo1.numRUedas< vehiculo2.numRUedas) {
            
            document.write ('El vehiculo ' +
                vehiculo2.nombre +
                "es el vehiculo con mas ruedas de los dos <br><br>");
            
        } else {
            
            document.write ('El vehiculo ' +
            vehiculo1.nombre +
            "es el vehiculo con mas ruedas de los dos <br><br>");
            
        }
        
    }
    
    mostrarVehiculo () {//Metodo que nos muestra los atributos de nuestros objetos
        
          document.write ('Numero de ruedas del coche: ' +
          this.numRUedas +
          ' ' +'/ Color del coche: ' +
            this.color +
            '. / Modelo del coche: ' +
            this.nombre +
            '. / Velocidad maxima del coche: ' +
            this.velocidadMax + "<br><br>");
            
    }
}

let vehiculo1 = new Vehiculo (4, "azul", "suzuki gran vitara", 44);
let vehiculo2 = new Vehiculo (6, "azul", "suzuki gran vitara mas ruedas", 44);



class Automovil extends Vehiculo{
    constructor(numRUedas, color, nombre, velocidadMax, numPasTotal, numPasajerosActual) {
        
        super (numRUedas, color, nombre, velocidadMax)
        
        this.numPasajerosTotal = numPasajerosTotal;
        this.numPasajerosActual = numPasajerosActual;
    }
    
    mostrarAutomovil () {//Metodo que nos muestra los atributos de nuestros objetos
        
          document.write ('El automovil tiene una capacidad de pasajeros total de: ' +
          this.numPasajerosTotal +
          ' ' +'/ Actualmente los pasajeros que van en el automovil es de: ' +
            this.numPasajerosActual +
            "<br><br>");
            
    }
}

class Suv extends Vehiculo{
    constructor(numRUedas, color, nombre, velocidadMax, tieneReductora, tiene4x4) {
        
        super (numRUedas, color, nombre, velocidadMax)
        
        this.tieneReductora = tieneReductora;
        this.tiene4x4 = tiene4x4;
    }
    
    circularXNieve (tieneReductora) { //Metodo que nos dice si puede o no circular por nieve
        
        if (tieneReductora == true) {
            document.write("<br><br>El Suv " + this.nombre + " puede circular por nieve. <br><br>");
        } else {
            document.write("<br><br>El Suv " + this.nombre + " no puede circular por nieve. <br><br>");
        }
    }
    
    circularXTierra (tiene4x4) { //Metodo que nos dice si puede o no circular por tierra
        
        if (tiene4x4 == true) {
            document.write("<br><br>El Suv: " + this.nombre + " puede circular por tierra. <br><br>");
        } else {
            document.write("<br><br>El Suv " + this.nombre + " no puede circular por tierra. <br><br>");
        }
    }
    
}

//Declaramos los suv

let suv1 = new Suv (4, "azul", "suzuki gran vitara", 44, true, true);
let suv2 = new Suv (4, "azul", "Nissan Patrol", 44, true, false);
let suv3 = new Suv (4, "azul", "suzuki  vitara", 44, false, true);
let suv4 = new Suv (4, "azul", "suzuki sihn nahh", 44, false, false);

document.write("<br><br>Llamamos al metodo para que nos diga cual de los dos vehiculos tiene mas ruedas: <br><br>");
vehiculo1.mostrarVehiculo();
vehiculo2.mostrarVehiculo();
Vehiculo.mayorNumRuedas(vehiculo1, vehiculo2);

document.write("<br><br>Llamamos al metodo para que nos diga cual de los dos Suv puede circular por nieve o tierra: <br><br>");
suv1.circularXNieve(suv1.tiene4x4);
suv1.circularXTierra(suv1.tieneReductora);
suv2.circularXNieve(suv2.tiene4x4);
suv2.circularXTierra(suv2.tieneReductora);
suv3.circularXNieve(suv3.tiene4x4);
suv3.circularXTierra(suv3.tieneReductora);
suv4.circularXNieve(suv4.tiene4x4);
suv4.circularXTierra(suv4.tieneReductora);

