import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-main-to-other-cash-filter',
  templateUrl: './main-to-other-cash-filter.component.html',
  styleUrls: ['./main-to-other-cash-filter.component.scss']
})
export class MainToOtherCashFilterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MainToOtherCashFilterComponent>) { }
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
