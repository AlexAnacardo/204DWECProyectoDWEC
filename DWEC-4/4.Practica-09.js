function cambioDiv1(){    
    div=document.getElementsByTagName("div")[0];
    
    div.setAttribute("style", "background-color: purple; width: 700px");
}

function cambioP1(){
    p=document.getElementsByTagName("p")[0];

    p.setAttribute("style", "color: lime");
}

function cambioDiv2(){    
    div=document.getElementsByTagName("div")[1];    
    div.className="div2Alt";    
}

function cambioP2(){
    p=document.getElementsByTagName("p")[1];
    p.className="parrafo2"
}

function cambioDiv3(){    
    let cabeza= document.getElementsByTagName("head")[0];
    let elemento=document.createElement("link");

    elemento.setAttribute("rel", "stylesheet");
    elemento.setAttribute("href", "div.css");
    elemento.setAttribute("type", "text/css");
    cabeza.appendChild(elemento);
}

function cambioP3(){
    let cabeza= document.getElementsByTagName("head")[0];
    let elemento=document.createElement("link");

    elemento.setAttribute("rel", "stylesheet");
    elemento.setAttribute("href", "p.css");
    elemento.setAttribute("type", "text/css");
    cabeza.appendChild(elemento);
}