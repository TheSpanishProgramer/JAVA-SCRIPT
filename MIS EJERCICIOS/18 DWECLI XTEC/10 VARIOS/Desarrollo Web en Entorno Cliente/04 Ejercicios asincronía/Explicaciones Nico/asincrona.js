function llamadaAsincrona(numSegundos, callback) {
    setTimeout(() => {
        console.log(`Llamada al servidor de ${numSegundos} ms`);
        if (numSegundos > 3900) {
            callback(null, true);
        }else{
            callback(numSegundos, null);
        }
        
    }, numSegundos);
}

llamadaAsincrona(2000, (ms1, err1) => {
    if(err1){
        console.log(`Estamos en error 1: ${err1}`);
    }else{
        console.log(`1º llamada ${ms1}`);
        llamadaAsincrona(3000, (ms2, err2) => {
            if(err2){
                console.log(`Estamos en error 2: ${err2}`);
            }else{
                console.log(`2º llamada ${ms2}`);
                llamadaAsincrona(4000, (ms3, err3) => {
                    if(err3){
                        console.log(`Estamos en error 3: ${err3}`);
                    }else{
                        console.log(`3º llamada ${ms3}`)
                    }
                })
            }
        })
    }
})

