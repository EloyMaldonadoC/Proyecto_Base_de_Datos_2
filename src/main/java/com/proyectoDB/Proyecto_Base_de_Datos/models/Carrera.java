package com.proyectoDB.Proyecto_Base_de_Datos.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

//Clase que toma la forma de un objeto de tipo carrera desde con las columnas de la base de datos
@Entity
@Table(name = "carrera")
public class Carrera {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "CARRE_NUM")
    private int carre_num;

    @Getter @Setter @Column(name = "CARRE_NOMBRE")
    private String carre_nombre;
}
