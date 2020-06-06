package com.coronavirus.insumos.service;

import java.util.Optional;

import com.coronavirus.insumos.modelo.Usuario;

public interface AuthService {

	public void crearUsuario(Usuario usuario);

	public Optional<Usuario> usuarioByEmail(String email);
}
