package com.coronavirus.insumos.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Service;

import com.coronavirus.insumos.dto.LoginRequest;
import com.coronavirus.insumos.dto.LoginResponse;
import com.coronavirus.insumos.modelo.Usuario;
import com.coronavirus.insumos.repository.UsuarioRepository;


@Service
public class AuthServiceImpl implements AuthService{

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Override
	@Transactional
	public void crearUsuario(Usuario usuario) throws Exception {
		//Valido si existe un usuario con ese email
		if (usuarioByEmail(usuario.getEmail()).isPresent()){
			throw new Exception("Ya existe un usuario registrado con ese email.");
		}else {
			usuarioRepository.save(usuario);
		}
		
	}

	@Override
	public Optional<Usuario> usuarioByEmail(String email) {
		return Optional.ofNullable(usuarioRepository.getUsuarioByEmail(email));
	}

	@Override
	public LoginResponse login(LoginRequest request) throws Exception {
		if (credencialesValidas(request.getUsuario(), request.getPassword())){
			LoginResponse response = new LoginResponse();
			response.setUsuario(request.getUsuario());
			response.setToken(request.getPassword());			
			return response;
		}else {
			throw new Exception("Usuario invalido");
		}
		
	}
	
	public boolean credencialesValidas(String email, String password) {
		Optional<Usuario> usuario = Optional.ofNullable(usuarioRepository.getByUserYPasw(email, password));
		return (usuario.isPresent());
	}
	

}
