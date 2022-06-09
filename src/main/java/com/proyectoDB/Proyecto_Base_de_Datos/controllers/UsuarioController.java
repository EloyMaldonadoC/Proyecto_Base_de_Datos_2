package com.proyectoDB.Proyecto_Base_de_Datos.controllers;

import com.proyectoDB.Proyecto_Base_de_Datos.dao.UsuarioDao;
import com.proyectoDB.Proyecto_Base_de_Datos.models.Grupo;
import com.proyectoDB.Proyecto_Base_de_Datos.models.Usuario;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuarioController{

    //Creamos una variable de tipo UsuarioDao
    @Autowired
    private UsuarioDao usuarioDao;

    //Api de usuario de tipo get con el metodo getUsuarios
    @RequestMapping(value = "api/usuario", method = RequestMethod.GET)
    public List<Usuario> getUsuario(){ return usuarioDao.getUsuario();}


    //Api de usuario de tipo post con el metodo registrousuario
    @RequestMapping(value = "api/usuario/registro", method = RequestMethod.POST)
    public void registrarUsuario(@RequestBody Usuario usuario){

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(1, 1024, 1, usuario.getUsu_contraseña());
        usuario.setUsu_contraseña(hash);

        usuarioDao.registrarUsuario(usuario);
    }

    //Api de usuario que recibe un id y usa el metodo getUsuario
    @RequestMapping(value = "api/usuario/{usu_num}", method = RequestMethod.GET)
    public Usuario getUsuario(@PathVariable int usu_num) {
        return usuarioDao.getUsuario(usu_num);
    }

    //Api de busqueda de un solo usuario
    @RequestMapping(value = "api/usu/{usu_num}", method = RequestMethod.GET)
    public List<Usuario> buscarUsuario(@PathVariable int usu_num){
        return usuarioDao.buscarUsuario(usu_num);
    }

    //Api que recibe la cadena para la funcion de busqueda por nombre
    @RequestMapping(value = "api/usuario/buscar/{cade}", method = RequestMethod.GET)
    public List<Usuario> buscarPorNombre(@PathVariable String result){
        String cade = "%"+ result +"%";
        return usuarioDao.buscarPorNombre(cade);
    }
}
