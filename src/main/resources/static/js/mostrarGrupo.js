$(document).ready(function(){
    mostrarGrupo();
});
//----------------------------------------------------------------
//Muestra el grupo al que pertenece el usuario de la sesión actual
async function mostrarGrupo(){
    //----------------------------------
    //obtenemos el id del usuario actual
    let idSesion = localStorage.id;
    //------------------------
    //buscamos cual usuario es
    const requestUsu = await fetch('api/usuario/'+idSesion, {
        method : 'GET', 
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        }
    });
    const usu = await requestUsu.json();
    //-------------------------------
    //buscamos a cual grupo pertenece
    const requestGru = await fetch('api/grupo/'+ usu.gru_num, {
        method: 'GET', 
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        }
    });
    const grupo = await requestGru.json();
    //------------------------------------------------------------
    //Obtenemos el nombre del grupo y lo inyectamos al código html
    let encabezadoGrupo = '<i class="bi bi-people-fill"></i>' + grupo.gru_nombre;
    document.querySelector('#cardTitulo').innerHTML = encabezadoGrupo;
    //----------------------------
    //Obtenemos todos los usuarios
    const request = await fetch('api/usuario', {
        method: 'GET', 
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        }
    });
    const usuarios = await request.json();
    //-------------------------------------------------------
    //Colocamos todos los usuarios en el cuerpo de la tarjeta
    for(usuario of usuarios){
        if(usuario.gru_num == grupo.gru_num){
            let cuerpo =
                '<li class="list-group-item bg-glass">'+ usuario.usu_nombre + ' ' + usuario.usu_apellido +'</li>';
            document.querySelector('#cardCuerpo').innerHTML += cuerpo;
        }
    }
}
