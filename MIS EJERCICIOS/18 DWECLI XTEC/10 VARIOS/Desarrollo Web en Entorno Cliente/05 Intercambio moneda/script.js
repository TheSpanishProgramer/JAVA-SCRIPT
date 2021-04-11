const monedaUno = document.querySelector('#currency-one');
const monedaDos = document.querySelector('#currency-two');
const cantidadUno = document.querySelector('#amount-one');
const cantidadDos = document.querySelector('#amount-two');
const cambio = document.querySelector('#swap');
const precio = document.querySelector('#rate');

monedaUno.addEventListener('change', operacionCambio);
monedaDos.addEventListener('change', operacionCambio);
cantidadUno.addEventListener('input', operacionCambio);
cantidadDos.addEventListener('input', operacionCambio);

cambio.addEventListener('click', ()=>{
    const temp = monedaUno.value;
    monedaUno.value = monedaDos.value;
    monedaDos.value= temp;
    operacionCambio();
});

function operacionCambio(){
    const monedaUno1 = monedaUno.value;
    const monedaDos1 = monedaDos.value;

    fetch(`https://v6.exchangerate-api.com/v6/0f5fc2de0079819b0405ac65/latest/${monedaUno1}`)
    .then(res => res.json())
    .then(res => {
        const nuevoPrecio = res.conversion_rates[monedaDos1];
        rate.innerText = `1 ${monedaUno1} = ${nuevoPrecio} ${monedaDos1}`
        cantidadDos.value = (cantidadUno.value * nuevoPrecio).toFixed(2);
    })
}

operacionCambio();