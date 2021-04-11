const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'Debes introducir un nombre de usuario');
    } else if (usuarioValue.length < 3 || usuarioValue.length > 15) {
        setErrorFor(usuario, 'El nombre debe tener entre 3 y 15 letras');
    } else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
        setErrorFor(email, 'Debes introducir un mail válido');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No es un mail válido');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Debes introducir un password');
    } else if (passwordValue.length < 6 || passwordValue.length > 25) {
        setErrorFor(password, 'El password debe tener entre 6 y 25 caracteres');
    } else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Debes introducir un segundo password');
    } else if (password2Value.length < 6 || password2Value.length > 25) {
        setErrorFor(password2, 'El password debe tener entre 6 y 25 caracteres');
    }else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Los passwords no coinciden');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}