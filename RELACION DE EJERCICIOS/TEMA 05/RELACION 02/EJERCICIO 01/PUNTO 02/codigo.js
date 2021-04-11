window.addEventListener('load', init, false);
function init() {
	var div = document.querySelectorAll('p');
	console.log(div);
	div[0].style.visibility = 'visible';
	div[1].style.visibility = 'visible';
	div[2].style.visibility = 'visible';
	var boton = document.querySelectorAll('a');
	console.log(boton);
	boton[0].addEventListener('click', function (e) {
		if(div[0].style.visibility === 'visible'){
			div[0].style.visibility = 'hidden';
		}else{
			div[0].style.visibility = 'visible';
		}
	}, false);
	boton[1].addEventListener('click', function (e) {
		if(div[1].style.visibility === 'visible'){
			div[1].style.visibility = 'hidden';
		}else{
			div[1].style.visibility = 'visible';
		}
	}, false);
	boton[2].addEventListener('click', function (e) {
		if(div[2].style.visibility === 'visible'){
			div[2].style.visibility = 'hidden';
		}else{
			div[2].style.visibility = 'visible';
		}
	}, false);
}
