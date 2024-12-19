var evento=document.getElementById("divGeneral").addEventListener("click", mensajeDiv);

function mensajeDiv(){
    eventoDisparado=new Event("click");
    let div5= document.getElementById("div5");
    alert("Soy el div con id "+event.target.id+" y con texto "+event.target.textContent);
    
    div5.dispatchEvent(eventoDisparado);
}


//document.getElementById("div5").addEventListener("click", ()=>alert("Div 5: me han disparado desde el "+event.target.id));

document.getElementById("div5").addEventListener("click", );


function disparo(id){
    alert("Div 5: me han disparado desde el "+id);
}