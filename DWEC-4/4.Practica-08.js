function crearForm(){

    //ventana= open("", "");

    form= document.createElement("form");
    
    titulo= document.createElement("h3");
    titulo.textContent="Contacto";

    nombre= document.createElement("input");
    nombre.setAttribute("type", "text");
    nombre.setAttribute("placeholder", "Nombre");

    apellidos= document.createElement("input");
    apellidos.setAttribute("type", "text");
    apellidos.setAttribute("placeholder", "Apellidos");

    email= document.createElement("input");
    email.setAttribute("type", "text");
    email.setAttribute("placeholder", "Email");

    asunto= document.createElement("input");
    asunto.setAttribute("type", "text");
    asunto.setAttribute("placeholder", "Asunto");

    mensaje= document.createElement("textarea");    
    mensaje.setAttribute("placeholder", "Asunto");

    boton= document.createElement("input");
    boton.setAttribute("id", "boton");
    boton.setAttribute("type", "submit");
    boton.setAttribute("value", "Enviar");
    boton.setAttribute("onclick", "alert ('Mensaje enviado correctamente')");
    
    
    form.appendChild(titulo);
    form.appendChild(nombre);
    form.appendChild(apellidos);
    form.appendChild(email);
    form.appendChild(asunto);
    form.appendChild(mensaje);
    form.appendChild(boton);

    document.body.appendChild(form);

    //ventana.document.body.appendChild(form);
}