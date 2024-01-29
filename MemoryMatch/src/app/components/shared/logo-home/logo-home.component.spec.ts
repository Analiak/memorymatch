import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoHomeComponent } from './logo-home.component';

describe('LogoHomeComponent', () => {
  let component: LogoHomeComponent;
  let fixture: ComponentFixture<LogoHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoHomeComponent]
    });
    fixture = TestBed.createComponent(LogoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
