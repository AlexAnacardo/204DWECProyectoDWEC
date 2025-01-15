// Función exportable que realiza la cuenta atrás
export function cuentaAtras(numero) {
    return new Promise((resolve, reject) => {
        let contador = numero;
        const intervalo = setInterval(() => {
            console.log(contador);
            contador--;
            if (contador < 0) {
                clearInterval(intervalo);
                resolve("Your time is out");
            }
        }, 1000);

        // Si la ejecución falla después del doble de tiempo
        setTimeout(() => {
            clearInterval(intervalo);
            reject("Something was wrong!!!");
        }, numero * 2000);
    });
}

