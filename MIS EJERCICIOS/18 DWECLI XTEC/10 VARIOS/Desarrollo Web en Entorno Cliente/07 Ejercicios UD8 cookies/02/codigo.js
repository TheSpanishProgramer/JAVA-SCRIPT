        window.onload = iniciar;
        let numReintentos = 0;
        const CLAVE = "NREINTENTOS";

        function iniciar(){
            let enviarBtn = document.getElementById("enviar");
            enviarBtn.addEventListener("click", enviar);
            
            let limpiarBtn = document.getElementById("limpiar").addEventListener("click", function() {
                reiniciarNumReintentos();
                document.getElementById("numeroReintentos").textContent = 0;
            });
        }

        function enviar(){
            if(document.getElementById("item").value == ""){
                alert("Campo vacio");
                actualizarNumReintentos();
                document.getElementById("enviar").textContent = window.localStorage.getItem(CLAVE);
            }
        }

        function actualizarNumReintentos(){
            let temp = window.localStorage.getItem(CLAVE);
            if(temp == "")
                temp = 0;
            temp += 1;
            window.localStorage.setItem(CLAVE, temp);
        }

        function reiniciarNumReintentos(){
            window.localStorage.getItem(CLAVE, 0);
        }
    