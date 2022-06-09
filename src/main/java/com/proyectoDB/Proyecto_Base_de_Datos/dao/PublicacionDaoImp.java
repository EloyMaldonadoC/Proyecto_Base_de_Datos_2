package com.proyectoDB.Proyecto_Base_de_Datos.dao;
import com.proyectoDB.Proyecto_Base_de_Datos.models.Publicacion;
import com.proyectoDB.Proyecto_Base_de_Datos.models.Usuario;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

@Repository
@Transactional
public class PublicacionDaoImp implements PublicacionDao{

    //Creamos un objeto de tipo EntityManager
    @PersistenceContext
    EntityManager entityManager;

    //Regresa una lista con todos las Publicaciones
    @Override
    public List<Publicacion> getPublicacion() {
        String query = "FROM Publicacion";
        return entityManager.createQuery(query).getResultList();
    }

    //Elimina una publicacion recibiendo el numero de usuario
    @Override
    public void eliminarPublicacion(int publi_num) {
        Publicacion publicacion = entityManager.find(Publicacion.class, publi_num);
        entityManager.remove(publicacion);
    }

    //Agrega una nueva publicación
    @Override
    public void nuevaPublicacio(Publicacion publicacion) {entityManager.merge(publicacion);}

    //Agrega uno al contador Up
    @Override
    public  void up(Publicacion publicacion){
        int id = publicacion.getPubli_num();
        Publicacion publi = entityManager.find(Publicacion.class, id);
        int pUp = publi.getPubli_up();
        pUp = pUp+1;
        publi.setPubli_up(pUp);
        /*
        Publicacion publicacion = entityManager.find(Publicacion.class, publi_num);
        int valor = publicacion.getPubli_up();
        publicacion.setPubli_up(valor + 1);
        entityManager.merge(publicacion);
        /*
        StoredProcedureQuery query = entityManager.createNamedStoredProcedureQuery("up");
        query.setParameter("publi_num", publi_num);
        query.execute();
         */
    }

    //Muestra las publicaciones de manera ordenada segun su calificacion
    public List<Publicacion> mostrarPublicaciones(){
        StoredProcedureQuery query = entityManager.
                createNamedStoredProcedureQuery("mostrarPublicaciones");
        query.execute();
        List<Publicacion> lista = query.getResultList();
        return lista;
    }
}

