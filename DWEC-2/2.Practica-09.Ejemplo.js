function practica9(){
    var jugar=true;
    var seguir="";
    while(jugar){
        //var numAleatorio= Math.floor(Math.random()*10+1);
        var numAleatorio= parseInt(Math.random()*10+1);
        var numero=prompt("Introduce un numero (1-10)");
        while(isNaN(numero) || numero>10 || numero<1){
            numero=prompt("Numero no valido, (1-10)");
        }

        if(numAleatorio==numero){ 
            alert("ACERTASTE!!");
            seguir=prompt("Quiere seguir jugando");
            if(seguir.toLowerCase==="no"){
                jugar=false;
                break;
            }
        }
        else{
            alert("No acertaste...");            
            seguir=prompt("Quiere seguir jugando");
            if(seguir.toLowerCase==="no"){
                jugar=false;
                break;
            }
        }
    }    
}
practica9();