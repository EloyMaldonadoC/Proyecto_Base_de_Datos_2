$(document).ready(function(){
    //Excecute the order 66
});
//inicia la seción y da las credenciales de sesión
async function iniciarSesion(){
    //obtenermos los usuarios
    const requestUsu = await fetch('api/usuario',{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json'
        }
    });
    const usuarios = await requestUsu.json();

    let datos = {};
    datos.usu_correo = document.getElementById('txtCorreo').value;
    datos.usu_contraseña = document.getElementById('txtContraseña').value;

    //Loggea el usuario
    const request = await fetch('api/login',{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    for(usuario of usuarios){
        if(datos.usu_correo == usuario.usu_correo){
            datos.usu_num = usuario.usu_num;
        }
    }

    const respuesta = await request.text();
    
    if(respuesta != 'FAIL'){
        localStorage.token = respuesta;
        localStorage.correo = datos.usu_correo;
        localStorage.id = datos.usu_num;
        window.location.href = 'Pagina-Principal.html'
    }else{
        alert("Las credenciales son incorrectas, por favor intentelo de nuevo");
    }
}
