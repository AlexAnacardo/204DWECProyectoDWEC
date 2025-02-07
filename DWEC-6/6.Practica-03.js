export function fetchJson() {
    return fetch('https://randomuser.me/api/?results=3')
        .then(response => response.json())
        .then(json => {
            const salida = JSON.stringify(json);
            return salida; 
        })
        .catch(error => {
            alert("Error: " + error.message); 
            
        });
}


export function fetchTexto() {
    return fetch('https://randomuser.me/api/?results=3')
        .then(response => {
            return response.text();
        })   
        .catch(error => {
            alert("Error: " + error.message);
            
        });
}

export function insertarHtml() {

    const body=document.getElementById("cuerpo");

    const header = document.createElement("header");
    header.innerText='CABECERA Consulta a API con fetch';
    
    const footer = document.createElement("footer");
    footer.innerText= "PIE Consulta a API con fetch";
            
    body.insertBefore(header, document.getElementById("salidaJson"));
    body.appendChild(footer);
}