package com.proyectoDB.Proyecto_Base_de_Datos.dao;

import com.proyectoDB.Proyecto_Base_de_Datos.models.Carrera;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class CarreraDaoImp implements CarreraDao{

    //Creamos un objeto de tipo EntityManager
    @PersistenceContext
    EntityManager entityManager;

    //Regresa una lista con todas las carreras
    @Override
    public List<Carrera> getCarrera() {
        String query = "FROM Carrera";
        return entityManager.createQuery(query).getResultList();
    }

    //Regresa un objeto de tipo Carrera
    @Override
    public Carrera getCarrera(int carre_num) {
        Carrera carrera = entityManager.find(Carrera.class, carre_num);
        return carrera;
    }
}
