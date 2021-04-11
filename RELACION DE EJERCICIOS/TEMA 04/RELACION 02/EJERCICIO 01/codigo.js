// antes de la llamada
let menu = {
  width: 200,
  height: 300,
  title: "Mi menú"
};

function multiplicarNumeros (object) {
    Object.keys(object).map(key => {
      typeof object[key] === 'number' && (object[key] *= 2);
    });
};

multiplicarNumeros(menu);
console.log(menu);

// Después de la llamada
// menu = { width: 400,  height: 600,  title: "Mi menu" }