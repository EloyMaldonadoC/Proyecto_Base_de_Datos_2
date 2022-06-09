$(document).ready(function(){
    cargarGrupo()
});
//Carga el grupo
async function cargarGrupo(){

    let idSesion = localStorage.id;

    //Obtenemos los usuarios
    const requestUsu = await fetch('api/usuario',{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json'
        }
    });
    const usuarios = await requestUsu.json();

    //Obtenemos el grupo
    const requestGru = await fetch('api/grupo',{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json'
        }
    });
    const grupos = await requestGru.json();
    let cuerpo = '';
    let numg = 0;
    for(ususario of usuarios){
        if(usuario.usu_num == idSesion){
            for(grupo of grupos){
                if(grupo.gru_num == usuario.gru_num){
                    numg = grupo.gru_num;
                    document.querySelector('#cardTitulo').innerHTML = '<i class="bi bi-people-fill"></i>' + grupo.gru_nombre;
                }
            }
        }
    }
    for(usuario1 of usuarios){        
        if(usuario1.gru_num == numg){
            cuerpo += '<li class="list-group-item bg-glass">'+ usuario1.usu_nombre + ' ' + usuario1.usu_apellido +'</li>';
        }
    }
    document.querySelector('#cardCuerpo').innerHTML = cuerpo;

}