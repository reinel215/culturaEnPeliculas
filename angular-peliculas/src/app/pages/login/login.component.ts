import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  hacerLogi() {
    console.log(this.loginForm.value)
    this.router.navigate(['/home'])
  }

}
