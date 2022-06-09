$(document).ready(function(){
    perfil()
});
//Coloca los datos al usuario principal
async function perfil(){
    let usu_num = localStorage.id;

    //Optiene un usuario
    const requestUsu = await fetch('api/usuario/'+ usu_num,{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
           },
    });
    const usuario = await requestUsu.json();

    let gru_num = usuario.gru_num;

    //Optiene un grupo
    const requestGru = await fetch('api/grupo/'+ gru_num,{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
           },
    });
    const grupo = await requestGru.json();

    let carre_num = usuario.carre_num;

    //Optiene un carrera
    const requestCarre = await fetch('api/carrera/'+ carre_num,{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
           },
    });
    const carrera = await requestCarre.json();

    document.querySelector('#lblNombre').innerHTML = '<h3 class="card-title">'+ usuario.usu_nombre + ' ' + usuario.usu_apellido +'</h3>';
    document.querySelector('#lblCumpleaños').innerHTML = '<p><i class="bi bi-balloon-fill"></i>  Nació el día: '+ usuario.usu_cumpleaños +'</p>';
    document.querySelector('#lblGrupo').innerHTML = '<p><i class="bi bi-people-fill"></i>   Grupo: '+ grupo.gru_nombre +'</p>';
    document.querySelector('#lblCarrera').innerHTML = '<p><i class="bi bi-mortarboard-fill"></i>  Carrera: '+ carrera.carre_nombre +'</p>';
}