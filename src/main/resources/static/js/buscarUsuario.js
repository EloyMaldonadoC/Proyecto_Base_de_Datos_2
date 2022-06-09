$(document).ready(function(){

});
//--------------------------------------------
//Busca un usuario a partir de una cadena dada
async function buscarUsuario(){
    let result = document.getElementById('buscar').value;

    const requestUsu = await fetch('api/usuario/buscar/'+result, {
        method: 'GET', 
        headers: {
            'Accept': 'application/json', 
            'Contest-Type': 'application/json'
        }
    });
    const usuarios = await requestUsu.json();

    for(usuario of usuarios){
        let encontrado = 
        '<div class="card bg-glass mx-auto m-fluid m-4">'+
                    '<div class="card-body">'+
                        '<!--Encabezado-->'+
                        '<div class="row">'+
                            '<div class="col-3 col-lg-3 col-xl-2">'+
                                '<img src="img/perfil.png" class="rounded d-block mx-auto" style="width: 60px; height: 60px;" alt="perfil">'+
                            '</div>'+
                            '<div class="col-7 col-lg-8 col-xl-9">'+
                               '<h6 class="card-title">'+ usuario.usu_nombre+ ' '+ usuario.usu_apellido +'</h6>'+
                            '</div>'+
                            '<div class="col-2 col-lg-1 col-xl-1">'+
                            '</div>'+
                        '</div>'+
                   '</div>'+
                '</div>';
        document.querySelector('#vista').innerHTML += encontrado;
    }
    window.location.href = 'Busqueda.html';
}