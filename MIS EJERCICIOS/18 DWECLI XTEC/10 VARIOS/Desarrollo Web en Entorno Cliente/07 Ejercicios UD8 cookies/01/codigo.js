window.onload = iniciar;
         let nombre, valor, dias, setBtn, getBtn, remBtn, cookies;
 
         function iniciar() {
             nombre = document.getElementById("nombre");
             valor = document.getElementById("valor");
             dias = document.getElementById("dias");
 
             setBtn = document.getElementById("setCookieBtn");
             setBtn.addEventListener("click", setCookies);
             getBtn = document.getElementById("getCookieBtn");
             getBtn.addEventListener("click", getCookies);
             remBtn = document.getElementById("remobeCookieBtn");
             remBtn.addEventListener("click", removeCookies);
             cookies = document.getElementById("cookies");
             publicar();
           
         }
 
         function setCookies() {
             setCookie(nombre.value, valor.value, dias.value); 
         }

         function setCookie(nombre, valor, dias) {
             let fecha = new Date();
             fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
             let expires = "expires=" + fecha.toUTCString();
             document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
             publicar();
         }
 
         function getCookies() {
             getCookie(nombre.value);
         }
 
         function getCookie(nombrecito) {
             let nombre = nombrecito + "=";
             let cookieDeCodificada = decodeURIComponent(document.cookie);
             let ca = cookieDeCodificada.split(';');

             for (let i = 0; i < ca.length; i++) {
                 let c = ca[i];
                 while (c.charAt(0) == ' ') {
                     c = c.substring(1);
                 }
                 if (c.indexOf(nombre) == 0) {
                     valor.value = c.substring(nombre.length, c.length);
                     return true;
                 }
             }
             valor.value = "Cookie No Encontrada";
             return false;
             publicar(); 
         }

         function removeCookies() {
             removeCookie(nombre.value);
         }
 
         function removeCookie(nombre) {
             document.cookie = nombre + "=;  expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/animales;"
             publicar();
         }
 
         function publicar() {
             cookies.value = document.cookie;
         }