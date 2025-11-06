import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface MenuTabItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-menu-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-tabs.html',
  styleUrls: ['./menu-tabs.css'],
})
export class MenuTabs {
  @Input() items: MenuTabItem[] = [];
  activeTab: string = '';

  constructor(private router: Router) {}

  selectTab(item: MenuTabItem) {
    this.activeTab = item.route;
    this.router.navigate([item.route]);
  }
}

