
import { Component, Input } from '@angular/core';
import {IconList} from '../icon-list/icon-list';
import {Button} from '../../atoms/button/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hotel-component',
  templateUrl: './hotel-component.html',
  standalone: true,
  imports: [
    IconList, Button
  ],
  styleUrls: ['./hotel-component.css']
})
export class HotelComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() rating!: number;
  @Input() imageUrl!: string;
  @Input() icons: { icon: string; label: string }[] = [];
  constructor(private router: Router) {}

  reservar() {
    this.router.navigate(['/alojamiento']);
  }
}

