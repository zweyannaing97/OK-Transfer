import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserRolePermissionComponent } from './create-user-role-permission/create-user-role-permission.component';
import { EditUserRolePermissionComponent } from './edit-user-role-permission/edit-user-role-permission.component';
import { UserRolePermissionListingComponent } from './user-role-permission-listing/user-role-permission-listing.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'',
        component:  UserRolePermissionListingComponent
      },

      {
        path:'create-user-role-permission',
        component: CreateUserRolePermissionComponent
      },
      {
        path:'edit-user-role-permission',
        component: EditUserRolePermissionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRolePermissionRoutingModule { }
