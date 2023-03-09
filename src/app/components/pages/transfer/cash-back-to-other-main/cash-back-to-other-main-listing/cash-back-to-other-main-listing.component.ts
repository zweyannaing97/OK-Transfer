import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {CashToOtherMainFilterComponent} from "../../../../modal/transfer-modal/cash-to-other-main-filter/cash-to-other-main-filter.component";

@Component({
  selector: 'app-cash-back-to-other-main-listing',
  templateUrl: './cash-back-to-other-main-listing.component.html',
  styleUrls: ['./cash-back-to-other-main-listing.component.scss']
})
export class CashBackToOtherMainListingComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CashToOtherMainFilterComponent, {
      width: '1000px',
      data: {}
    });
  }

  ngOnInit(): void {
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['otherCashNo','otherCashname','transactionId','merchantAccNumber', 'merchantAccName', 'transferAmnt', 'dateTime'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  merchantAccNumber: string;
  transactionId: string;
  merchantAccName: string;
  otherCashNo:string;
  otherCashname:string;
  transferAmnt: string;
  dateTime: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  { merchantAccNumber: '+95 09421970987',otherCashNo:"+95 0948551786",otherCashname:"U Aye", transactionId: '00005695242', merchantAccName: 'U Aye', transferAmnt: '100,000', dateTime:'Tue, 09-Jan-2021 10:11:25'},
  { merchantAccNumber: '+95 097484454998',otherCashNo:"+95 0948551786",otherCashname:"U Aye", transactionId: '000055435437', merchantAccName: 'U Mya', transferAmnt: '250,000', dateTime:'Wed, 10-Jan-2021 12:04:45'},
  { merchantAccNumber: '+95 0987984545',otherCashNo:"+95 0948551786",otherCashname:"U Aye", transactionId: '0000658548', merchantAccName: 'Daw Sein', transferAmnt: '300,500', dateTime:'Fri, 12-Jan-2021 8:00:27'},
  { merchantAccNumber: '+95 092527764178',otherCashNo:"+95 0948551786",otherCashname:"U Aye", transactionId: '00006787471', merchantAccName: 'U Kyaw', transferAmnt: '254,000', dateTime:'Sat, 13-Jan-2021 09:09:45'},
  { merchantAccNumber: '+95 09421970987',otherCashNo:"+95 0948551786",otherCashname:"U Aye", transactionId: '00005695242', merchantAccName: 'U Aye', transferAmnt: '100,000', dateTime:'Tue, 09-Jan-2021 10:11:25'},

];
