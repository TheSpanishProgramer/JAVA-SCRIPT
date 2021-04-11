let salarios = {
	Juan: 10000,
	Alicia: 16000,
	Lucas: 13000
}

const total = Object.values(salarios).reduce((t, n) => t + n)

document.write("La suma total de los salarios es: " + total);