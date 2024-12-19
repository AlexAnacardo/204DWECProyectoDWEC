function crearSemaforo(){
    titulo=document.createElement("h3");
    titulo.setAttribute("id", "titulo")

    semaforo=document.createElement("div");

    semaforo.setAttribute("class", "cuerpo colorNegro");

    var bombillaRoja=document.createElement("div");
    bombillaRoja.setAttribute("id", "rojo");
    bombillaRoja.setAttribute("class", "bombilla colorRojo");

    var bombillaAmarilla=document.createElement("div");
    bombillaAmarilla.setAttribute("id", "amarillo");
    bombillaAmarilla.setAttribute("class", "bombilla colorAmarillo");

    var bombillaVerde=document.createElement("div");
    bombillaVerde.setAttribute("id", "verde");
    bombillaVerde.setAttribute("class", "bombilla colorVerde");

    semaforo.appendChild(bombillaRoja);
    semaforo.appendChild(bombillaAmarilla);
    semaforo.appendChild(bombillaVerde);

    divSemaforo=document.getElementById("divSemaforo");

    divSemaforo.appendChild(titulo);
    document.getElementById("titulo").innerText="Mi semaforo";

    divSemaforo.appendChild(semaforo);
}
/*Abre la ventana*/
function abrirVentana(){
    var ventana= window.open("ventanaHija.html", "width=700px", "height=700px");
}
/*Cierra la ventana*/
function cerrarVentana(){
    window.close(ventana);
}

/**/
const objetoSemaforo={
    /*Cada funcion ilumina la bombilla correspondiente y apaga las demas*/

    cambiarVerde(){
        document.getElementById("rojo").style.backgroundColor = "#800000";
        document.getElementById("verde").style.backgroundColor = "#00FF00";                        
        document.getElementById("amarillo").style.backgroundColor = "#808000";        
            
    },

    cambiarAmarilla(){
        document.getElementById("amarillo").style.backgroundColor = "#FFFF00";
        document.getElementById("rojo").style.backgroundColor = "#800000";
        document.getElementById("verde").style.backgroundColor = "#008000";
    },

    cambiarRoja(){
        document.getElementById("verde").style.backgroundColor = "#008000";
        document.getElementById("amarillo").style.backgroundColor = "#808000";
        document.getElementById("rojo").style.backgroundColor = "#FF0000";
    }
}

/*Funcion que comprueba que la contraseña es valida*/
function comprobarPassword(){
    password=document.getElementById("contraseña").value;
    
    patronPassword=/^[0-9]{3,6}[@#~%&\/$][0-9]{3,6}$/;
    
    return patronPassword.test(password.toString());
}
/*Si al contraseña es valida, se llama al metodo correspondiente del objeto, si no, se muestra mensaje de error*/
function cambiarBombillaVerde(){    
    if(comprobarPassword()){        
        objetoSemaforo.cambiarVerde();
    }
    else{
        alert("Contraseña invalida")
    }
}
/*Si al contraseña es valida, se llama al metodo correspondiente del objeto, si no, se muestra mensaje de error*/
function cambiarBombillaRoja(){
    if(comprobarPassword()){        
        objetoSemaforo.cambiarRoja();
    }
    else{
        alert("Contraseña invalida")
    }
}
/*Si al contraseña es valida, se llama al metodo correspondiente del objeto, si no, se muestra mensaje de error*/
function cambiarBombillaAmarilla(){
    if(comprobarPassword()){        
        objetoSemaforo.cambiarAmarilla();
    }
    else{
        alert("Contraseña invalida")
    }
}

function cambiarSemaforoHija(){        
    textoColor=document.getElementById("textoHija").value;

    switch(textoColor){
        case "Verde":
            window.opener.cambiarBombillaVerde();
        break;

        case "Amarillo":
            window.opener.cambiarBombillaAmarilla();
        break;

        case "Rojo":
            window.opener.cambiarBombillaRoja();
        break;

        default:
            window.opener.alert("Color no admitido");
    }
}