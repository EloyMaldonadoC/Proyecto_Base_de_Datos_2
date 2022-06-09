$(document).ready(function(){
    buscaSesionPrincipal()
});
//busca la sesión activa
async function buscaSesionPrincipal(){
    //obtenermos los usuarios
    const requestUsu = await fetch('api/usuario',{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json'
        }
    });
    const usuarios = await requestUsu.json();

    let idSesion = localStorage.id;

    for(usuario of usuarios){
        if(usuario.usu_num == idSesion){
            document.querySelector('#sesion').innerHTML = '<a href="Perfil-Usuario.html"><h5 style="margin-top: 5px;">'+ usuario.usu_nombre +'</h5></a>';
            return;
        }
    }
    window.location.href = "Iniciar-Sesion.html"
}