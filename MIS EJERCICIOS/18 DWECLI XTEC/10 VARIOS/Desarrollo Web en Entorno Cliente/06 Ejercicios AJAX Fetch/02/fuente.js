function descarga() {
    if (window.XMLHttpRequest) {
        requestDeHTTP = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        requestDeHTTP = new ActiveXObject("Microsoft.XMLHTTP");
    }

    requestDeHTTP.onreadystatechange = mostrar();
    requestDeHTTP.open('GET', 'fichero.html', true);
    requestDeHTTP.send(null);

    function mostrar() {
        if (requestDeHTTP.readyState == 4) {
            if (requestDeHTTP.status == 200) {
                document.write(requestDeHTTP.responseText);
            }
        }
    }
}
window.onload = descarga;