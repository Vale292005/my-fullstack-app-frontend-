import { Component } from '@angular/core';
import {HotelComponent} from '../../shared/components/molecules/hotel-component/hotel-component';
import {MenuTabs} from '../../shared/components/molecules/menu-tabs/menu-tabs';
import {ArrivalDeparture} from '../../shared/components/molecules/arrival-departure/arrival-departure';
import {Header} from '../../shared/components/molecules/header/header';
import {IconList} from '../../shared/components/molecules/icon-list/icon-list';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.html',
  standalone: true,
  imports: [
    HotelComponent,
    MenuTabs,
    ArrivalDeparture,
    Header,
    IconList
  ],
  styleUrls: ['./resultados.css']
})
export class Resultados {
  hotels = [
    {
      title: 'Hotel Oasis',
      description:
        'El Hotel Oasis del Mar es un acogedor resort frente al mar que combina comodidad moderna con el encanto natural de la costa mexicana. Ideal para vacaciones familiares o escapadas románticas...',
      rating: 5,
      imageUrl: '/hotel1.jpg',
      icons: [
        { icon: '/wifi.png', label: 'Wifi' },
        { icon: '/tv.png', label: 'Tv' },
        { icon: '/climatizacion.png', label: 'Climatización' },
        { icon: '/banio-privado.png', label: 'Baño Privado' },
        { icon: '/desayuno-incluido.png', label: 'Desayuno Incluido' },
        { icon: '/lavanderia.png', label: 'Lavandería' },
        { icon: '/parqueadero.png', label: 'Parqueadero' }
      ]
    },
    {
      title: 'Hotel Oasis',
      description:
        'El Hotel Oasis del Mar es un acogedor resort frente al mar que combina comodidad moderna con el encanto natural de la costa mexicana. Ideal para vacaciones familiares o escapadas románticas...',
      rating: 5,
      imageUrl: '/hotel2.jpg',
      icons: [
        { icon: '/wifi.png', label: 'Wifi' },
        { icon: '/tv.png', label: 'Tv' },
        { icon: '/climatizacion.png', label: 'Climatización' },
        { icon: '/banio-privado.png', label: 'Baño Privado' },
        { icon: '/desayuno-incluido.png', label: 'Desayuno Incluido' },
        { icon: '/lavanderia.png', label: 'Lavandería' },
        { icon: '/parqueadero.png', label: 'Parqueadero' }
      ]
    },
    {
      title: 'Hotel Oasis',
      description:
        'El Hotel Oasis del Mar es un acogedor resort frente al mar que combina comodidad moderna con el encanto natural de la costa mexicana. Ideal para vacaciones familiares o escapadas románticas...',
      rating: 5,
      imageUrl: '/hotel3.jpg',
      icons: [
        { icon: '/wifi.png', label: 'Wifi' },
        { icon: '/tv.png', label: 'Tv' },
        { icon: '/climatizacion.png', label: 'Climatización' },
        { icon: '/banio-privado.png', label: 'Baño Privado' },
        { icon: '/desayuno-incluido.png', label: 'Desayuno Incluido' },
        { icon: '/lavanderia.png', label: 'Lavandería' },
        { icon: '/parqueadero.png', label: 'Parqueadero' }
      ]
    }
  ];
}

