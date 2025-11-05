import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-search',
  standalone: true,
  templateUrl: './input-search.html',
  styleUrl: './input-search.css'
})
export class InputSearch {
 @Input() placeholder: string = 'Buscar...'
}
