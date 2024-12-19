function buscar(){
    let text = "Si vas a Mi Casa, avísame para estar!"; 
    let n = text.search("mi casa");
    document.getElementById("demo").innerHTML = n;
}
buscar();