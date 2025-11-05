import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.html',
  standalone: true,
  styleUrls: ['./card-comment.css']
})
export class CardComment {
  @Input() username: string = 'Usuario';
  @Input() comment: string = 'Este es un comentario de ejemplo.';
  @Input() rating: number = 5; // cantidad de mangos a mostrar

  getMangoArray(): number[] {
    return Array(this.rating).fill(0);
  }
}



