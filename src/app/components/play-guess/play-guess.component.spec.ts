import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayGuessComponent } from './play-guess.component';

describe('PlayGuessComponent', () => {
  let component: PlayGuessComponent;
  let fixture: ComponentFixture<PlayGuessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayGuessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
