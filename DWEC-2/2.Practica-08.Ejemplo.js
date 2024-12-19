function ejercicio8(){      
    var primo=true;
    const divisible = [];
    var contador=0;
    var numero=prompt("Introduce un numero (1-300)");
    while(isNaN(numero) || numero>300 || numero<1){
        numero=prompt("Numero no valido, (1-300)");
    }

    for(var i = 0; i<=numero; i++){
        if(numero%i===0 && i!=1 && i!=numero){
            primo=false;
            divisible[contador]=i;
            contador++;
        }
    }

    if(primo===true){
        alert("El numero es primo");
    }
    else{
        alert("El numero no es primo, es divisible por "+divisible);
    }
}
ejercicio8();