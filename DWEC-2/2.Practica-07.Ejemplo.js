function adivinaFecha(){
    var fecha=prompt("Introduce tu cumpleaños");
    var guess=prompt("Adivina el cumpleaños");
    try{
        switch (guess){
            case fecha:
                alert("Acertaste!!");
            break;

            default:
                throw ("Cagadon historico");            
        }
    } catch(error){
        console.log(error);
    }
}

adivinaFecha();