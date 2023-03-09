import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.scss']
})
export class CompanyFilterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CompanyFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }

}
