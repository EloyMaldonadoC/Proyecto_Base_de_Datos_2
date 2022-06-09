package com.proyectoDB.Proyecto_Base_de_Datos.dao;

import com.proyectoDB.Proyecto_Base_de_Datos.models.Nota;

import java.util.List;

//Interface para NotaDao
public interface NotaDao {
    List<Nota> getNota();
}
