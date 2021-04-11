function loadScript(src, callback) {
          let script = document.createElement('script');
          script.src = src;
          script.onload = () => callback(null, script);
          script.onerror = () => callback(new Error(`Script load error for ${src}`));
          document.head.append(script);
          }
          
        const promise = new Promise ((resolve, reject) =>{
            
            let script = document.createElement('script');
            script.src = src;
            if (script.onload) {
              resolve('Todo correcto');
            } else {
              reject('Ha ocurrido un error en la carga del script');			}
        });
        
        promise
          .then(res =>{
            
            console.log ("Acción terminada sin problemas");
            
          })
          .catch(error =>{
            
            console.log ("Carga del script errónea: " + error);
            
          });