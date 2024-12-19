function funcionPlugins(){
    for(valor in navigator.plugins){
        console.log(valor+" tiene el valor: "+navigator.plugins[valor].name);
    }
}

function funcionCookies(){
    console.log(navigator.cookieEnabled);
}

function funcionLenguaje(){
    console.log(navigator.language);
}

function funcionOnline(){
    console.log(navigator.onLine);
}

function funcionVersion(){
    console.log(navigator.appVersion);
}