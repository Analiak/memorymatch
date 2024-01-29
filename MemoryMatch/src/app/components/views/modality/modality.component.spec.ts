import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalityComponent } from './modality.component';

describe('ModalityComponent', () => {
  let component: ModalityComponent;
  let fixture: ComponentFixture<ModalityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalityComponent]
    });
    fixture = TestBed.createComponent(ModalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
