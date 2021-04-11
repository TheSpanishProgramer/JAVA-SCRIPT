const miMoneda = document.querySelector('#input_currency');
const moneda_A_Cambiar = document.querySelector('#output_currency');
const cantidad_MiMoneda = document.querySelector('#input_amount');
const Cantidad_Moneda_A_Cambiar = document.querySelector('#output_amount');
const exchange = document.querySelector('#exchange');
const rate = document.querySelector('#rate');



exchange.addEventListener('click', ()=>{
	const temp = miMoneda.value;
	miMoneda.value = moneda_A_Cambiar.value;
	moneda_A_Cambiar.value= temp;
	cambioMoneda();
});

miMoneda.addEventListener('change', cambioMoneda);
moneda_A_Cambiar.addEventListener('change', cambioMoneda);
cantidad_MiMoneda.addEventListener('input', cambioMoneda);
Cantidad_Moneda_A_Cambiar.addEventListener('input', cambioMoneda);

function cambioMoneda(){
	const input_currency1 = miMoneda.value;
	const output_currency1 = moneda_A_Cambiar.value;
	console.log (input_currency1);
	console.log (output_currency1);
	

	fetch(`https://v6.exchangerate-api.com/v6/808109c3dc3874e94e49aa44/pair/${input_currency1}/${output_currency1}`)
	.then(respuesta => respuesta.json())
	.then(respuesta => {
		
		//console.log(respuesta);
		//console.log(respuesta.conversion_rate);
		
		const new_rate = respuesta.conversion_rate;
		rate.innerText = `1 ${input_currency1} = ${new_rate} ${output_currency1}`
		Cantidad_Moneda_A_Cambiar.value = (cantidad_MiMoneda.value * new_rate).toFixed(2);
	})
}

cambioMoneda();

