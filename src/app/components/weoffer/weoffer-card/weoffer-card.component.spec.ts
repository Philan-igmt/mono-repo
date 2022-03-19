import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeofferCardComponent } from './weoffer-card.component';

describe('WeofferCardComponent', () => {
  let component: WeofferCardComponent;
  let fixture: ComponentFixture<WeofferCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeofferCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeofferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
