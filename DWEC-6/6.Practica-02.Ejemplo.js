export function miTemporizador(tiempo){
    // let tiempo=document.getElementById("pantalla2").value;
    let promesa=new Promise((resolver,rechazar)=>{
        //Código de la función RESOLVER de la promesa
        let temporizador=setTimeout(()=>{
            clearTimeout(temporizador2);
            resolver("Your time is out");
        },tiempo);
        // Código de la función RECHAZAR de la promesa, que en este caso no se llega a ejecutar nunca si ponemos tiempo*2 o cualquier nº superior, porque al empezar en la parte RESOLVER con un clearTimeOut, se resuelve primero la parte de la función RESOLVER frente a la RECHAZAR
        let temporizador2=setTimeout(()=>{
            rechazar("Something was wrong!!!");
        },tiempo*2);
        // Se puede probar a poner tiempo/2 por ejemplo para ver que se resuelve primero la parte de la función RECHZAR y nos devuelve el mensaje correspondiente
        // let temporizador2=setTimeout(()=>{
        //     rechazar("Something was wrong!!!");
        // },tiempo/2);
    });
    return promesa;//devuelvo la promesa creada con los dos métodos RESOLVER y RECHAZAR
};
export async function cuentaAtras(tiempoInicio, elemento, escalaTiempo){
    try{
        for(let i=tiempoInicio;i>=0;i--){
            await miTemporizador(escalaTiempo);
            elemento.innerHTML=i;
        }
        miTemporizador(escalaTiempo).then((texto)=>{ //En la parte then se recoge el resultado de ejecución de la promesa si este ha sido satisfactorio (el correspondiente a la ejecución de la función RESOLVER de dentro de la promesa)
            pantalla.innerHTML=texto;
        }).catch((mensaje)=>{ //En la parte catch se recoge el resultado de ejecución de la promesa si este ha NO sido satisfactorio (el correspondiente a la ejecución de la función RECHAZAR de dentro de la promesa)
            pantalla.innerHTML=mensaje;
        });
    }
    catch(error){
        console.log("Se ha producido un error"+error)
    }
}