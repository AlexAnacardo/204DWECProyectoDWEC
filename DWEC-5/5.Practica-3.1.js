var audio=document.getElementsByTagName("audio")[0];
var texto=document.getElementById("texto");

document.getElementById("atras").addEventListener("click", atras);
document.getElementById("play").addEventListener("click", play);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("adelante").addEventListener("click", adelante);

function atras(){
    audio.currentTime = 0;
    texto.innerText="Reproduciendo";
}

function play(){
    audio.play();
    texto.innerText="Reproduciendo";
}

function pause(){
    audio.pause();
    texto.innerText="Pausado";
}

function stop(){
    audio.pause();
    audio.currentTime = 0;
    texto.innerText="";
}

function adelante(){
    audio.currentTime=213;
    texto.innerText="Reproduciendo";
}