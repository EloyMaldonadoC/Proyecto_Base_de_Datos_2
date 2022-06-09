package com.proyectoDB.Proyecto_Base_de_Datos.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

//Clase que toma la forma de un objeto de tipo nota desde con las columnas de la base de datos
@Entity
@Table(name = "nota")
public class Nota {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "NOTA_NUM")
    private int nota_num;

    @Getter @Setter @Column(name = "NOTA_TITULO")
    private String nota_titulo;

    @Getter @Setter @Column(name = "NOTA_DESCRIPCION")
    private String nota_descripcion;

    @Getter @Setter @Column(name = "NOTA_NOTI_HORA")
    private int nota_noti_hora;

    @Getter @Setter @Column(name = "NOTA_NOTI_TIEMPO")
    private int nota_noti_tiempo;

    @Getter @Setter @Column(name = "USU_NUM")
    private int usu_num;

    @Getter @Setter @Column(name = "TIPO_NUM")
    private int tipo_num;
}
