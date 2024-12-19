var arrayBotones=document.getElementsByClassName("boton");

inicializarBotones();

validar=document.getElementById("validar");
reiniciarB=document.getElementById("reiniciar");

validar.addEventListener("click", validarPass);
reiniciar.addEventListener("click", reiniciarPass);

function inicializarBotones(){    
    arrayNumeros=[0,1,2,3,4,5,6,7,8,9];
    shuffleArray(arrayNumeros);
    for(valor in arrayBotones){
        arrayBotones[valor].innerText=arrayNumeros[valor];
    }

    shuffleArray(arrayNumeros);
    claveValida=document.getElementById("claveGenerada");
    for(i=0; i<6; i++){
        claveValida.innerText=claveValida.innerText+arrayNumeros[i];
    }

    for(i=0; i<10; i++){
        arrayBotones[i].addEventListener("click", botonPulsado);
    }
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}

function botonPulsado(numeroPulsado){
    campoContraseña=document.getElementById("contraseña");

    if(campoContraseña.value.length<6){
        campoContraseña.value=campoContraseña.value+event.target.innerText;
    }        
}

function validarPass(){
    salida=document.getElementById("salida");
    claveValida=document.getElementById("claveGenerada");
    clave=document.getElementById("contraseña");

    if(claveValida.innerText===clave.value){
        salida.innerText="Clave valida";
        salida.style.color= "green";
    }
    else{
        salida.innerText="Clave no valida";
        salida.style.color= "red";
    }
}

function reiniciarPass(){
    campoContraseña=document.getElementById("contraseña");
    campoContraseña.value="";
    claveValida=document.getElementById("claveGenerada");
    claveValida.innerText="";
    inicializarBotones();
}