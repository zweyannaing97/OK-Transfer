import { Component,HostListener, ViewChild  , Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-dashboard-filter',
  templateUrl: './dashboard-filter.component.html',
  styleUrls: ['./dashboard-filter.component.scss']
})
export class DashboardFilterComponent  {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  widgetType: string | undefined;

  constructor(public dialogRef: MatDialogRef<DashboardFilterComponent>,@Inject(MAT_DIALOG_DATA) private _data: any,) {
    this.widgetType = _data.type;
  }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }

}

