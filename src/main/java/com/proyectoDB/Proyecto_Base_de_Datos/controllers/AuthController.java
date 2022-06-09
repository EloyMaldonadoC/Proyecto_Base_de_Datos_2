package com.proyectoDB.Proyecto_Base_de_Datos.controllers;

import com.proyectoDB.Proyecto_Base_de_Datos.dao.UsuarioDao;
import com.proyectoDB.Proyecto_Base_de_Datos.models.Usuario;
import com.proyectoDB.Proyecto_Base_de_Datos.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    //Creamos una variable de tipo usuarioDao
    @Autowired
    private UsuarioDao usuarioDao;

    //creamos una variable de tipo JWTUtil
    @Autowired
    private JWTUtil jwtUtil;

    //Api para el login
    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody Usuario usuario){
        Usuario usuarioLogueado = usuarioDao.obtenerUsuarioPorCredenciales(usuario);
        if (usuarioLogueado != null){
            String tokenJwt = jwtUtil.create(String.valueOf(usuarioLogueado.getUsu_num()), usuarioLogueado.getUsu_correo());
            return tokenJwt;
        }
        return "FAIL";
    }
}
