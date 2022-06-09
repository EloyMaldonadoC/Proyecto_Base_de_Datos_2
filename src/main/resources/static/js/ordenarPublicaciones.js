$(document).ready(function(){
    ordenarPublicaciones();
});
//------------------------------------------------------
//Ordena las publicaciones de la mas aceptada a la menor
async function ordenarPublicaciones(){
    //------------------------------------
    //obtenemos el id de la sesión actual
    let idSesion = localStorage.id;
    //----------------------------
    //Obtenemos las publicaciones
    const requestPubli = await fetch('api/public', { 
        method: 'GET', 
        headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        }
    });
    const publicaciones  = await requestPubli.json();

    let btnEliminar = ' ';
    for(publicacion of publicaciones){
        //----------------------------------------------------------
        //Si el id del usuario de la publicacion coincide con el de 
        //la sesión del usuario actual coloca el boton eliminar
        if(publicacion.usu_num == idSesion){
            btnEliminar = 
        '<div class="btn-group">'+
            '<button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">'+
                '<span class="visually-hidden">Toggle Dropdown</span>'+
            '</button>'+
            '<ul class="dropdown-menu">'+
                '<li>'+
                    '<a class="dropdown-item" href="#" onclick="eliminarPublicacion('+ publicacion.publi_num +')" >Eliminar</a>'+
                '</li>'+
            '</ul>'+
        '</div>';
        }else{
            btnEliminar = ' ';
        }
        //--------------------------------------------------------------------
        //obtenemos los datos del usuario al que le pertenece esta publicación
        const requestUsu = await fetch('api/usuario/'+ publicacion.usu_num, {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        });
        const usuario = await requestUsu.json();
        //---------------------------------------------------------------------
        //obtenemos la carrera del usuario al que le pertenece esta publicación
        const requestCarre = await fetch('api/carrera/'+ usuario.carre_num, {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            }
        });
        const carrera = await requestCarre.json();
        //------------------------------------------------------------------------------
        //creamos el cuerpo de la publicacion para prepararlo para inyectarlo en el html
        let cuerpoPublicacion =
        '<div class="card bg-glass mx-auto m-fluid m-4">'+
            '<div class="card-body">'+
                '<!--Encabezado-->'+
                '<div class="row">'+
                    '<div class="col-3 col-lg-3 col-xl-2">'+
                        '<img src="img/perfil.png" class="rounded d-block mx-auto" style="width: 60px; height: 60px;" alt="perfil">'+
                    '</div>'+
                    '<div class="col-7 col-lg-8 col-xl-9">'+
                        '<h6 class="card-title">'+ usuario.usu_nombre +' '+ usuario.usu_apellido +'</h6>'+
                        '<p>'+ carrera.carre_nombre +'</p>'+
                    '</div>'+
                    '<div class="col-2 col-lg-1 col-xl-1">'+
                    '<!--boton de edición-->'+
                        btnEliminar+
                    '</div>'+
                '</div>'+
                '<!--Cuerpo de la publicacion-->'+
                '<div class="row">'+
                    '<div class="col-10 m-3">'+
                        '<div class="container">'+
                            '<p>'+publicacion.publi_descripcion+'</p>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="row" id="reaccion">'+
                    '<!--columna de reaacion-->'+
                    '<div class="col-3 text-center">'+
                        '<div class="">'+
                            '<a href="#" onclick="up('+ publicacion.publi_num +')"><i class="bi bi-chevron-up" title="Subir"></i></a>'+
                            '<div>'+publicacion.publi_up+'</div>'+
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
        //-------------------------------
        //Inyectamos el código en el html
        document.querySelector('#vista').innerHTML += cuerpoPublicacion;
    }
}
//---------------------------------------------------------------------
//Elimina la publicación recibiendo el número de publicación a eliminar
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
//Agrega uno al contador
async function up(publi_num){
    let dato = {};
    dato.publi_num = publi_num;
    
    const request = await fetch('api/publicacion/up',{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dato)
    });
    location.reload();
}