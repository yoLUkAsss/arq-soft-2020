import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/modelo/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router) {}

  usuario:Usuario = new Usuario(null, "", "", "", "", "","");
  public isError = false;
  public msgError = '';


  ngOnInit(): void {
  }

  registrar(form:NgForm){

    if(form.valid){
      this.router.navigate(['/inicio']);
      console.log("El registro se realizó satisfactoriamente");
    }
    else {
      this.onIsError();
    }
  }


  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 5000);
  }
}

