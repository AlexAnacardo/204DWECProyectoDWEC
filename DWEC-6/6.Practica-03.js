
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
    const headerHtml = `
        <header style="background-color: #f8f9fa; padding: 10px; text-align: center;">
            <h1>Cabecera Consulta a API con fetch</h1>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHtml);
}
