function seleccionFruta(fruta){
    switch(fruta.toLowerCase()){
        case "naranjas":
            alert("Compraste naranjas");
        break;

        case "uvas":
            alert("Compraste uvas");
        break;

        case "melocotones":
            alert("Compraste melocotones");
        break;
        
        default:
            alert("No compraste na");
        break;
    }
}