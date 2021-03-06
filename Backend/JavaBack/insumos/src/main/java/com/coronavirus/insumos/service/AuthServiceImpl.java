package com.coronavirus.insumos.service;


import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coronavirus.insumos.dto.LoginRequest;
import com.coronavirus.insumos.dto.LoginResponse;
import com.coronavirus.insumos.modelo.Usuario;
import com.coronavirus.insumos.repository.UsuarioRepository;
import com.coronavirus.insumos.utils.TokenProvider;



@Service
public class AuthServiceImpl implements AuthService{

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	private TokenProvider tokenProvider = new TokenProvider();
	
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
			//BUSCAR EL ROL EN EL USUARIO. MODIFICAR.
			String token = tokenProvider.generarJWT(request.getUsuario(),"ROLE_ADMIN");
			LoginResponse response = new LoginResponse();
			response.setUsuario(request.getUsuario());
			response.setToken(token);			
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
