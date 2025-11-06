import { Component } from '@angular/core';
import { Dropdown } from '../../atoms/dropdown/dropdown';
import {Label} from '../../atoms/label/label';

@Component({
  selector: 'app-arrival-departure',
  standalone: true,
  imports: [Dropdown, Label],
  templateUrl: './arrival-departure.html',
  styleUrls: ['./arrival-departure.css'],
})
export class ArrivalDeparture {}

