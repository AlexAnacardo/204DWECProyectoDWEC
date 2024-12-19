document.addEventListener('DOMContentLoaded', () => {
    // Elemento cruz roja que será arrastrado
    const cruzRoja = document.getElementById('imagen');

    // Contenedores secundarios donde se puede soltar
    const contenedoresSecundarios = document.querySelectorAll('.contenedor');

    // Permitir el arrastre sobre los contenedores secundarios
    contenedoresSecundarios.forEach(contenedor => {
        contenedor.addEventListener('dragover', allowDrop);
        contenedor.addEventListener('dragleave', dragLeave);
        contenedor.addEventListener('drop', drop);
    });

    // Permitir el inicio del arrastre de la cruz roja
    cruzRoja.addEventListener('dragstart', drag);
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

// Iniciar el arrastre del elemento (la cruz roja)
function drag(event) {
    // Establecer los datos del arrastre, como el id del elemento
    event.dataTransfer.setData("cruz", event.target.id);
}

// Manejar el soltar el elemento dentro de un contenedor secundario
function drop(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado
    // Obtener el id del elemento arrastrado
    const data = event.dataTransfer.getData("cruz");
    const cruzRoja = document.getElementById("imagen");
    // Verificar que el contenedor es uno secundario
    if (event.target.classList.contains('contenedor')) {        
        // Colocar la cruz roja dentro del contenedor
        event.target.appendChild(cruzRoja);

        // Eliminar la clase 'dragover' y restaurar el color
        event.target.classList.remove('dragover');
    }
}
