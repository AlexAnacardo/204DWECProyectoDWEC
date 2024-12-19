function miFuncionReemplazo() {
    //document.getElementById("demo").innerHTML.replace("Mi casa", "Tú casa");
    document.getElementById("demo").innerHTML =
    text.replace("Mi casa", "Tú casa");
}

function miFuncionReemplazo2() {
    let text = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML =
    text.replace(/mi casa/i, "tu casa");
    }