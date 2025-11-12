import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alojamienmto } from './alojamienmto';

describe('Alojamienmto', () => {
  let component: Alojamienmto;
  let fixture: ComponentFixture<Alojamienmto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alojamienmto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alojamienmto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
