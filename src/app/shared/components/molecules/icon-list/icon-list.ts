import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon } from '../../atoms/icon/icon';
@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.html',
  standalone: true,
  imports: [CommonModule, Icon],
  styleUrls: ['./icon-list.css']
})
export class IconList {
  icons = [
    { icon: '/pet-friendly.png', label: 'Pet Friendly' },
    { icon: '/accesibilidad.png', label: 'Accesibilidad' },
    { icon: '/spa.png', label: 'Spa' },
    { icon: '/gym.png', label: 'Gym' },
    { icon: '/wifi.png', label: 'Wifi' },
    { icon: '/tv.png', label: 'Tv' },
    { icon: '/climatizacion.png', label: 'Climatización' },
    { icon: '/banio-privado.png', label: 'Baño Privado' },
    { icon: '/desayuno-incluido.png', label: 'Desayuno Incluido' },
    { icon: '/lavanderia.png', label: 'Lavandería' },
    { icon: '/parqueadero.png', label: 'Parqueadero' },
    { icon: '/montania.png', label: 'Montaña' },
    { icon: '/balcon.png', label: 'Balcón' },
    { icon: '/piscina.png', label: 'Piscina' },
    { icon: '/jardin.png', label: 'Jardín' },
  ];
}


