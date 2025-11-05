import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card
import {from} from 'rxjs';

-Comment } from './card-comment';

describe('CardComment', () => {
  let component: Card-Comment;
  let fixture: ComponentFixture<Card-Comment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card-Comment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card-Comment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
