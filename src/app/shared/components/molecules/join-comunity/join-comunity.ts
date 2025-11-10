import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Button} from '../../atoms/button/button';

@Component({
  selector: 'app-join-comunity',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './join-comunity.html',
  styleUrls: ['./join-comunity.css']
})
export class JoinComunity { }

