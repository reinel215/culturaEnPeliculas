import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaEspComponent } from './pages/pelicula-esp/pelicula-esp.component';
import { SubirPeliculaComponent } from './pages/subir-pelicula/subir-pelicula.component';
import { ModificarPerfilComponent } from './pages/modificar-perfil/modificar-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,
    HomeComponent,
    PeliculaEspComponent,
    SubirPeliculaComponent,
    ModificarPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
