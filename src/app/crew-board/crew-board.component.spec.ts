import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewBoardComponent } from './crew-board.component';

describe('CrewBoardComponent', () => {
  let component: CrewBoardComponent;
  let fixture: ComponentFixture<CrewBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
