
radioIncidencia=document.getElementsByTagName("input")[0];
radioIncidencia.addEventListener("click", mostrar);
radioPasswd=document.getElementsByTagName("input")[1];
radioPasswd.addEventListener("click", mostrar);


function mostrar(){
    if(radioIncidencia.checked){
        eliminarFormularioContraseña();
        mostrarFormularioIncidencia();
    }
    
    if(radioPasswd.checked){
        eliminarFormularioIncidencia();
        mostrarFormularioContraseña();
    }
}

function mostrarFormularioIncidencia(){
    if(document.getElementsByTagName("form")[0]==null){
        contenedor=document.getElementById("contenedor");        

        formulario=document.createElement("form");
        formulario.setAttribute("method", "post");

        section1=document.createElement("section");
        section2=document.createElement("section");
        section3=document.createElement("section");
        section4=document.createElement("section");
        section5=document.createElement("section");
        section6=document.createElement("section");
        section7=document.createElement("section");

        labelIncidencia=document.createElement("label");
        labelIncidencia.setAttribute("for", "areaIncidencia");
        
        selectIncidencia=document.createElement("select");
        selectIncidencia.setAttribute("id", "areaIncidencia");
        selectIncidencia.setAttribute("name", "areaIncidencia");

        opcion1=document.createElement("option");
        opcion1.setAttribute("value", "area1");

        opcion2=document.createElement("option");
        opcion2.setAttribute("value", "area2");

        selectIncidencia.appendChild(opcion1);
        selectIncidencia.appendChild(opcion2);

        labelNombre=document.createElement("label");
        labelNombre.setAttribute("for", "nombre");
        labelNombre.setAttribute("value", "a");
        inputNombre=document.createElement("input");
        inputNombre.setAttribute("type", "text");
        inputNombre.setAttribute("id", "nombre");
        inputNombre.setAttribute("name", "nombre");

        labelApellido=document.createElement("label");
        labelApellido.setAttribute("for", "apellido");
        inputApellido=document.createElement("input");
        inputApellido.setAttribute("type", "text");
        inputApellido.setAttribute("id", "apellido");
        inputApellido.setAttribute("name", "apellido");

        labelDireccion=document.createElement("label");
        labelDireccion.setAttribute("for", "direccion");
        inputDireccion=document.createElement("input");
        inputDireccion.setAttribute("type", "text");
        inputDireccion.setAttribute("id", "direccion");
        inputDireccion.setAttribute("name", "direccion");

        labelTelefono=document.createElement("label");
        labelTelefono.setAttribute("for", "telefono");
        inputTelefono=document.createElement("input");
        inputTelefono.setAttribute("type", "text");
        inputTelefono.setAttribute("id", "telefono");
        inputTelefono.setAttribute("name", "telefono");

        labelTxtarea=document.createElement("label");
        labelTxtarea.setAttribute("for", "txtarea");
        inputTxtarea=document.createElement("textarea");    
        inputTxtarea.setAttribute("id", "txtarea");
        inputTxtarea.setAttribute("name", "txtarea");

        botonEnviar=document.createElement("button");
        botonEnviar.setAttribute("type", "button");
        
        botonResetear=document.createElement("button");    
        botonResetear.setAttribute("type", "button");
        
        contenedor.appendChild(formulario);
        
        formulario.appendChild(section1);

        formulario.appendChild(section2);

        formulario.appendChild(section3);

        formulario.appendChild(section4);

        formulario.appendChild(section5);

        formulario.appendChild(section6);
        
        formulario.appendChild(section7);

        section1.appendChild(labelIncidencia);
        section1.appendChild(selectIncidencia);

        section2.appendChild(labelNombre);
        section2.appendChild(inputNombre);

        section3.appendChild(labelApellido);
        section3.appendChild(inputApellido);

        section4.appendChild(labelDireccion);
        section4.appendChild(inputDireccion);

        section5.appendChild(labelTelefono);
        section5.appendChild(inputTelefono);

        section6.appendChild(labelTxtarea);
        section6.appendChild(inputTxtarea);

        section7.appendChild(botonEnviar);
        section7.appendChild(botonResetear);

        opcion1.innerText="Opcion 1";
        opcion2.innerText="Opcion 2";
        labelIncidencia.innerText="Area de incidencia";
        labelNombre.innerText="Nombre: ";
        labelApellido.innerText="Apellido: ";
        labelDireccion.innerText="Direccion: ";
        labelTelefono.innerText="Telefono: ";
        labelTxtarea.innerText="Descripcion: ";
        botonEnviar.innerText="Enviar formulario";
        botonResetear.innerText="Resetear formulario";
        
        botonEnviar.addEventListener("click", enviar);
        botonResetear.addEventListener("click", resetearCampos);
    }
}

