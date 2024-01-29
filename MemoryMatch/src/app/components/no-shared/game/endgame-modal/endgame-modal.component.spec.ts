import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndgameModalComponent } from './endgame-modal.component';

describe('EndgameModalComponent', () => {
  let component: EndgameModalComponent;
  let fixture: ComponentFixture<EndgameModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndgameModalComponent]
    });
    fixture = TestBed.createComponent(EndgameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
