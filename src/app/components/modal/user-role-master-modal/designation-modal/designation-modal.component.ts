import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-designation-modal',
  templateUrl: './designation-modal.component.html',
  styleUrls: ['./designation-modal.component.scss']
})
export class DesignationModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DesignationModalComponent>) { }

  ngOnInit(): void {
  }
  
  onDismiss(){
    this.dialogRef.close();
  }
}
