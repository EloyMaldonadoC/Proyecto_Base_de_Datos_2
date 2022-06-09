package com.proyectoDB.Proyecto_Base_de_Datos.dao;

import com.proyectoDB.Proyecto_Base_de_Datos.models.Carrera;

import java.util.List;

//Interface para CarreraDao
public interface CarreraDao {

    List<Carrera> getCarrera();

    Carrera getCarrera(int carre_num);
}
