$(document).ready(function(){
    cargarPublicaciones();
});
//Carga las publicaciones
async function cargarPublicaciones(){
  let idSesion = localStorage.id;

//Obtenemos las carreras
        const requestCarrera = await fetch('api/carrera',{
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Context-Type': 'application/json'
            }
        });
        const carreras = await requestCarrera.json();

//obtenermos los usuarios
    const requestUsu = await fetch('api/usuario',{
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Context-Type': 'application/json'
            }
        });

        const usuarios = await requestUsu.json();

//obtenemos las publicaciones
    const request = await fetch('api/publicacion',{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json'
        }
    });
    const public = await request.json();


    let publicacionHTML = '';


    for(publi of public)
    {
    let i = publi.usu_num;
    let usua = usuarios[i-1];
    let c = usua.carre_num;

    let botonEliminar = '';

    if(publi.usu_num == idSesion){
      botonEliminar = '<div class="btn-group">'+
    '<button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">'+
      '<span class="visually-hidden">Toggle Dropdown</span>'+
    '</button>'+
    '<ul class="dropdown-menu">'+
      '<li>'+
        '<a class="dropdown-item" href="#" onclick="eliminarPublicacion('+ publi.publi_num +')" >Eliminar</a>'+
      '</li>'+
    '</ul>'+
  '</div>';
    }

    if(carreras[c-1].carre_num == usuarios[idSesion-1].carre_num){
      publicacionHTML += '<div class="card bg-glass mx-auto m-fluid m-4">'+
      '<div class="card-body">'+
        '<!--Encabezado-->'+
        '<div class="row">'+
          '<div class="col-3 col-lg-3 col-xl-2">'+
            '<img src="img/perfil.png" class="rounded d-block mx-auto" style="width: 60px; height: 60px;" alt="perfil">'+
          '</div>'+
          '<div class="col-7 col-lg-8 col-xl-9">'+
            '<h6 class="card-title">'+ usuarios[i-1].usu_nombre +' '+ usuarios[i-1].usu_apellido +'</h6>'+
            '<p>'+ carreras[c-1].carre_nombre +'</p>'+
          '</div>'+
          '<div class="col-2 col-lg-1 col-xl-1">'+
            '<!--boton de edición-->'+
            botonEliminar+
          '</div>'+
        '</div>'+
        '<!--Cuerpo de la publicacion-->'+
        '<div class="row">'+
          '<div class="col-10 m-3">'+
            '<div class="container">'+
              '<p>'+publi.publi_descripcion+'</p>'+
            '</div>'+
          '</div>'+
        '</div>'+
        '<div class="row" id="reaccion">'+
          '<!--columna de reaacion-->'+
          '<div class="col-3 text-center">'+
            '<div class="">'+
              '<a href="#"><i class="bi bi-chevron-up" title="Subir"></i></a>'+
               '<div>'+publi.publi_up+'</div>'+
              '<a href="#"><i class="bi bi-chevron-down" title="Bajar"></i></a>'+
            '</div>'+
          '</div>'+
          '<!--columna de respuestas-->'+
          '<div class="col-6">'+
            '<div class="container"></div>'+
          '</div>'+
          '<div class="col-3">'+
            '<div class="container"></div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
    }
    
  }
  document.querySelector('#vista').innerHTML = publicacionHTML;
}

 async function eliminarPublicacion(publi_num){

    if(!confirm("¿Desea eliminar esta publicacion?")){
        return;
    }

    const request = await fetch('api/publicacion/' + publi_num,{
            method:'DELETE',
            headers:{
                'Accept': 'application/json',
                'Context-Type': 'application/json'
            }
        });
    location.reload();
}