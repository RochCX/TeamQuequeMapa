let tarjeta = document.getElementById("AnimMov");
tarjeta.hidden=true;

function entrada(){
    var element = document.getElementById("AnimMov");
    tarjeta.hidden=false;
    element.classList.remove("slide-out-bck-center");
    element.classList.add("fade-in");
}
function salida(){
    var element = document.getElementById("AnimMov");
    element.classList.remove("fade-in");
    element.classList.add("slide-out-bck-center");
}