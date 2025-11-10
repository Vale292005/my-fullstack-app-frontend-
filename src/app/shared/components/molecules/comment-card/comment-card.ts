import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Button} from '../../atoms/button/button';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.html',
  standalone: true,
  imports: [
    FormsModule,
    Button
  ],
  styleUrls: ['./comment-card.css']
})
export class CommentCard {
  comentario: string = '';

  onSubmit() {
    if (this.comentario.trim()) {
      console.log('Comentario enviado:', this.comentario);
      alert('Gracias por tu comentario!');
      this.comentario = '';
    }
  }
}

