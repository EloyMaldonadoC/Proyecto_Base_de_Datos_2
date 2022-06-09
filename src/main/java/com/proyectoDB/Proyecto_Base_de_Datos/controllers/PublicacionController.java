package com.proyectoDB.Proyecto_Base_de_Datos.controllers;
import com.proyectoDB.Proyecto_Base_de_Datos.dao.PublicacionDao;
import com.proyectoDB.Proyecto_Base_de_Datos.models.Publicacion;
import com.proyectoDB.Proyecto_Base_de_Datos.models.Usuario;
import com.proyectoDB.Proyecto_Base_de_Datos.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PublicacionController{

    //Creamos una variable de tipo PublicacionDao
    @Autowired
    private PublicacionDao publicacionDao;

    //Creamos una variable de tipo JWTUtil
    @Autowired
    private JWTUtil jwtUtil;

    //Api de publicaciones que usa el metodo getPublicacion
    @RequestMapping(value = "api/publicacion", method = RequestMethod.GET)
    public List<Publicacion> getPublicacion(){return publicacionDao.getPublicacion();}

    //Api de publicacion  que usa el metodo eliminarPublicacion
    @RequestMapping(value = "api/publicacion/{publi_num}", method = RequestMethod.DELETE)
    public void eliminarPublicacion(@PathVariable int publi_num){
            publicacionDao.eliminarPublicacion(publi_num);
    }

    //Api de publicacion  que usa el metodo nuevaPublicacion
    @RequestMapping(value = "api/publicacion", method = RequestMethod.POST)
    public void nuevaPublicacion(@RequestBody Publicacion publicacion){publicacionDao.nuevaPublicacio(publicacion);}

    //Api que regresa las publicaciones ordenadas por calificación
    @RequestMapping(value = "api/public", method = RequestMethod.GET)
    public List<Publicacion> mostrarPublicaciones(){
        return publicacionDao.mostrarPublicaciones();
    }

    //Api de up que agrega la funcionalidad al botón up
    @RequestMapping(value = "api/publicacion/up", method = RequestMethod.POST)
    public void up(@RequestBody Publicacion publicacion){publicacionDao.up(publicacion);}
}