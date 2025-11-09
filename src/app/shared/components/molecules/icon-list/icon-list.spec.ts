import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconList } from './icon-list';

describe('IconList', () => {
  let component: IconList;
  let fixture: ComponentFixture<IconList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
