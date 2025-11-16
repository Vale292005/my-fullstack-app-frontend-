import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IconList } from '../../shared/components/molecules/icon-list/icon-list';
import { ArrivalDeparture } from '../../shared/components/molecules/arrival-departure/arrival-departure';
import { MenuTabs } from '../../shared/components/molecules/menu-tabs/menu-tabs';
import { Label } from '../../shared/components/atoms/label/label';
import { Input } from '../../shared/components/atoms/input/input';
import { Button } from '../../shared/components/atoms/button/button';
import { JoinComunity } from '../../shared/components/molecules/join-comunity/join-comunity';
import { Header } from '../../shared/components/molecules/header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrl: './register.css',
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
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
  nombre: string = '';
  telefono: string = '';
  email: string = '';
  edad: string = '';
  contrasenha: string = '';
  aceptaTerminos: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  registrarUsuario() {
    // VALIDACIONES ----------------------------

    // Nombre
    if (this.nombre.trim().length < 3) {
      this.errorMessage = '⚠️ El nombre debe tener al menos 3 caracteres';
      return;
    }

    // Teléfono: solo números y mínimo 7 dígitos
    const telefonoRegex = /^[0-9]{7,15}$/;
    if (!telefonoRegex.test(this.telefono)) {
      this.errorMessage = '⚠️ El teléfono debe tener entre 7 y 15 dígitos';
      return;
    }

    // Email válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMessage = '⚠️ Ingresa un correo electrónico válido';
      return;
    }

    // Edad mínima: mayor de 18 años
    const birthDate = new Date(this.edad);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Ajuste de cumpleaños
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    if (age < 18) {
      this.errorMessage = '⚠️ Debes ser mayor de edad (18+) para registrarte';
      return;
    }

    // Contraseña mínima y máxima
    if (this.contrasenha.length < 6) {
      this.errorMessage = '⚠️ La contraseña debe tener mínimo 6 caracteres';
      return;
    }
    if (this.contrasenha.length > 20) {
      this.errorMessage = '⚠️ La contraseña no puede exceder 20 caracteres';
      return;
    }

    // Debe aceptar los términos
    if (!this.aceptaTerminos) {
      this.errorMessage = '⚠️ Debes aceptar los términos y condiciones';
      return;
    }

    // FIN VALIDACIONES -------------------------

    const usuarioDto = {
      nombre: this.nombre,
      telefono: this.telefono,
      email: this.email,
      edad: this.edad,
      contrasenha: this.contrasenha,
      rol: 'CLIENTE',
      activo: true
    };

    // Realizar la petición SOLO después de validaciones
    this.http.post('http://localhost:8080/auth/register', usuarioDto)
      .subscribe({
        next: () => {
          alert('✅ Registro exitoso. Verifica tu correo.');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = err.error || 'Error desconocido';
        }
      });
  }

  irPoliticas() {
    this.router.navigate(['/politicas-condiciones']);
  }
}
