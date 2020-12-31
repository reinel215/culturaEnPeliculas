import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

import { Router } from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  public loginForm = this.fb.group({

    user : ['', Validators.required],
    contrasena : ['', Validators.required]

  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _usuarioService: UsuarioService
  ) { }

  hacerLogi() {
    this._usuarioService.loginUsuario(this.loginForm.value.user, this.loginForm.value.contrasena )
        .subscribe((data: any) => {
          if (data == 'LOGIN DE USUARIO EXISTOSO') {
            this.router.navigate(['/home'])
          } else {
            swal.fire({
              title: 'Error en login',
              text: 'Combinacion usuario contraseña invalida',
              icon: 'error',
            });
          }
        })
  }

}
