function delay(ms) {
            return new Promise( function(resolve, reject) {
                setTimeout(() => resolve("Hemos terminado bien"), ms );
            });
        }
        delay(3000).then(() => alert('runs after 3 seconds'));
