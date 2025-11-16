import { Component } from '@angular/core';
import {CommentCard} from '../../shared/components/molecules/comment-card/comment-card';
import {HotelCard} from '../../shared/components/molecules/hotel-card/hotel-card';
import {MenuTabs} from '../../shared/components/molecules/menu-tabs/menu-tabs';
import {IconList} from '../../shared/components/molecules/icon-list/icon-list';
import {Header} from '../../shared/components/molecules/header/header';
import {CardComment} from '../../shared/components/molecules/card-comment/card-comment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-alojamienmto',
  imports: [
    CommentCard,
    HotelCard,
    MenuTabs,
    IconList,
    Header,
    CardComment
  ],
  standalone:true,
  templateUrl: './alojamienmto.html',
  styleUrl: './alojamienmto.css'
})
export class Alojamienmto {
  constructor(private router: Router) {}

  goToReservation() {
    this.router.navigate(['/reservas']);
  }

}
