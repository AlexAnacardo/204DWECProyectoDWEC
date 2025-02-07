let urlPersonajes = 'https://swapi.dev/api/people/';
let urlPlanetas = 'https://swapi.dev/api/planets/';
let urlActual = '';
let siguienteUrl = '';
let anteriorUrl = '';

document.getElementById('mostrarPersonajes').addEventListener('click', () => {
    urlActual = urlPersonajes;
    obtenerDatos(urlActual, 'textAreaPersonajes');
});

document.getElementById('mostrarPlanetas').addEventListener('click', () => {
    urlActual = urlPlanetas;
    obtenerDatos(urlActual, 'textAreaPlanetas');
});

document.getElementById('mostrarPersonajesAnterior').addEventListener('click', () => {
    if (anteriorUrl) {
        obtenerDatos(anteriorUrl, 'textAreaPersonajes');
    }
});

document.getElementById('mostrarPersonajesSiguiente').addEventListener('click', () => {
    if (siguienteUrl) {
        obtenerDatos(siguienteUrl, 'textAreaPersonajes');
    }
});

document.getElementById('mostrarPlanetasAnterior').addEventListener('click', () => {
    if (anteriorUrl) {
        obtenerDatos(anteriorUrl, 'textAreaPlanetas');
    }
});

document.getElementById('mostrarPlanetasSiguiente').addEventListener('click', () => {
    if (siguienteUrl) {
        obtenerDatos(siguienteUrl, 'textAreaPlanetas');
    }
});

export function obtenerDatos(url, textAreaId) {
    fetch(url)
        .then(salidaJson => salidaJson.json())
        .then(objJson => {
            mostrarResultados(objJson, textAreaId);
            siguienteUrl = objJson.next;
            anteriorUrl = objJson.previous;
            
        })
        .catch(error => {            
            document.getElementById(textAreaId).innerText = 'Error al obtener los datos de la API';
        });
}

export function mostrarResultados(objJson, textAreaId) {
    const resultadosTextArea = document.getElementById(textAreaId);
    resultadosTextArea.value = '';

    if (objJson.results) {
        objJson.results.forEach(item => {
            resultadosTextArea.value += item.name +"\n";
        });
    } else {
        resultadosTextArea.value = 'No se encontraron resultados';
    }
}