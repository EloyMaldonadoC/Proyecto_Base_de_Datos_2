$(document).ready(function(){

});
//--------------------------------------------
//Busca un usuario a partir de una cadena dada
async function buscarUsuario(){
    //redirecciona
    var url = "Busqueda.html";
    $(location).attr('href',url);
    let cade = document.getElementById('buscar').value;
    localStorage.busqueda = cade;
    alert(cade);
}