import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRolePermissionRoutingModule } from './user-role-permission-routing.module';
import { UserRolePermissionListingComponent } from './user-role-permission-listing/user-role-permission-listing.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateUserRolePermissionComponent } from './create-user-role-permission/create-user-role-permission.component';
import { EditUserRolePermissionComponent } from './edit-user-role-permission/edit-user-role-permission.component';


@NgModule({
  declarations: [
    UserRolePermissionListingComponent,
    CreateUserRolePermissionComponent,
    EditUserRolePermissionComponent
  ],
  imports: [
    CommonModule,
    UserRolePermissionRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule
  ]
})
export class UserRolePermissionModule { }
