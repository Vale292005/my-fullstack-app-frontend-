import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalDeparture } from './arrival-departure';

describe('ArrivalDeparture', () => {
  let component: ArrivalDeparture;
  let fixture: ComponentFixture<ArrivalDeparture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrivalDeparture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrivalDeparture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
