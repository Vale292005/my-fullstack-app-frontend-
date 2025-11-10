import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalCard } from './traditional-card';

describe('TraditionalCard', () => {
  let component: TraditionalCard;
  let fixture: ComponentFixture<TraditionalCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraditionalCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraditionalCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
