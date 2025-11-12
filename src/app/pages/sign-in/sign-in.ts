import { Component } from '@angular/core';
import {IconList} from '../../shared/components/molecules/icon-list/icon-list';
import {ArrivalDeparture} from '../../shared/components/molecules/arrival-departure/arrival-departure';
import {MenuTabs} from '../../shared/components/molecules/menu-tabs/menu-tabs';
import {Label} from '../../shared/components/atoms/label/label';
import {Input} from '../../shared/components/atoms/input/input';
import {Button} from '../../shared/components/atoms/button/button';
import {JoinComunity} from '../../shared/components/molecules/join-comunity/join-comunity';
import {Header} from '../../shared/components/molecules/header/header';

@Component({
  selector: 'app-sign-in',
  imports: [    IconList,
    ArrivalDeparture,
    MenuTabs,
    Label,
    Input,
    Button,
    JoinComunity,
    Header],
  templateUrl: './sign-in.html',
  standalone: true,
  styleUrl: './sign-in.css'
})
export class SignIn {

}