function mostrarFormularioContraseña(){
    if(document.getElementsByTagName("form")[0]==null){
        contenedor=document.getElementById("contenedor");     
        formulario=document.createElement("form");
        parrafo=document.createElement("p");
        lista=document.createElement("ul");
        section1=document.createElement("section");
        section2=document.createElement("section");
        section3=document.createElement("section");
        section4=document.createElement("section");

        elemento1=document.createElement("li");
        elemento2=document.createElement("li");
        elemento3=document.createElement("li");
        elemento4=document.createElement("li");
        elemento5=document.createElement("li");

        labelPassword=document.createElement("label");
        password=document.createElement("input");
        password.setAttribute("id","contraseña");

        labelPasswordNuevo=document.createElement("label");
        passwordNuevo=document.createElement("input");
        passwordNuevo.setAttribute("id","contraseñaNueva");

        labelPasswordConfirm=document.createElement("label");
        passwordConfirm=document.createElement("input");
        passwordConfirm.setAttribute("id","contraseñaConfirm");

        botonConfirmar=document.createElement("button");
        botonConfirmar.setAttribute("type", "button");
        
        botonResetear=document.createElement("button");    
        botonResetear.setAttribute("type", "button");

        contenedor.appendChild(formulario);

        formulario.appendChild(parrafo);
        formulario.appendChild(lista);
        lista.appendChild(elemento1);
        lista.appendChild(elemento2);
        lista.appendChild(elemento3);
        lista.appendChild(elemento4);
        lista.appendChild(elemento5);

        section1.appendChild(labelPassword);
        section1.appendChild(password);
        section2.appendChild(labelPasswordNuevo);
        section2.appendChild(passwordNuevo);
        section3.appendChild(labelPasswordConfirm);
        section3.appendChild(passwordConfirm);
        section4.appendChild(botonConfirmar);
        section4.appendChild(botonResetear);

        formulario.appendChild(section1);
        formulario.appendChild(section2);
        formulario.appendChild(section3);
        formulario.appendChild(section4);

        parrafo.innerText="El password debe tener las siguientes caracteristicas";
        elemento1.innerText="Al menos un numero 0-9";
        elemento2.innerText="Al menos una letra minuscula a-z";
        elemento3.innerText="Al menos una letra mayuscula A-Z";
        elemento4.innerText="Al menos un caracter especial !@#\$%\^&\*";
        elemento5.innerText="Al menos 8 caracteres y menos de 16 caracteres";

        labelPassword.innerText="Introduzca el password antiguo";
        labelPasswordNuevo.innerText="Introduzca el password nuevo";
        labelPasswordConfirm.innerText="Repita el password nuevo";

        botonConfirmar.innerText="Enviar formulario";
        botonResetear.innerText="Resetear formulario";

        botonConfirmar.addEventListener("click", confirmarPasswd);
        botonResetear.addEventListener("click", resetearCamposPasswd);
    }
}

function enviar(){
    let arrayNombres=["Nombre", "Apellido", "Direccion", "Telefono", "Textarea"];    
    let arrayInputs=[inputNombre, inputApellido, inputDireccion, inputTelefono, inputTxtarea];
    let arrayVacios=[];
    for(valor in arrayInputs){
        if(arrayInputs[valor].value==""){
            arrayInputs[valor].style.border="1px solid red";
            arrayVacios.push(arrayNombres[valor]);            
        }else{
            arrayInputs[valor].style.border="1px solid #ccc";
        }
    }
    alert("Valores vacios "+arrayVacios);
}

function confirmarPasswd(){
    regexPassword=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$/;
    contraseñaNueva=document.getElementById("contraseñaNueva").value;
    contraseñaConfirm=document.getElementById("contraseñaConfirm").value;
    if(contraseñaNueva===contraseñaConfirm && regexPassword.test(contraseñaNueva)){
        alert("Password cambiado");
    }
    else{
        alert("Password no valido");
    }
}

function resetearCampos(){    
    let arrayInputs=[inputNombre, inputApellido, inputDireccion, inputTelefono, inputTxtarea];

    for(valor in arrayInputs){
        arrayInputs[valor].value="";
        arrayInputs[valor].style.border="1px solid #ccc";
    }
}

function resetearCamposPasswd(){    
    let arrayInputs=[password, passwordNuevo, passwordConfirm];

    for(valor in arrayInputs){
        arrayInputs[valor].value="";
        arrayInputs[valor].style.border="1px solid #ccc";
    }
}

function eliminarFormularioIncidencia(){
    if(typeof formulario!='undefined'){
        formulario.remove();
    }    
}

function eliminarFormularioContraseña(){
    if(typeof formulario!='undefined'){
        formulario.remove();
    }    
}