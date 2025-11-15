import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-text.html',
  styleUrl: './input-text.css'
})
export class InputText {
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() model: any;

}
