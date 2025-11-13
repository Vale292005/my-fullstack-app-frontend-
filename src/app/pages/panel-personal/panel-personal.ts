import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/components/molecules/header/header';
import { MenuTabs } from '../../shared/components/molecules/menu-tabs/menu-tabs';
import { IconList } from '../../shared/components/molecules/icon-list/icon-list';
import { CardComment } from '../../shared/components/molecules/card-comment/card-comment';
import { TraditionalCard } from '../../shared/components/molecules/traditional-card/traditional-card';

@Component({
  selector: 'app-panel-personal',
  standalone: true,
  imports: [CommonModule, Header, MenuTabs, IconList, CardComment, TraditionalCard],
  templateUrl: './panel-personal.html',
  styleUrls: ['./panel-personal.css']
})
export class PanelPersonal {}
