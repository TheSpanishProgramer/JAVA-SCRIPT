function llamadaServidor(numSegundos, callback) {
  setTimeout(() => {
    console.log(`Llamada al servidor de ${numSegundos} ms`);
    callback(numSegundos);
  }, numSegundos);
}


llamadaServidor(2000, (ms1) => {
  console.log(`La primera llamada ha tardado ${ms1} ms.`);
  llamadaServidor(3000, (ms2) => {
    console.log(`La segunda llamada ha tardado ${ms2} ms.`);
    llamadaServidor(4000, (ms3) => {
      console.log(`La tercera llamada ha tardado ${ms3} ms.`);
      console.log(`Hemos terminado. Todo perfecto`);
      });
    });
  });
