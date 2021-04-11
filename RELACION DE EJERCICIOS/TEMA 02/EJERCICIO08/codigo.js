var arr = [];
for (var i = 0, t = 10; i < t; i++) {
    arr.push(Math.round(Math.random() * t))
}
document.write('Vector sin ordenar: <br>' + arr + '<p>');
document.write('Vector ordenado: <br>' + arr.sort() + '<p>');
document.write('Ordenado de forma inversa: <br>' + arr.reverse());