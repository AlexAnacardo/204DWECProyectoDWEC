//Parrafo 1
document.getElementById("p1").addEventListener("click", function(){alert("Soy el P1")});
document.getElementById("p2").addEventListener("click", recorrerP2);
document.getElementById("div1").addEventListener("click", function(){alert("Soy el Div 1")});
document.getElementById("div2").addEventListener("click", function(){alert("Soy el Div 2")});

function recorrerP2(){        
    alert("Soy el P2");
    event.stopPropagation();
}

//Parrafo 2
/*
document.getElementById("p11").addEventListener("click", recorrerP11, true);
document.getElementById("p22").addEventListener("click", recorrerP22, true);
document.getElementById("div11").addEventListener("click", recorrerDiv11, true);
document.getElementById("div22").addEventListener("click", recorrerDiv22, true);

function recorrerP11(){

}
*/
//Parrafo 3
document.getElementById("p111").addEventListener("click", recorrerP111);

document.getElementById("p222").addEventListener("click", recorrerP222);
document.getElementById("div111").addEventListener("click", recorrerDiv111);
document.getElementById("div222").addEventListener("click", recorrerDiv222);
function recorrerP111(){
    alert("Soy el P1");
    document.getElementById("p111").removeEventListener("click", recorrerP111);
}

function recorrerP222(){
    alert("Soy el P2");
    document.getElementById("p222").removeEventListener("click", recorrerP222);
}

function recorrerDiv111(){
    alert("Soy el Div1");
    document.getElementById("div111").removeEventListener("click", recorrerDiv111);
}

function recorrerDiv222(){
    alert("Soy el Div2");
    document.getElementById("div222").removeEventListener("click", recorrerDiv222);
}


//Boton 4

document.getElementById("botonActivar").addEventListener("click", activarBotones);

document.getElementById("botonDesactivar").addEventListener("click", desactivarBotones);

function activarBotones(){
    document.getElementById("boton1").addEventListener("click", soyBoton1);
    document.getElementById("boton2").addEventListener("click", soyBoton2);
    document.getElementById("boton3").addEventListener("click", soyBoton3);
}

function desactivarBotones(){
    document.getElementById("boton1").removeEventListener("click", soyBoton1);
    document.getElementById("boton2").removeEventListener("click", soyBoton2);
    document.getElementById("boton3").removeEventListener("click", soyBoton3);
}

function soyBoton1(){
    alert("Soy el boton 1");
}

function soyBoton2(){
    alert("Soy el boton 2");
}

function soyBoton3(){
    alert("Soy el boton 3");
}