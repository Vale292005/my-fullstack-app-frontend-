import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Label } from '../../atoms/label/label';
import {Icon} from '../../atoms/icon/icon';
import {IconList} from '../icon-list/icon-list';

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [CommonModule, Icon, Label, IconList],
  templateUrl: './hotel-card.html',
  styleUrls: ['./hotel-card.css']
})
export class HotelCard {
  // Recibe una lista de labels u objetos con la información del hotel
  @Input() hotels: {
    label: string;
    email: string;
    rating: number;
  }[] = [];
}



