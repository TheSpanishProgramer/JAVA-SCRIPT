console.log('Hemos conectado!!!!!!');

/*

    El objetivo de esta actividad es descubrir fuentes de datos abiertas (Open APIs) que pueden ser utilizadas
    para aplicaciones web. Buscar en internet una fuente de datos abiertas.
    
    Añade en comentarios del código lo siguiente:
    
    - Qué política CORS o JSONP han adoptado y qué medidas ha adoptado usted para saltar esas
    restricciones .
    
                No se requiere autenticación para acceder a esta API y todos los recursos están completamente abiertos y disponibles. Desde el cambio al alojamiento estático en noviembre de 2018, la limitación de tasas se ha eliminado por completo, pero aún le recomendamos que limite la frecuencia de solicitudes para limitar nuestros costos de alojamiento.
                
                    Request
                    :method: GET
                    :scheme: https
                    :authority: pokeapi.co
                    :path: /api/v2/pokemon/1/
                    Accept: * / *
                    Origin: http://localhost:60774
                    Accept-Encoding: gzip, deflate, br
                    Host: pokeapi.co
                    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko)
                    Accept-Language: es-es
                    Referer: http://localhost:60774/
                    Connection: keep-alive
                
                    Content-Type: application/json; charset=utf-8
                    Access-Control-Allow-Origin: *
    
    - Especifique el tipo de url y parámetros que debe usar para traer datos y si es posible seleccionar el
    tipo de formato de datos de la petición (json o xml). También si hay información sobre los posibles
    códigos de error que haya encontrado.
                
                Utilizamos dos url ya que en una primera llamada en la que nos permite seleccionar x numero de Pokemon en nuestro caso 150, para ello utilizaremos como parámetro el parámetro limit y así recuperaremos los primeros 150 Pokemon la url https://pokeapi.co/api/v2/pokemon?limit=151, en esta llamada nos devuelve un nombre del Pokemon y una url la cual nos muestra los datos del Pokemon por ejemplo  https://pokeapi.co/api/v2/pokemon/1/ dando los datos del Pokemon. 
                
                Los datos nos lo devuelve en un json.
    
    
    - Haga la llamada al servidor haciendo uso del método Fetch

*/

document.addEventListener("DOMContentLoaded", () =>{

    let generarBoton = document.querySelector('#generarPokemon');
    generarBoton.addEventListener('click', mostrarTodoPokemon)

    botonEliminar().addEventListener('click', ocultarTodoPokemon);
})

function mostrarTodoPokemon(){
    let contenedorTPokemon = document.querySelector('#contenedorPokemon')
    contenedorTPokemon.innerText = "";
    buscarPokemon();

    botonEliminar().style.display = 'block'
}

function botonEliminar(){
    return document.querySelector('#botonEliminar')
}


function buscarPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')//llamada utilizando el método Fetch
    .then(response => response.json())
    .then(function(todosPokemon){
        todosPokemon.results.forEach(function(pokemon){
            obtenerDatosPokemon(pokemon);
        })
    })
}

function obtenerDatosPokemon(pokemon){
    let url = pokemon.url // <--- Esto nos guarda la url del Pokemon en una variable para poder buscar posteriormente sus datos 
                                //Ejemplo: https://pokeapi.co/api/v2/pokemon/1/"
    fetch(url)
    .then(response => response.json())
    .then(function(pokemonDatos){
        mostrarPokemon(pokemonDatos)
    })
}


function mostrarPokemon(pokemonDatos){
    let contenedorTPokemon = document.getElementById('contenedorPokemon');
    let pokemonContenedor = document.createElement("div") //div lo utilizaremos para guardará los detalles de los Pokemon de forma individual.
    pokemonContenedor.classList.add('ui', 'card');

    crearImagenPokemon(pokemonDatos.id, pokemonContenedor);

    let nombrePok = document.createElement('h4') 
    nombrePok.innerText = pokemonDatos.name

    let numeroPok = document.createElement('p')
    numeroPok.innerText = `#${pokemonDatos.id}`
   
    let tiposPok = document.createElement('ul') // ul Esta lista contendrá los tipos de Pokemon
  

    createTypes(pokemonDatos.types, tiposPok) // Función para recorrer el array de tipos de Pokemon y crear las etiquetas li para cada uno de ellos.

    pokemonContenedor.append(nombrePok, numeroPok, tiposPok);   //Agregando todos los detalles al  pokemonContenedor 
    contenedorTPokemon.appendChild(pokemonContenedor);       
}

function createTypes(types, ul){
    types.forEach(function(type){
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

function crearImagenPokemon(pokeID, containerDiv){
    let contenedorImagenPokemon = document.createElement('div')
    contenedorImagenPokemon.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`

    contenedorImagenPokemon.append(pokeImage);
    containerDiv.append(contenedorImagenPokemon);
}

function ocultarTodoPokemon(event){
    event.target.style = 'none';
    let contenedorTPokemon = document.querySelector('#contenedorPokemon')
    contenedorTPokemon.innerText = ""

    let generarBoton = document.createElement('button')
    generarBoton.innerText = "generarPokemon"
    generarBoton.id = 'generarPokemon'
    generarBoton.classList.add('ui', 'secondary', 'button')
    generarBoton.addEventListener('click', mostrarTodoPokemon);

    contenedorTPokemon.append(generarBoton)
}