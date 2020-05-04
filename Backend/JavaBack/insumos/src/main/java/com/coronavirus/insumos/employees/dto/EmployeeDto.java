package com.coronavirus.insumos.employees.dto;

import com.coronavirus.insumos.baseClasses.BaseDTO;
import com.coronavirus.insumos.employees.Employee;

public class EmployeeDto extends BaseDTO<Employee>{
	
	private Long id;
	private String username;
	private String fullname;
	private String email;
	private String phone;
	private String entity;
	private String cargo;
	private String location;
	
	public EmployeeDto() {}

	
	@Override
	public Long getId() {
		return this.id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEntity() {
		return entity;
	}

	public void setEntity(String entity) {
		this.entity = entity;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
}
