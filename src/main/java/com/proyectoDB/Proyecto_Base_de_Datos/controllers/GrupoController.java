package com.proyectoDB.Proyecto_Base_de_Datos.controllers;

import com.proyectoDB.Proyecto_Base_de_Datos.dao.GrupoDao;
import com.proyectoDB.Proyecto_Base_de_Datos.models.Grupo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GrupoController implements GrupoDao {

    //Creamos una variable de tipo GrupoDao
    @Autowired
    private GrupoDao grupoDao;

    //Api de grupos  que usa el metodo getGrupos
    @RequestMapping(value = "api/grupo", method = RequestMethod.GET)
    public List<Grupo> getGrupos() {return grupoDao.getGrupos();}

    //Api de grupos  que usa el metodo getGrupo
    @RequestMapping(value = "api/grupo/{gru_num}", method = RequestMethod.GET)
    public Grupo getGrupo(@PathVariable int gru_num) {return grupoDao.getGrupo(gru_num);}
}
