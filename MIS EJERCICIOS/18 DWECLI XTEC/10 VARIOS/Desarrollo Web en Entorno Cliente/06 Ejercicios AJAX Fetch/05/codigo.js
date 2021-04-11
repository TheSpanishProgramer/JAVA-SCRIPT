// Polítoca CORS: desconocida
// Tipo URL: https
// Info errores: no
// Es una api libre y simple. https://breakingbadapi.com/documentation

const peticion = fetch('https://breakingbadapi.com/api/characters?category=Better+Call+Saul');
const app = document.getElementById('app');
const personajes = document.createElement('div');
personajes.setAttribute('class', 'personajes');
app.appendChild(personajes);

peticion
  .then(data => data.json())
  .then(data => {
    data.forEach((personaje) => {
      const personajedetalles = document.createElement('div');
      personajedetalles.setAttribute('class', 'personajedetalles');

      const foto = document.createElement('img');
      const nombre = document.createElement('h2');
      const profesion = document.createElement('p');
      const interprete = document.createElement('p');

      foto.setAttribute('src', `${personaje.img}`);
      foto.setAttribute('height', '300px');
      nombre.textContent = `${personaje.name}`;
      profesion.textContent = `Profesión: ${personaje.occupation}`;
      interprete.textContent = `Interpretado por: ${personaje.portrayed}`;

      personajes.appendChild(personajedetalles);
      personajedetalles.appendChild(nombre);
      personajedetalles.appendChild(foto);
      personajedetalles.appendChild(profesion);
      personajedetalles.appendChild(interprete);
    });
  })
  .catch((err) => {
    console.error(err);
  });