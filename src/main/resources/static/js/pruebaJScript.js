var mensaje = document.querySelector('#vista');

function bucle(){
    let mensajePrueba = '<div class="card bg-glass mx-auto m-fluid m-4">'+
    '<div class="card-body">'+
      '<!--Encabezado-->'+
      '<div class="row border">'+
        '<div class="col-3 col-lg-3 col-xl-2 border">'+
          '<img src="img/perfil.png" class="rounded d-block mx-auto" style="width: 60px; height: 60px;" alt="perfil">'+
        '</div>'+
        '<div class="col-7 col-lg-8 col-xl-9 border">'+
          '<h6 class="card-title">Marco Placios</h6>'+
          '<p>I.T.C</p>'+
        '</div>'+
        '<div class="col-2 col-lg-1 col-xl-1 border">'+
          '<!--boton de edición-->'+
          '<div class="btn-group">'+
            '<button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">'+
              '<span class="visually-hidden">Toggle Dropdown</span>'+
            '</button>'+
            '<ul class="dropdown-menu">'+
              '<li><a class="dropdown-item" href="#">Eliminar</a></li>'+
            '</ul>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<!--Cuerpo de la publicacion-->'+
      '<div class="row border">'+
        '<div class="col-10 m-3">'+
          '<div class="container border">'+
            '<p>¿Alguien sabe si hay tarea?</p>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="row border" id="reaccion">'+
        '<!--columna de reaacion-->'+
        '<div class="col-3 text-center border">'+
          '<div class="container border">'+
            '<a href="#"><i class="bi bi-chevron-up" title="Subir"></i></a>'+
             '<div></div>'+
            '<a href="#"><i class="bi bi-chevron-down" title="Bajar"></i></a>'+
          '</div>'+
        '</div>'+
        '<!--columna de respuestas-->'+
        '<div class="col-6 border">'+
          '<div class="container"></div>'+
        '</div>'+
        '<div class="col-3 border">'+
          '<div class="container border"></div>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>';
    for(var i=0; i<5; i++){
        mensaje.innerHTML += mensajePrueba;
    }
}

bucle();