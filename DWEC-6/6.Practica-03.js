
export async function fetchJson() {
    try {
        const contenidoFetch = await fetch('https://randomuser.me/api/?results=3');
        const cadena = await contenidoFetch.json();
        return JSON.stringify(cadena);
    } catch (err) {
        return "Se ha detectado un error: "+error.message;
    }
}

// Función para obtener datos directamente en texto
export async function fetchTexto() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=3');
        const data = await response.text();
        return data;
    } catch (error) {
        return "Se ha detectado un error: "+error.message;
    }
}

// Función para insertar HTML en la página
export function insertarHtml() {

    const body=document.getElementById("cuerpo");

    const header = document.createElement("header");
    header.innerText='CABECERA Consulta a API con fetch';
    
    const footer = document.createElement("footer");
    footer.innerText= "PIE Consulta a API con fetch";
            
    body.insertBefore(header, document.getElementById("salidaJson"));
    body.appendChild(footer);
}
