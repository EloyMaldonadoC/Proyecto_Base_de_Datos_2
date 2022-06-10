$(document).ready(function(){

});
//--------------------------------------------
//Busca un usuario a partir de una cadena dada
async function buscarUsuario(){
    let cade = document.getElementById('buscar').value;
    localStorage.busqueda = cade;
    //redirecciona
    window.location.href = 'Busqueda.html';
}