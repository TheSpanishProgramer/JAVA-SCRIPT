let pilotos = [
  {
  id: 10,
  name: "Poe Dameron",
  years: 14,
  },
  {
  id: 2,
  name: "Temmin 'Snap' Wexley",
  years: 30,
  },
  {
  id: 41,
  name: "Tallissan Lintra",
  years: 16,
  },
  {
  id: 99,
  name: "Ello Asty",
  years: 22,
  }
  ];
  
var suma= 0;
//Recorriendo el objeto
for(let x in pilotos){
  suma += pilotos[x].years;//Ahora que es un objeto javascript, tiene propiedades
}

document.write('las edades suman: ' + suma);

var objetoSuma = {}

var operacion=0;
pilotos.forEach( x => {
  
  if( !objetoSuma.hasOwnProperty(x.yerars) ){ 
    objetoSuma[x.years] = 0
  } 
  
  operacion = Number(x.years) + operacion;
  

})
  
document.write('<br><br>4.2. Realice la misma operación del apartado anterior (1.1) pero haciendo uso del operador “arrow”:<br><br> Las edades suman: ' + operacion + '<br>');


var resultado = Math.max.apply(Math, pilotos.map(function(o) { return o.years; }))


document.write('<br><br>4.3 Ahora vamos a tratar de obtener el piloto que con más experiencia. (Esta hay que darle un par de vueltas):<br><br> Las experiencia maxima que tienen los pilotos es: ' + resultado + '<br>');


