import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/components/molecules/header/header';
import { MenuTabs } from '../../shared/components/molecules/menu-tabs/menu-tabs';
import { JoinComunity } from '../../shared/components/molecules/join-comunity/join-comunity';

@Component({
  selector: 'app-politicas-condiciones',
  standalone: true,
  imports: [CommonModule, Header, MenuTabs, JoinComunity],
  templateUrl: './politicas-condiciones.html',
  styleUrls: ['./politicas-condiciones.css']
})
export class PoliticasCondiciones {}
