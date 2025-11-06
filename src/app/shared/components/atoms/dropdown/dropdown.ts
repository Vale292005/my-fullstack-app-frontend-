import {Component, Input, ViewChild} from '@angular/core';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  templateUrl: './dropdown.html',
  styleUrls: ['./dropdown.css'],
  imports: [
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule
  ]
})
export class Dropdown {
  @Input() label: string = 'Selecciona fecha';
  @Input() icon: string = '/dropdown.png'; // ruta dentro de public
  selectedDate: Date | null = null;

  @ViewChild('picker') picker!: MatDatepicker<any>;

  onDatepickerOpened() {
    setTimeout(() => {
      const panel = document.querySelector('.mat-datepicker-content') as HTMLElement;
      if (panel) {
        panel.style.backgroundColor = '#fff'; // color de fondo deseado
      }
    }, 0);
  }

}

