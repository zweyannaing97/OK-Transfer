import { Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-role-permission-modal',
  templateUrl: './user-role-permission-modal.component.html',
  styleUrls: ['./user-role-permission-modal.component.scss']
})
export class UserRolePermissionModalComponent  {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<UserRolePermissionModalComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }

}
