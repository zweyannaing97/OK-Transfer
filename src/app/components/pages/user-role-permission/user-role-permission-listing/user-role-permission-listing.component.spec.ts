import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRolePermissionListingComponent } from './user-role-permission-listing.component';

describe('UserRolePermissionListingComponent', () => {
  let component: UserRolePermissionListingComponent;
  let fixture: ComponentFixture<UserRolePermissionListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRolePermissionListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRolePermissionListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
