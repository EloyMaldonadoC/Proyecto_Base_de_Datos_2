$(document).ready(function(){
    
});
//Registara un nuevo usuario
async function registrarUsuario(){
    //obtenermos los usuarios
    const request = await fetch('api/usuario',{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json'
        }
    });

    const usuarios = await request.json();

    //Agregarmos al nuevo usuario
    let datos ={};
    datos.usu_nombre = document.getElementById('txtNombre').value;
    datos.usu_apellido = document.getElementById('txtApellido').value;
    datos.usu_cumpleaños = document.getElementById('cumpleaños').value;
    datos.usu_correo = document.getElementById('txtCorreo').value;
    datos.usu_contraseña = document.getElementById('txtContraseña').value;
    let verificaContraseña = document.getElementById('txtVerificaContraseña').value;
    datos.gru_num = parseInt(document.getElementById('CmbCarrera').value);
    datos.carre_num = parseInt(document.getElementById('CmbCarrera').value);

    if(datos.usu_nombre == ''){
        alert('Coloca tu nombre');
        return;
    }
    if(datos.usu_apellido == ''){
        alert('Coloca tus apellidos');
        return;
    }
    if(datos.usu_correo == ''){
        alert('Coloca un correo');
        return;
    }
    if(datos.usu_contraseña == ''){
        alert('Coloca la contraseña');
        return;
    }
    if(verificaContraseña == ''){
        alert('Verifica la contraseña');
    }
    if(datos.usu_cumpleaños == ''){
        alert('Rellena las casillas faltantes');
        return;
    }
    if(verificaContraseña != datos.usu_contraseña){
        alert('Las contraseñas son diferentes, intente otra vez');
        return;
    }
    if(datos.gru_num != 99){
        alert('Escoje el Grupo')
        return;
    }
    for(usuario of usuarios){
        if(usuario.usu_correo == datos.usu_correo){
            alert('Este correo ya esta vinculado con una cuenta');
            return;
        }
    }


    const requestUsu = await fetch('api/usuario/registro',{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Context-Type': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    alert('El registro a sido un exito');
    window.location.href = 'Iniciar-Sesion.html'
}