var arr = [];

var repeticiones = 0;
var jugarArray =0;
var contSum =0;

var valor=1;

function sp (arr) {
	valor= arr.length + 1;
	arr.push(valor);
	return arr;

}

function rp (arr) {
	let arr2 = arr.pop();
	return arr;

}

function sumarPosicion (arr) {
	
	console.log (arr);
}
	while (jugarArray<4) {
		while (repeticiones<4) {
			console.log ("Array ["+ sp(arr)+"]");
			repeticiones++;
	
		}
		
		while (repeticiones>=0) {
			console.log ("Array ["+ rp(arr)+"]");
			repeticiones--;
	
		}
		jugarArray++;
	}
	
	