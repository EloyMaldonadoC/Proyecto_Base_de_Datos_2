package com.proyectoDB.Proyecto_Base_de_Datos.dao;

import com.proyectoDB.Proyecto_Base_de_Datos.models.Nota;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class NotaDaoImp implements NotaDao{

    //Creamos un objeto de tipo EntityManager
    @PersistenceContext
    EntityManager entityManager;

    //Regresa una lista con todos las notas
    @Override
    public List<Nota> getNota() {
        String query = "FROM Nota";
        return entityManager.createQuery(query).getResultList();
    }
}
