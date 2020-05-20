import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../validaciones/must-match.validator';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formularioRegistro: FormGroup;
  submitted = false;
  usuario:Usuario = new Usuario("", "", "", "", "","", "");

  constructor(private router: Router, private formBuilder: FormBuilder, private usuarioService:UsuarioService) {}

  get f() { return this.formularioRegistro.controls; }

  async registrar(): Promise<void> {
    console.log(this.usuario);
    this.submitted = true;
    try {
      if (this.formularioRegistro.valid){
        await this.usuarioService.crearUsuario(this.usuario);
        this.router.navigate(['/inicio']);
      }
    } catch (error) {
        console.log(error.error);
    }
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


