package com.proyectoDB.Proyecto_Base_de_Datos.dao;
import java.util.List;
import com.proyectoDB.Proyecto_Base_de_Datos.models.Publicacion;
import com.proyectoDB.Proyecto_Base_de_Datos.models.Usuario;

//Interface para PublicacionDao
public interface PublicacionDao {

    List<Publicacion> getPublicacion();

    void eliminarPublicacion(int publi_num);

    void nuevaPublicacio(Publicacion publicacion);

    void up(Publicacion publicacion);

    List<Publicacion> mostrarPublicaciones();
}
