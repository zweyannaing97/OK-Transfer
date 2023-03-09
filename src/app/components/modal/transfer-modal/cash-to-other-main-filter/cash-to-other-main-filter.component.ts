import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import {FormControl} from "@angular/forms";
@Component({
  selector: 'app-cash-to-other-main-filter',
  templateUrl: './cash-to-other-main-filter.component.html',
  styleUrls: ['./cash-to-other-main-filter.component.scss']
})
export class CashToOtherMainFilterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CashToOtherMainFilterComponent>) { }
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
