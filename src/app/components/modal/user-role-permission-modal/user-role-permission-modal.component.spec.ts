import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRolePermissionModalComponent } from './user-role-permission-modal.component';

describe('UserRolePermissionModalComponent', () => {
  let component: UserRolePermissionModalComponent;
  let fixture: ComponentFixture<UserRolePermissionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRolePermissionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRolePermissionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
