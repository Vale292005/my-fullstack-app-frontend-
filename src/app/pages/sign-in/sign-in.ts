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

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
  imports: [
    FormsModule,
    IconList,
    ArrivalDeparture,
    MenuTabs,
    Label,
    Input,
    Button,
    JoinComunity,
    Header
  ]
})
export class SignIn {
  // 🔹 Propiedades para enlazar los valores del formulario
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  goToResultados() {
    const guardado = localStorage.getItem('usuarioRegistrado');
    const usuarioValido = guardado ? JSON.parse(guardado) : null;

    if (!usuarioValido) {
      alert('⚠️ No hay ningún usuario registrado. Regístrate primero.');
      return;
    }

    if (this.email === usuarioValido.email && this.password === usuarioValido.password) {
      console.log('✅ Login correcto');
      this.router.navigate(['/resultados']);
    } else {
      alert('❌ Usuario o contraseña incorrectos');
    }
  }

}
