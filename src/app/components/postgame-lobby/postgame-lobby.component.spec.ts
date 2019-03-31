import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgameLobbyComponent } from './postgame-lobby.component';

describe('PostgameLobbyComponent', () => {
  let component: PostgameLobbyComponent;
  let fixture: ComponentFixture<PostgameLobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostgameLobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgameLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
