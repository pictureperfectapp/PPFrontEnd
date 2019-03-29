import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessingViewComponent } from './guessing-view.component';

describe('GuessingViewComponent', () => {
  let component: GuessingViewComponent;
  let fixture: ComponentFixture<GuessingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
