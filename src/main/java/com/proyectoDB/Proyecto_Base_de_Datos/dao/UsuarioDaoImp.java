package com.proyectoDB.Proyecto_Base_de_Datos.dao;

import com.proyectoDB.Proyecto_Base_de_Datos.models.Usuario;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import java.util.List;

@Repository
@Transactional
public class UsuarioDaoImp implements UsuarioDao{

    //Creamos un objeto de tipo EntityManager
    @PersistenceContext
    EntityManager entityManager;

    //Regresa una lista con todos los usuarios
    @Override
    public List<Usuario> getUsuario() {
        String query = "FROM Usuario";
        return entityManager.createQuery(query).getResultList();
    }

    //Agrega un nuevo usuario
    @Override
    public void registrarUsuario(Usuario usuario) {
        entityManager.merge(usuario);
    }

    //valida las credenciales del usuario con base al correo electrónico
    @Override
    public Usuario obtenerUsuarioPorCredenciales(Usuario usuario){
        String query = "FROM Usuario WHERE usu_correo = :usu_correo";
        List<Usuario> lista = entityManager.createQuery(query)
                .setParameter("usu_correo",usuario.getUsu_correo())
                .getResultList();

        if (lista.isEmpty()){
            return null;
        }

        String passwordHashed = lista.get(0).getUsu_contraseña();

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        if(argon2.verify(passwordHashed, usuario.getUsu_contraseña())){
            return lista.get(0);
        }
        return null;
    }

    //Regresa un objeto de tipo Usuario
    @Override
    public Usuario getUsuario(int usu_num) {
        Usuario usuario = entityManager.find(Usuario.class, usu_num);
        return usuario;
    }

    //Busca un solo usuario desde una funcion al macenada en la base de datos
    @Override
    public List<Usuario> buscarUsuario(int usu_num) {
        StoredProcedureQuery query = entityManager.
                createNamedStoredProcedureQuery("buscarUsuario").
                setParameter("usu_num", usu_num);
        query.execute();
        List<Usuario> usuario = query.getResultList();
        return usuario;
    }

    //Busca los usuarios que coincidan sus nombres con la cadena de caracteres dada
    @Override
    public List<Usuario> buscarPorNombre(String cade) {
        String query = "FROM Usuario WHERE usu_nombre LIKE :cade OR usu_apellido LIKE :cade";
        return  entityManager.createQuery(query).setParameter("cade", cade).getResultList();
    }
}
