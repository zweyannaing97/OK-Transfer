import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-department-modal',
  templateUrl: './department-modal.component.html',
  styleUrls: ['./department-modal.component.scss']
})
export class DepartmentModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DepartmentModalComponent>) { }

  ngOnInit(): void {
  }

  
  onDismiss(){
    this.dialogRef.close();
  }

}
