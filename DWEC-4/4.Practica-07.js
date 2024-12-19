function cambiarTag(tipo){
    switch(tipo){
        case 'textContent':
            cadena = document.getElementsByTagName("input")[0];
            document.getElementsByTagName("p")[3].textContent=cadena.value; 
        break;

        case 'innerHTML':
            cadena = document.getElementsByTagName("input")[1];
            document.getElementsByTagName("p")[3].innerHTML=cadena.value; 
        break;

        case 'innerText':
            cadena = document.getElementsByTagName("input")[2];
            document.getElementsByTagName("p")[3].innerText=cadena.value; 
        break;
    }
}

function cambiarId(tipo){
    var cadena;
    switch(tipo){
        case 'textContent':
            cadena=document.getElementById("idTC").value;                    
            document.getElementById("cambiar").textContent=cadena;
        break;

        case 'innerHTML':
            cadena=document.getElementById("idTC").value;                    
            document.getElementById("cambiar").innerHTML=cadena;
        break;

        case 'innerText':
            cadena=document.getElementById("idInnerText").value;                    
            document.getElementById("cambiar").innerText=cadena;
        break;
    }
}