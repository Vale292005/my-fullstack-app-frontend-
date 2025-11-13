import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Comment {
  username: string;
  text: string;
  rating: number;
}

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./card-comment.css']
})
export class CardComment {
  @Input() title: string = 'Sección de Comentarios';
  @Input() comments: Comment[] = [];

  getMangoArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}



