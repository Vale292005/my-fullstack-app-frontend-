import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './shared/components/atoms/button/button';
import {InputSearch} from './shared/components/atoms/input-search/input-search';
import {Dropdown} from './shared/components/atoms/dropdown/dropdown';
import {Switch} from './shared/components/atoms/switch/switch';
import {Label} from './shared/components/atoms/label/label';
import {Input} from './shared/components/atoms/input/input';
import {CardComment} from './shared/components/molecules/card-comment/card-comment';
import {Icon} from './shared/components/atoms/icon/icon';
import {MenuTabs} from './shared/components/molecules/menu-tabs/menu-tabs';
import {ArrivalDeparture} from './shared/components/molecules/arrival-departure/arrival-departure';
import {IconList} from './shared/components/molecules/icon-list/icon-list';
import {HotelCard} from './shared/components/molecules/hotel-card/hotel-card';
import {HotelComponent} from './shared/components/molecules/hotel-component/hotel-component';
import {UserCard} from './shared/components/molecules/user-card/user-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button, InputSearch, Switch, Dropdown, Label, Input, CardComment, Icon, MenuTabs, ArrivalDeparture, IconList, HotelCard, HotelComponent, UserCard],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend');
  filterPets(selected: boolean) {
    console.log("Filtro PET Friendly seleccionado:", selected);
  }
}

