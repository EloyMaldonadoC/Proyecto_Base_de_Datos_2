package com.proyectoDB.Proyecto_Base_de_Datos.controllers;

import com.proyectoDB.Proyecto_Base_de_Datos.dao.CarreraDao;
import com.proyectoDB.Proyecto_Base_de_Datos.models.Carrera;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CarreraController implements CarreraDao {

    //Creamos una variable de tipo CarreraDao
    @Autowired
    private CarreraDao carreraDao;

    //Api de carreara  que usa el metodo getCarrera
    @RequestMapping(value = "api/carrera", method = RequestMethod.GET)
    public List<Carrera> getCarrera() {return carreraDao.getCarrera();
    }

    //Api de carreara  que usa el metodo getCarrera para obtener una
    @RequestMapping(value = "api/carrera/{carre_num}", method = RequestMethod.GET)
    public Carrera getCarrera(@PathVariable int carre_num) {
        return carreraDao.getCarrera(carre_num);
    }
}
