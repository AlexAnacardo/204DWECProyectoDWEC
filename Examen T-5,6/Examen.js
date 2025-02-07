//Defino una variable que contiene la URL de la api
let urlPersonajes = 'https://swapi.dev/api/people/';
//Defino una variable que contendra la url de la pagina actual
let urlActual = '';
//Defino una variable que contendra la url de la pagina siguiente si existe
let siguienteUrl = null;
//Defino una variable que contendra la url de la pagina anterior si existe
let anteriorUrl = null;

export function devolverUrlPersonajes(){
    return urlPersonajes;
}

export function devolverUrlActual(){
    return urlActual;
}

export function devolverUrlSiguiente(){
    return siguienteUrl;
}

export function devolverUrlAnterior(){
    return anteriorUrl;
}


export function crearSelect(urlActual){ 
    var urlSiguiente=siguienteUrl;
    //Hago una llamada a la api
    fetch(urlActual)
        .then(salidaJson => salidaJson.json()) //convierto lo que la api me devuelve a un objeto json
        .then(objJson => {
            
            //Creo un elemento de tipo select y le asigno un id y un name
            var campoSelect=document.createElement("select");
            campoSelect.setAttribute("id", "selectPersonas");
            campoSelect.setAttribute("name", "selectPersonas");

            //Si el objeto json ha devuelto valores, entro en este if
            if(objJson.results){
                //Asigno a la variable "siguiente url" a el valor que la api me ha devuelto
                siguienteUrl = objJson.next;
                //Asigno a la variable "anterior url" a el valor que la api me ha devuelto
                anteriorUrl = objJson.previous; 

                //Recorro cada objeto creando un campo option por cada uno de ellos
                objJson.results.forEach(personaje => {
                    var opcion=document.createElement("option");
                    //Asigno el nombre del personaje como value y como texto del campo
                    opcion.setAttribute("value", personaje.name);
                    opcion.innerHTML=personaje.name;

                    /*
                    //Le asigno un event listener a cada opcion 
                    opcion.addEventListener("click", generarTabla);
                    */

                    //Añado la opcion al campo selects
                    campoSelect.appendChild(opcion);                    
                })
            }
            else{
                //Si se produce un error, se informa al usuario por pantalla
                alert("Se produjo un error");
            }
            //Obtengo el div donde estara el campo select
            var contenedorPersonajes=document.getElementById("contenedorSelectPersonajes");
            //Añado el campo select con todas sus opciones al div correspondiente
            contenedorPersonajes.appendChild(campoSelect);
        })
}

