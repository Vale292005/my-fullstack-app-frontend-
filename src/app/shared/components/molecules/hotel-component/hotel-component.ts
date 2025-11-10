
import { Component, Input } from '@angular/core';
import {IconList} from '../icon-list/icon-list';
import {Button} from '../../atoms/button/button';

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
}

