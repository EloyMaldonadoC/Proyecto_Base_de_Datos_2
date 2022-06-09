$(document).ready(function(){

});
//Cierra la sesion
function cerrarSesion(){
    if(!confirm("¿Desas cerrar la sesión?")){
        return;
    }

    localStorage.clear();
    location.reload();
}