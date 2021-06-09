function cargarA3() {
    var correo = document.getElementById("email").value;
    document.cookie = "email="+correo+";";
}
function nombre() {
    var nombre = prompt("Dime tu nombre");
    createCookie("Usuario",nombre,1);
}
function borrarnombre() {
    document.cookie = "Usuario=;  expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

function impares(){
    var impares = [];
    for (let i = 0; i < 100; i++) {
        if(i%2!=0){
            impares.push(i);
            
        }
    }
    window.alert(impares);
}

function ocultar() {
    document.getElementById("romeo").style.visibility = "hidden";
}
function mostrar() {
    document.getElementById("romeo").style.visibility = "visible";
}


function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*30*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}
