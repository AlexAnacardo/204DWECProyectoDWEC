document.addEventListener('DOMContentLoaded', () => {
    // Elemento cruz roja que será arrastrado
    const cruzRoja = document.getElementById('imagen1');
    const circuloVerde = document.getElementById('imagen2');

    // Contenedores secundarios donde se puede soltar
    const contenedoresSecundarios = document.querySelectorAll('.contenedor');

    // Permitir el arrastre sobre los contenedores secundarios
    contenedoresSecundarios.forEach(contenedor => {
        contenedor.addEventListener('dragover', allowDrop);
        contenedor.addEventListener('dragleave', dragLeave);
        contenedor.addEventListener('drop', drop);
    });

    // Permitir el inicio del arrastre de los elementos
    cruzRoja.addEventListener('dragstart', drag);

    circuloVerde.addEventListener('dragstart', drag);
});

// Permite que el contenedor acepte el arrastre
function allowDrop(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado
    // Añadir clase para cambiar color al arrastrar sobre el contenedor
    event.target.classList.add('dragover');
}

// Eliminar la clase 'dragover' cuando el drag deje el contenedor
function dragLeave(event) {
    // Eliminar la clase 'dragover' cuando el elemento sale del contenedor
    event.target.classList.remove('dragover');
}

// Iniciar el arrastre del elemento
function drag(event) {
    // Establecer los datos del arrastre, como el id del elemento
    event.dataTransfer.setData("idImagen", event.target.id);
}

function drop(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado

    const data = event.dataTransfer.getData("idImagen");
    elementoArrastrado = document.getElementById(data);
    // Verificar que el contenedor es uno secundario
    if (event.target.classList.contains('contenedor')) {                
        event.target.appendChild(elementoArrastrado);        

        // Eliminar la clase 'dragover' y restaurar el color
        event.target.classList.remove('dragover');
    }
}