var ventana;
function abrir(){
    ventana=window.open("4.Practica-09.Ejemplo.html", "width=900px", "height=900px");    
}

function listar(){    
    arrayDivs=ventana.document.getElementsByTagName("div");
    for(valor in arrayDivs){
        alert("Clase div "+valor+": "+arrayDivs[valor].getAttribute("class"));
    }
}            

function cerrar(){
    window.close(ventana);
}