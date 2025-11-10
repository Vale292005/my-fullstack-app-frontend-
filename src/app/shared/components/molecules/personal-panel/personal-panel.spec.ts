import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPanel } from './personal-panel';

describe('PersonalPanel', () => {
  let component: PersonalPanel;
  let fixture: ComponentFixture<PersonalPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
