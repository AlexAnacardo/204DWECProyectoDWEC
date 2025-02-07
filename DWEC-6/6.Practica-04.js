async function extraerJson(){
    const json = await fetch('6.Practica-04.Ejemplo.txt');
    cadenaJson= await json.text();    
    return new Promise((resolve, reject) =>{
        try{            
            JsonParseado=JSON.parse(cadenaJson);
            resolve(JsonParseado);
        }catch(error){
            reject(new Error("La liaste socio"));            
        }
    });
}

async function cargarJson(){
    try{ 
        const JsonParseado = await extraerJson();           
        var arrayDni=document.getElementsByClassName("dni");            
        var contador= 0;        
        JsonParseado.forEach((objeto) =>{
            arrayDni[contador].innerHTML=(objeto["numero"]);
            contador++;
        });
    }
    catch(error){
        alert(error.message);
    }        
}

cargarJson();