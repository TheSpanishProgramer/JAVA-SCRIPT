var contenido = document.querySelector('#contenido')
function obtener() {
    fetch('datos.json')
        .then(res => res.json())
        .then(datos => {
            tabla(datos)
        })
}
function tabla(datos) {
    contenido.innerHTML = ''
    for(let valor of datos){
        contenido.innerHTML += `
        <tr>
            <td>${valor.nombre}</td>
            <td>${valor.edad}</td>
            <td>${valor.ciudad}</td>
        </tr>
        `
    }
}
obtener()