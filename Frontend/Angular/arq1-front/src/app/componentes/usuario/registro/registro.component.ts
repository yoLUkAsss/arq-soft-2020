import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/modelo/usuario';
import { Validaciones } from '../../validaciones/validaciones';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../validaciones/must-match.validator';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  usuario:Usuario = new Usuario(null, "", "", "", "", "","", null);

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) 
      this.router.navigate(['/inicio'])
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      entidad: ['', Validators.required],
      cargo: ['', Validators.required],
      localidad: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmarPassword')
    });
  }

  
  }


