import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transfer-modal',
  templateUrl: './transfer-modal.component.html',
  styleUrls: ['./transfer-modal.component.scss']
})
export class TransferModalComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<TransferModalComponent>) { }
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
