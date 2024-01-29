import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonFamilyCloudComponent } from './simpson-family-cloud.component';

describe('SimpsonFamilyCloudComponent', () => {
  let component: SimpsonFamilyCloudComponent;
  let fixture: ComponentFixture<SimpsonFamilyCloudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsonFamilyCloudComponent]
    });
    fixture = TestBed.createComponent(SimpsonFamilyCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
