import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../validaciones/must-match.validator';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formularioRegistro: FormGroup;
  submitted = false;
  usuario:Usuario = new Usuario(null, "", "", "", "", "","", null);

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  get f() { return this.formularioRegistro.controls; }

  registrar() {
    this.submitted = true;

    if (this.formularioRegistro.valid) 
      this.router.navigate(['/inicio'])
  }

  ngOnInit() {
    this.formularioRegistro = this.formBuilder.group({
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


