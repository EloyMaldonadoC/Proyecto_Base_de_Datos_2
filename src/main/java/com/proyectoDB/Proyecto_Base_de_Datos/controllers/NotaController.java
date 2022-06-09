package com.proyectoDB.Proyecto_Base_de_Datos.controllers;

import com.proyectoDB.Proyecto_Base_de_Datos.dao.NotaDao;
import com.proyectoDB.Proyecto_Base_de_Datos.models.Nota;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NotaController implements NotaDao {

    //Creamos una variable de tipo NotaDao
    @Autowired
    private NotaDao notaDao;

    //Api de nota que usa el metodo getNota
    @RequestMapping(value = "api/nota", method = RequestMethod.GET)
    public List<Nota> getNota() {   return notaDao.getNota();}
}
