import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-pay-to-filter',
  templateUrl: './pay-to-filter.component.html',
  styleUrls: ['./pay-to-filter.component.scss']
})
export class PayToFilterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PayToFilterComponent>) { }
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date()

  ngOnInit(): void {
  }
  isShown: boolean | undefined;

  toggleShow() {

    this.isShown = true;
  }
  onDismiss(){
    this.dialogRef.close();
  }


}
