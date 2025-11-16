import { Component } from '@angular/core';
import { Header } from '../../shared/components/molecules/header/header';
import { MenuTabs } from '../../shared/components/molecules/menu-tabs/menu-tabs';
import { IconList } from '../../shared/components/molecules/icon-list/icon-list';
import { Button } from '../../shared/components/atoms/button/button';
import { Label } from '../../shared/components/atoms/label/label';
import { Input } from '../../shared/components/atoms/input/input';

@Component({
  selector: 'app-reserva',
  imports: [Header, MenuTabs, IconList, Button, Label, Input],
  standalone: true,
  templateUrl: './reserva.html',
  styleUrls: ['./reserva.css']
})
export class Reserva {

  // 🔹 Aquí pones tu Payment Link creado en Stripe Dashboard
  private paymentLink = 'https://buy.stripe.com/test_4gM00jf3adASc3t27BdEs00';

  pagar() {
    // 🔹 Redirige directamente al Payment Link
    window.location.href = this.paymentLink;
  }
}

