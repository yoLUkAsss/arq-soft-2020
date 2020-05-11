import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { RegistroComponent } from './componentes/usuario/registro/registro.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
