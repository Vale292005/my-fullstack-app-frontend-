import { Component } from '@angular/core';
import {InputSearch} from '../../atoms/input-search/input-search';
import {Button} from '../../atoms/button/button';

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
  // Métodos para manejar eventos (login, registro)
  onLogin() {
    // lógica de login
  }

  onRegister() {
    // lógica de registro
  }
}

