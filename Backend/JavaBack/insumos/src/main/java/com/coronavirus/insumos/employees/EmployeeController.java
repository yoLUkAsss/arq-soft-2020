package com.coronavirus.insumos.employees;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.coronavirus.insumos.baseClasses.BaseController;
import com.coronavirus.insumos.baseClasses.BaseService;
import com.coronavirus.insumos.employees.dto.EmployeeDto;

@Controller
@RequestMapping("/users")
public class EmployeeController extends BaseController<Employee, EmployeeDto> {
	
	@Autowired
	private EmployeeService employeeService;

	@Override
	public BaseService<Employee, EmployeeDto> getBaseService() {
		return this.employeeService;
	}

	@Override
	public EmployeeDto toDto(Employee entity) {
		EmployeeDto dto = new EmployeeDto();
		dto.setId(entity.getId());
		dto.setCargo(entity.getCargo());
		dto.setEmail(entity.getEmail());
		dto.setEntity(entity.getEntity());
		dto.setFullname(entity.getFullname());
		dto.setLocation(entity.getLocation());
		dto.setPhone(entity.getPhone());
		dto.setUsername(entity.getUsername());
		return dto;
	}

	@Override
	public Employee toEntity(EmployeeDto dto) {
		Employee entity = new Employee();
//		entity.setId(dto.getId());
		entity.setCargo(dto.getCargo());
		entity.setEmail(dto.getEmail());
		entity.setEntity(dto.getEntity());
		entity.setFullname(dto.getFullname());
		entity.setLocation(dto.getLocation());
		entity.setPhone(dto.getPhone());
		entity.setUsername(dto.getUsername());
		return entity;
	}

	@Override
	public void copyProperties(EmployeeDto dto, Employee entity) {
		entity.setCargo(dto.getCargo());
		entity.setEmail(dto.getEmail());
		entity.setEntity(dto.getEntity());
		entity.setFullname(dto.getFullname());
		entity.setLocation(dto.getLocation());
		entity.setPhone(dto.getPhone());
		entity.setUsername(dto.getUsername());
	}
	
	
}
