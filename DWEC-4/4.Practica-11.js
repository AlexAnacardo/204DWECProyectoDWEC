if(document.title==="Padre"){
    var ventana=window.open("4.Practica-11.Hija.html", "width=100px", "height=200px");
}

if (document.title === "Hija") {
    window.addEventListener("message", function(event) {
        alert("Me llama mi padre");         
    });
}

function llamadaAVentanaHijo(){    
    ventana.postMessage("llamar", "*");
}

function centrarFocoHijo(){
    ventana.focus();
}

function rellenarFormulario(){
    let arrayCosas=["Alex", "Asensio Sanchez", "Calle tal", "Email tal", "467-134-un do tre", "Hola"];
    for(valor in arrayCosas){
        window.opener.document.forms[0].elements[valor].value=arrayCosas[valor];
    }    
}