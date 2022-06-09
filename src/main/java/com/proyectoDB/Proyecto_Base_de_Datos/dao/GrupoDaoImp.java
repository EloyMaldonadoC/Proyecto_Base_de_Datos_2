package com.proyectoDB.Proyecto_Base_de_Datos.dao;

import com.proyectoDB.Proyecto_Base_de_Datos.models.Grupo;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class GrupoDaoImp implements GrupoDao{

    //Creamos un objeto de tipo EntityManager
    @PersistenceContext
    EntityManager entityManager;

    //Regresa una lista con todos los grupos
    @Override
    public List<Grupo> getGrupos() {
        String query = "FROM Grupo";
        return entityManager.createQuery(query).getResultList();
    }

    //Regresa un objeto de tipo Grupo
    @Override
    public Grupo getGrupo(int gru_num) {
        Grupo grupo = entityManager.find(Grupo.class, gru_num);
        return grupo;
    }
}
