import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient ) { }

  private baseUrl: string = 'http://localhost:3000';

  RegistrarPersona(user, correo, nombre, genero, contrasena) {
    
    let url = this.baseUrl + '/api/users/register'

    let data = {
      "username": user,
      "mail": correo,
      "name": nombre,
      "gender": genero,
      "password": contrasena,
      "url_image": 'img3'
    };

    return this.http.post(url , data)
  }

}
