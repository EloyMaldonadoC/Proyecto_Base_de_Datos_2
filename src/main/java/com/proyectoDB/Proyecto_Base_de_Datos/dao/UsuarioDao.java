package com.proyectoDB.Proyecto_Base_de_Datos.dao;

import com.proyectoDB.Proyecto_Base_de_Datos.models.Usuario;

import java.util.List;

//Interface para la clase UsuarioDao
public interface UsuarioDao {
    List<Usuario> getUsuario();

    void registrarUsuario(Usuario usuario);

    Usuario obtenerUsuarioPorCredenciales(Usuario usuario);

    Usuario getUsuario(int usu_num);

    List<Usuario> buscarUsuario(int usu_num);

    List<Usuario> buscarPorNombre(String cade);
}
