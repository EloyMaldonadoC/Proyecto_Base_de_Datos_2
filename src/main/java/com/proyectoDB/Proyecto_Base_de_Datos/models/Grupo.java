package com.proyectoDB.Proyecto_Base_de_Datos.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

//Clase que toma la forma de un objeto de tipo grupo desde con las columnas de la base de datos
@Entity
@Table(name = "grupo")
public class Grupo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "GRU_NUM")
    private int gru_num;

    @Getter @Setter @Column(name = "GRU_NOMBRE")
    private  String gru_nombre;

    @Getter @Setter @Column(name = "GRU_DESCRIPCION")
    private  String gru_descripcion;
}
