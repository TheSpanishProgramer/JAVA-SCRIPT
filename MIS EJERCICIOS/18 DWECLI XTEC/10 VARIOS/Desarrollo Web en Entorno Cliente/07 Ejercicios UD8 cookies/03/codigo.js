        window.onload = iniciar;

        let campoTxt, lista, limpiarBtn;
        let tareasAnteriores= "";
        const CLAVE = "tareas";

        function iniciar(){
            campoTxt = document.getElementById("item");
            // campoTxt.addEventListener("keyup", function(event){
            //     event.preventDefault();
            //     if(event.key === "Enter"){
            //          event.preventDefault();
            //          anadirNuevaTarea();
            //     }
            // });
            lista = document.getElementById("lista");
            
            limpiarBtn = document.getElementById("cleanAll");
            limpiarBtn.addEventListener("click", limpiarTodo);

            document.getElementsByTagName("form")[0].addEventListener("keydown", function(event){
                if(event.key === "Enter"){
                    event.preventDefault();
                    anadirNuevaTarea();
                }
            });

            cargarTareasAnteriores();
        }

        function cargarTareasAnteriores(){
            tareasAnteriores = localStorage.getItem(CLAVE);
            if(tareasAnteriores != null && tareasAnteriores != ""){
                let listaTareas = tareasAnteriores.split(";");
                for(let i=0; i<listaTareas.length; i++){
                    if(listaTareas[i]!=""){
                        let li = document.createElement("li");
                        li.appendChild(document.createTextNode(listaTareas[i]));
                        lista.appendChild(li);
                    }
                }
            }
        }

        function anadirNuevaTarea(){
            let nuevaTarea = campoTxt.value;
            if(nuevaTarea != ""){
                //la pintamos
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(nuevaTarea));
                lista.appendChild(li);

                //la guardamos
                tareasAnteriores = localStorage.getItem(CLAVE);

                if(tareasAnteriores == null){
                    tareasAnteriores = "";
                }
                tareasAnteriores += nuevaTarea+";";
                
                localStorage.setItem(CLAVE, tareasAnteriores);
            }
        }

        function limpiarTodo(){
            lista.innerHTML = "";
            localStorage.removeItem(CLAVE);
        }