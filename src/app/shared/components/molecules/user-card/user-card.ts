import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Button} from '../../atoms/button/button';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.css']
})
export class UserCard {
  @Input() nombre = 'Juan Pérez';
  @Input() usuario = 'jperez89';
  @Input() correo = 'juan.perez@email.com';
  @Input() rol = 'Administrador';
  @Input() imagen = '/tv.png';
}
