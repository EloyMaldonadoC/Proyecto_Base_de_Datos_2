$(document).ready(function(){

});
//--------------------------------------------
//Busca un usuario a partir de una cadena dada
async function buscarUsuario(){
    //redirecciona
    window.location.href = 'Busqueda.html'
    let cade = document.getElementById('buscar').value;
    localStorage.busqueda = cade;

}