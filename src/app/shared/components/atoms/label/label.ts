import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-label',
  standalone:true,
  templateUrl: './label.html',
  styleUrl: './label.css'
})
export class Label {
  @Input() label: string = '';
}
