import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traditional-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traditional-card.html',
  styleUrls: ['./traditional-card.css']
})
export class TraditionalCard {

  // 🔹 Lista de imágenes (ajusta las rutas a las que tengas en tu proyecto)
  images: string[] = [
    'tv.png',
    'tv.png',
    'tv.png',
    'tv.png'
  ];

}


