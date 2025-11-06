import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone:true,
  templateUrl: './icon.html',
  styleUrls: ['./icon.css']
})
export class Icon {
  @Input() icon: string = 'assets/pet-friendly.png';
  @Input() label: string = 'Pet Friendly';
  @Input() selected: boolean = false;

  @Output() selectedChange = new EventEmitter<boolean>();
  toggleSelect() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
