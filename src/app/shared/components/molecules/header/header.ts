import { Component } from '@angular/core';
import {InputSearch} from '../../atoms/input-search/input-search';
import {Button} from '../../atoms/button/button';
import { Router } from '@angular/router';
import {PersonalPanel} from '../personal-panel/personal-panel';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  standalone: true,
  imports: [
    InputSearch,
    Button,
    PersonalPanel
  ],
  styleUrls: ['./header.css']
})
export class Header {
  constructor(private router: Router) {}

  // Métodos para manejar eventos (login, registro)
  onLogin() {
    this.router.navigate(['/login']);
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
  panelOpen = false;

  togglePanel() {
    this.panelOpen = !this.panelOpen;
    console.log('Panel abierto?', this.panelOpen); // para verificar en consola
  }
}

