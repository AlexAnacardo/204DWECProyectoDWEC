document.getElementById("anchoExterior").innerHTML = screen.width;
        document.getElementById("altoExterior").innerHTML = screen.height;
        document.getElementById("anchoInterior").innerHTML = screen.availWidth;
        document.getElementById("altoInterior").innerHTML = screen.availHeight;
        document.getElementById("color").innerHTML = screen.colorDepth;
        document.getElementById("pixel").innerHTML = screen.pixelDepth;    
        document.getElementById("orientacion").innerHTML=screen.orientation.type;