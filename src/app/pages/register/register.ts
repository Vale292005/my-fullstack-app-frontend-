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
import {InputText} from '../../shared/components/atoms/input-text/input-text';
import {CommonModule} from '@angular/common';

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
  edad: string = '2000-01-01';
  // guardaremos como string para enviar LocalDate al backend
  contrasenha: string = '';
  aceptaTerminos: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  registrarUsuario() {
    // Validaciones básicas
    if (!this.email || !this.contrasenha || !this.nombre || !this.telefono || !this.edad) {
      this.errorMessage = '⚠️ Completa todos los campos';
      return;
    }
    if (!this.aceptaTerminos) {
      this.errorMessage = '⚠️ Debes aceptar los términos y condiciones';
      return;
    }

    const usuarioDto = {
      nombre: this.nombre,
      telefono: this.telefono,
      email: this.email,
      edad: this.edad, // enviar string en formato YYYY-MM-DD
      contrasenha: this.contrasenha,
      rol: 'CLIENTE', // valor por defecto
      activo: true  // se puede cambiar según la lógica de tu backend
    };

    this.router.navigate(['/login']);

    this.http.post('http://localhost:8080/auth/register', usuarioDto)
      .subscribe({
        next: (res: any) => {
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


