import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ModificarPerfilComponent } from './pages/modificar-perfil/modificar-perfil.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'modificarPerfil', component: ModificarPerfilComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
