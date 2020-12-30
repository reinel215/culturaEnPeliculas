import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  public RegisterForm = this.fb.group({

    user : ['', Validators.required],
    correo : ['', Validators.required],
    nombre : ['', Validators.required],
    genero : ['', Validators.required],
    contrasena : ['', Validators.required]

  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _usuarioService: UsuarioService
  ) { }

  hacerRegister() {
    this._usuarioService.RegistrarPersona(this.RegisterForm.value.user, this.RegisterForm.value.correo, this.RegisterForm.value.nombre, this.RegisterForm.value.genero, this.RegisterForm.value.contrasena)
      .subscribe((data: any) => {
        swal.fire({
          title: 'Registro exitoso',
          text: 'se a registrado satisfactoriamente',
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/login'])
          } 
        })
      },error => {
        console.log(error)
        swal.fire({
          title: 'Error registrando usuario',
          text: 'debe colocar un usuario y correos unicos',
          icon: 'error',
        });
      })
  }

  volver() {
    this.router.navigate(['/login'])
  }

}
