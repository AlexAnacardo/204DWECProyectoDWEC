var ventana;

        function abrirNueva(){
            url=prompt("Introduzca la url a visitar");
            ancho=prompt("Introduzca el ancho de la pagina en pixeles");
            alto=prompt("Introduzca el alto de la pagina en pixeles");
            ventana=window.open(url, "miventana", "resizable=true, width="+ancho+"px, height="+alto+"px");
        }

        function cerrarVentana(){
            ventana.close();
        }

        function alturaExterior(){            
            nuevo=prompt("Introduzca la nueva altura exterior");            
            ventana.resizeTo(ventana.outerWidth, nuevo);
        }

        function anchuraExterior(){            
            nuevo=prompt("Introduzca la nueva anchura exterior");            
            ventana.resizeTo(nuevo, ventana.outerHeight);
        }

        function alturaInterior(){            
            nuevo=prompt("Introduzca la nueva altura interior");            
            ventana.resizeTo(ventana.innerWidth, nuevo);
        }

        function anchuraInterior(){            
            nuevo=prompt("Introduzca la nueva anchura interior");            
            ventana.resizeTo(nuevo, ventana.innerWidth);
        }