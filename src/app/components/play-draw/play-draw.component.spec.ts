import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayDrawComponent } from './play-draw.component';

describe('PlayDrawComponent', () => {
  let component: PlayDrawComponent;
  let fixture: ComponentFixture<PlayDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
