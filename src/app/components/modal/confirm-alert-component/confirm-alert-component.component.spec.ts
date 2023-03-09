import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAlertComponentComponent } from './confirm-alert-component.component';

describe('ConfirmAlertComponentComponent', () => {
  let component: ConfirmAlertComponentComponent;
  let fixture: ComponentFixture<ConfirmAlertComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmAlertComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAlertComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
