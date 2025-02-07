botonJson=document.getElementById("json");
botonTexto=document.getElementById("texto");

botonJson.addEventListener("click", introducirJson);
botonTexto.addEventListener("click", introducirTexto);


async function recogerJson(){
    const url = 'https://serphouse.p.rapidapi.com/serp/schedule';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': 'a5f6d99699msh45512d9ab6728f1p1bf168jsnffd792b54be2',
            'x-rapidapi-host': 'serphouse.p.rapidapi.com',
            'Content-Type': 'application/json'
        },        
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}

async function recogerTexto() {
    const url = 'https://serphouse.p.rapidapi.com/serp/schedule';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': 'a5f6d99699msh45512d9ab6728f1p1bf168jsnffd792b54be2',
            'x-rapidapi-host': 'serphouse.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return result;
    } catch (error) {
        console.error(error);
        return `Error: ${error.message}`;
    }
}


function introducirTexto(){
    salidaTexto=document.createElement("p");
    recogerTexto().then(texto => salidaTexto.innerText=texto);

    document.body.appendChild(salidaTexto);
}

function introducirJson() {
    recogerJson().then(objJson => { 
        stat=document.createElement("p");
        message=document.createElement("p");
        err=document.createElement("p");
        
        stat.innerText="Status: "+objJson.status;
        message.innerText="Msg: "+objJson.msg;
        err.innerText="Error: "+objJson.error;
        
        document.body.appendChild(stat);
        document.body.appendChild(message);
        document.body.appendChild(err);

    }).catch(error => {
        console.error("Error al introducir JSON:", error);
    });
}

