document.getElementsByClassName("contenedor")[0].addEventListener("mousemove", seguirRaton);

window.addEventListener("keydown", cambioImg);

function seguirRaton(){
    document.getElementById("sigueRatonDiv").style.left= event.clientX+"px";
    document.getElementById("sigueRatonDiv").style.top= event.clientY+"px";     
}

function cambioImg(evento){
    if(evento.ctrlKey && evento.key==="y"){        
        x= Math.floor(Math.random() * 200);
        y= Math.floor(Math.random() * 200);

        document.getElementsByClassName("contenedor")[0].style.backgroundImage= 'url(https://picsum.photos/'+x+'/'+y;            
    }
    
}