import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input-search.html',
  styleUrls: ['./input-search.css']
})
export class InputSearch {
  @Input() placeholder: string = 'Buscar...';
  @Output() search = new EventEmitter<any>(); // Emitirá los resultados de la API

  query: string = '';

  constructor(private http: HttpClient) {}

  onSearch() {
    // Llamada GET a tu API
    this.http.get<any[]>(`http://localhost:8080/hoteles`, {
      params: { q: this.query } // Opcional: enviar la query como parámetro
    }).subscribe({
      next: (data) => {
        this.search.emit(data); // Emitimos los resultados hacia el componente padre
      },
      error: (err) => {
        console.error('Error al buscar hoteles', err);
      }
    });
  }
}
