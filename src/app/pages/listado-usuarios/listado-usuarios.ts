import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/components/molecules/header/header';
import { MenuTabs } from '../../shared/components/molecules/menu-tabs/menu-tabs';
import { RoleDropdown } from '../../shared/components/atoms/role-dropdown/role-dropdown';
import { UserCard } from '../../shared/components/molecules/user-card/user-card';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [CommonModule, Header, MenuTabs, RoleDropdown, UserCard],
  templateUrl: './listado-usuarios.html',
  styleUrls: ['./listado-usuarios.css']
})
export class ListadoUsuarios {
  selectedRole: string = 'Rol';

  onRoleChange(role: string) {
    this.selectedRole = role;
  }
}
