import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Necesario para ngModel
import {IconList} from '../../shared/components/molecules/icon-list/icon-list';
import {ArrivalDeparture} from '../../shared/components/molecules/arrival-departure/arrival-departure';
import {MenuTabs} from '../../shared/components/molecules/menu-tabs/menu-tabs';
import {Label} from '../../shared/components/atoms/label/label';
import {Input} from '../../shared/components/atoms/input/input';
import {Button} from '../../shared/components/atoms/button/button';
import {JoinComunity} from '../../shared/components/molecules/join-comunity/join-comunity';
import {Header} from '../../shared/components/molecules/header/header';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrl: './register.css',
  imports: [
    FormsModule, // 👈 Para usar [(ngModel)]
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
export class Register {

  // 🔹 Propiedades para el formulario
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // 🔹 Guardar usuario en localStorage
  registrarUsuario() {
    if (!this.email || !this.password) {
      alert('⚠️ Debes completar todos los campos');
      return;
    }

    const nuevoUsuario = {
      email: this.email,
      password: this.password
    };

    // Guardar como JSON en localStorage
    localStorage.setItem('usuarioRegistrado', JSON.stringify(nuevoUsuario));

    alert('✅ Registro exitoso. Ahora puedes iniciar sesión.');
    this.router.navigate(['/login']);
  }

  goToResultados() {
    this.router.navigate(['/resultados']);
  }
}
