package com.proyectoDB.Proyecto_Base_de_Datos.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

//Clase que toma la forma de un objeto de tipo publicacion desde con las columnas de la base de datos
@Entity
@Table(name = "publicacion")
@NamedStoredProcedureQuery(
        name = "up",
        procedureName = "up",
        resultClasses = {Publicacion.class},
        parameters = @StoredProcedureParameter(
                name = "publi_num",
                type = Integer.class,
                mode = ParameterMode.IN))
@NamedStoredProcedureQuery(
        name = "mostrarPublicaciones",
        procedureName = "mostrarPublicaciones",
        resultClasses = {Publicacion.class})
public class Publicacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "PUBLI_NUM")
    private int publi_num;

    @Getter @Setter @Column(name = "PUBLI_DESCRIPCION")
    private String publi_descripcion;

    @Getter @Setter @Column(name = "PUBLI_UP")
    private int publi_up;

    @Getter @Setter @Column(name = "PUBLI_DOWN")
    private int publi_down;

    @Getter @Setter @Column(name = "USU_NUM")
    private int usu_num;
}
