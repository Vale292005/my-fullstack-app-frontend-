import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './shared/components/atoms/button/button';
import {InputSearch} from './shared/components/atoms/input-search/input-search';
import {Dropdown} from './shared/components/atoms/dropdown/dropdown';
import {Switch} from './shared/components/atoms/switch/switch';
import {Label} from './shared/components/atoms/label/label';
import {Input} from './shared/components/atoms/input/input';
import {CardComment} from './shared/components/molecules/card-comment/card-comment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button, InputSearch, Switch, Dropdown, Label, Input, CardComment],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend');
}

