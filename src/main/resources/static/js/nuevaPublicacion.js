$(document).ready(function(){
    
});
//Añade una nueva publicación
async function nuevaPublicacion(){

    let idSesion = localStorage.id;

    let nPublicacion = {};
    nPublicacion.publi_descripcion = document.getElementById('publicar').value;
    nPublicacion.publi_up = 0;
    nPublicacion.publi_down = 0;
    nPublicacion.usu_num = idSesion;

    if(nPublicacion.publi_descripcion == ''){
        alert("Aún no has escrito nada");
        return;
    }

    const request = await fetch('api/publicacion',{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nPublicacion)
    });
    location.reload();
}