package com.proyectoDB.Proyecto_Base_de_Datos.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

//Clase que toma la forma de un objeto de tipo usuario desde con las columnas de la base de datos
@Entity
@Table(name = "usuario")
@NamedStoredProcedureQuery(name = "buscarUsuario",
        procedureName = "buscarUsuario",
        resultClasses = {Usuario.class},
        parameters = @StoredProcedureParameter(
                name = "usu_num",
                type = Integer.class,
                mode = ParameterMode.IN))
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "USU_NUM")
    private int usu_num;

    @Getter @Setter @Column(name = "USU_NOMBRE")
    private String usu_nombre;

    @Getter @Setter @Column(name = "USU_APELLIDO")
    private String usu_apellido;

    @Getter @Setter @Column(name = "USU_CUMPLEAÑOS")
    private String usu_cumpleaños;

    @Getter @Setter @Column(name = "USU_CORREO")
    private String usu_correo;

    @Getter @Setter @Column(name = "USU_CONTRASEÑA")
    private String usu_contraseña;

    @Getter @Setter @Column(name = "GRU_NUM")
    private int gru_num;

    @Getter @Setter @Column(name = "CARRE_NUM")
    private int carre_num;
}
