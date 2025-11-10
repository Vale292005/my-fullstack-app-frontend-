import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon } from '../../atoms/icon/icon';
@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.html',
  standalone: true,
  imports: [CommonModule, Icon],
  styleUrls: ['./icon-list.css']
})
export class IconList {@Input() icons: { icon: string; label: string }[] = [];
}


