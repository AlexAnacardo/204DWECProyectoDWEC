function recogerImagen() {    
    fetch('https://picsum.photos/400/600').then(response => {
        return response.blob();
    }).then(blob => {
            salida = URL.createObjectURL(blob);
            cuerpo = document.getElementsByTagName("body")[0];
            imagen = document.createElement("img");
            imagen.setAttribute("src", salida);
            cuerpo.appendChild(imagen);
        })
        .catch(error => {
            alert("Error al cargar la imagen");            
        });
}


