window.addEventListener("load", start);
function start() {
	for (var i = 0; i < document.getElementsByTagName("h2").length; i++) {
		document.getElementsByTagName("h2")[i].addEventListener("click", mostrarClick);
	}
}
function mostrarClick(seleccionado) {
	var text = "";
	var h2 = seleccionado.target;
	
	text += "Has elegido " + h2.textContent;
	var padre = h2.parentElement;
	text += " que está situada en el " + padre.id + "<br/>";
	var ul = h2.nextElementSibling;
	text += "El número de provincias es " + ul.children.length + ": ";
	var hijo = ul.firstChild;
	while (hijo != null) {
		text += " " + hijo.textContent;
		hijo = hijo.nextElementSibling;
	}
	document.getElementById("texto").innerHTML = text;
}