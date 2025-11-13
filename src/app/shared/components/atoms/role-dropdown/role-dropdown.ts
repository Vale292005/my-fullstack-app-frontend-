import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-role-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './role-dropdown.html',
  styleUrls: ['./role-dropdown.css']
})
export class RoleDropdown {
  @Output() roleSelected = new EventEmitter<string>();

  selectedRole: string = 'Rol';
  isOpen: boolean = false;
  roles: string[] = ['Administrador', 'Huésped', 'Anfitrión'];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectRole(role: string) {
    this.selectedRole = role;
    this.isOpen = false;
    this.roleSelected.emit(role);
  }

  closeDropdown() {
    this.isOpen = false;
  }
}
