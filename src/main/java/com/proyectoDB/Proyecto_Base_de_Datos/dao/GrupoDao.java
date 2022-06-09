package com.proyectoDB.Proyecto_Base_de_Datos.dao;

import com.proyectoDB.Proyecto_Base_de_Datos.models.Grupo;

import java.util.List;

//Interface para GrupoDao
public interface GrupoDao {
    List<Grupo> getGrupos();

    Grupo getGrupo(int gru_num);
}
