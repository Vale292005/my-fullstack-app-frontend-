import {Component, Input} from '@angular/core';
import {JoinComunity} from '../../shared/components/molecules/join-comunity/join-comunity';
import {TraditionalCard} from '../../shared/components/molecules/traditional-card/traditional-card';
import {InputSearch} from '../../shared/components/atoms/input-search/input-search';
import {MenuTabs} from '../../shared/components/molecules/menu-tabs/menu-tabs';
import {IconList} from '../../shared/components/molecules/icon-list/icon-list';
import {ArrivalDeparture} from '../../shared/components/molecules/arrival-departure/arrival-departure';
import {HotelComponent} from '../../shared/components/molecules/hotel-component/hotel-component';
import { Button } from '../../shared/components/atoms/button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    JoinComunity,
    TraditionalCard,
    InputSearch,
    MenuTabs,
    IconList,
    ArrivalDeparture,
    HotelComponent,
    Button,
    RouterLink
  ],
  templateUrl: './home.html',
  standalone: true,
  styleUrls: ['./home.css']  // <-- CORREGIDO AQUÍ
})
export class Home {
  @Input() icons: { icon: string; label: string }[] = [];

}




