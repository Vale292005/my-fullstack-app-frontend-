import { Component } from '@angular/core';
import {InputSearch} from '../../atoms/input-search/input-search';
import {Button} from '../../atoms/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  standalone: true,
  imports: [
    InputSearch,
    Button
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
}

