import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {IconList} from '../../shared/components/molecules/icon-list/icon-list';
import {ArrivalDeparture} from '../../shared/components/molecules/arrival-departure/arrival-departure';
import {MenuTabs} from '../../shared/components/molecules/menu-tabs/menu-tabs';
import {Label} from '../../shared/components/atoms/label/label';
import {Input} from '../../shared/components/atoms/input/input';
import {Button} from '../../shared/components/atoms/button/button';
import {JoinComunity} from '../../shared/components/molecules/join-comunity/join-comunity';
import {Header} from '../../shared/components/molecules/header/header';
import {FormsModule} from '@angular/forms';
import {InputText} from '../../shared/components/atoms/input-text/input-text';

import {HttpClientModule,HttpClient} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IconList,
    ArrivalDeparture,
    MenuTabs,
    Label,
    Input,
    Button,
    JoinComunity,
    Header,
    InputText
  ]
})
export class SignIn {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const body = { email: this.email, contrasenha: this.password };

    this.http.post<{ token: string; message: string }>('http://localhost:8080/auth/login', body)
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token); // guardamos JWT
          this.router.navigate(['/home']); // redirigir al home
        },
        error: (err) => {
          console.error(err);
          if (err.status === 401) {
            this.errorMessage = 'Credenciales inválidas';
          } else if (err.status === 500) {
            this.errorMessage = 'Error en el servidor, intenta más tarde';
          } else {
            this.errorMessage = 'Error desconocido';
          }
        }
      });
    this.router.navigate(['']);
  }
}
