import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelMenuComponent } from './travel-menu.component';

describe('TravelMenuComponent', () => {
  let component: TravelMenuComponent;
  let fixture: ComponentFixture<TravelMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
