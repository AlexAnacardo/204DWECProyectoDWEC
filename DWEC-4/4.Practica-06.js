function recorrer1(){
    var z = document.getElementsByTagName("p")[0];            
    alert(
        "Tipo: "+document.getElementById("p1").nodeType+"\n"+
        "Nombre: "+document.getElementById("p1").nodeName+"\n"+
        "Valor: "+ z.childNodes[0].nodeValue
    );
}

function recorrer2(){
    var p=document.getElementsByTagName('p');            
    for(i=0; i<p.length; i++){
        alert(                
            "Tipo: "+p[i].nodeType+"\n"+
            "Nombre: "+p[i].nodeName+"\n"+
            "Valor: "+ p[i].childNodes[0].nodeValue                   
        );
    }                                        
}