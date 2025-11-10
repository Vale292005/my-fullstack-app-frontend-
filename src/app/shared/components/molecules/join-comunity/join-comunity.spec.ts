import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinComunity } from './join-comunity';

describe('JoinComunity', () => {
  let component: JoinComunity;
  let fixture: ComponentFixture<JoinComunity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinComunity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinComunity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
