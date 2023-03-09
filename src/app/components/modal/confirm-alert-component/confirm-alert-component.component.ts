import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogData } from 'src/app/shared/utils/modal';
import {Location} from '@angular/common';

@Component({
  selector: 'app-confirm-alert-component',
  templateUrl: './confirm-alert-component.component.html',
  styleUrls: ['./confirm-alert-component.component.scss']
})
export class ConfirmAlertComponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmAlertComponentComponent>, private _location: Location,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData,
    public router: Router) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this._location.back();
    // this.dialogRef.close(false);
  }

  confirmtask(){
    this.router.navigate(['/auth/login']);
    this.dialogRef.close(true);
  }
}

