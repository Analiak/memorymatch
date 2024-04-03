import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowModalComponent } from './window-modal.component';

describe('WindowModalComponent', () => {
  let component: WindowModalComponent;
  let fixture: ComponentFixture<WindowModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindowModalComponent]
    });
    fixture = TestBed.createComponent(WindowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
