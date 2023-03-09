import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {TransferModalComponent} from "../../../../modal/transfer-modal/transfer-modal.component";

@Component({
  selector: 'app-main-to-cash-back-listing',
  templateUrl: './main-to-cash-back-listing.component.html',
  styleUrls: ['./main-to-cash-back-listing.component.scss']
})
export class MainToCashBackListingComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(TransferModalComponent, {
      width: '1000px',
      data: {}
    });
  }

  ngOnInit(): void {
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['merchantAccNumber', 'transactionId', 'merchantAccName', 'transferAmnt', 'dateTime'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  merchantAccNumber: string;
  transactionId: string;
  merchantAccName: string;
  transferAmnt: string;
  dateTime: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  { merchantAccNumber: '+95 09421970987', transactionId: '00005695242', merchantAccName: 'U Aye', transferAmnt: '100,000', dateTime:'Tue, 09-Jan-2021 10:11:25'},
  { merchantAccNumber: '+95 097484454998', transactionId: '000055435437', merchantAccName: 'U Mya', transferAmnt: '250,000', dateTime:'Wed, 10-Jan-2021 12:04:45'},
  { merchantAccNumber: '+95 0987984545', transactionId: '0000658548', merchantAccName: 'Daw Sein', transferAmnt: '300,500', dateTime:'Fri, 12-Jan-2021 8:00:27'},
  { merchantAccNumber: '+95 092527764178', transactionId: '00006787471', merchantAccName: 'U Kyaw', transferAmnt: '254,000', dateTime:'Sat, 13-Jan-2021 09:09:45'},
  { merchantAccNumber: '+95 09421970987', transactionId: '00005695242', merchantAccName: 'U Aye', transferAmnt: '100,000', dateTime:'Tue, 09-Jan-2021 10:11:25'},

];
