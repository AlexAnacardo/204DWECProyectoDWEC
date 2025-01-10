function temporizador(ms1, ms2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tiempoInicio = Date.now();
            console.log("Primer temporizador iniciado");

            setTimeout(() => {
                const tiempoFinal = Date.now();
                const tiempoTranscurrido = tiempoFinal - tiempoInicio;

                if (tiempoTranscurrido <= 2 * ms1) {
                    resolve("Your time is out");
                } else {
                    reject("Something was wrong!!!");
                }
            }, ms2);
        }, ms1);
    });
}

function realizarFuncion(){
    ms1=document.getElementById("ms1").value;
    ms2=document.getElementById("ms2").value;
    temporizador(ms1, ms2)
    .then(message => console.log(message))
    .catch(error => console.error(error));
}

