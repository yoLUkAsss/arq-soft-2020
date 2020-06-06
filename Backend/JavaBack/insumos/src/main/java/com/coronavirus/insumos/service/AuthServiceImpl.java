package com.coronavirus.insumos.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coronavirus.insumos.modelo.Usuario;
import com.coronavirus.insumos.repository.UsuarioRepository;

@Service
public class AuthServiceImpl implements AuthService{

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Override
	@Transactional
	public void crearUsuario(Usuario usuario) {
		usuarioRepository.save(usuario);
		
	}

	@Override
	public Optional<Usuario> usuarioByEmail(String email) {
		return Optional.ofNullable(usuarioRepository.getUsuarioByEmail(email));
	}
	
	

}
