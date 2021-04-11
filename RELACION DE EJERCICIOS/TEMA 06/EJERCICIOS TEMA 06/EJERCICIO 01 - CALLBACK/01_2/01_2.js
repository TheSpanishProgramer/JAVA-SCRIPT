function llamadaServidor(numSegundos, callback) {
    setTimeout(() => {
        console.log(`Llamada al servidor de ${numSegundos} ms`);
        if (numSegundos > 3900) {
            callback(null, true);
        }else{
            callback(numSegundos, null);
        }

    }, numSegundos);
}

llamadaServidor(2000, (ms1, err1) => {
    if(err1){
        console.log(`Estamos en error 1: ${err1}`);
    }else{
        console.log(`La primera llamada ha tardado ${ms1} ms.`);
        llamadaServidor(3000, (ms2, err2) => {
            if(err2){
                console.log(`Estamos en error 2: ${err2}`);
            }else{
                console.log(`La segunda llamada ha tardado ${ms2} ms.`);
                llamadaServidor(4000, (ms3, err3) => {
                    if(err3){
                        console.log(`Estamos en error 3: ${err3}`);
                    }else{
                        console.log(`La tercera llamada ha tardado ${ms3} ms.`);
						console.log(`Hemos terminado. Todo perfecto`);
                    }
                })
            }
        })
    }
})
