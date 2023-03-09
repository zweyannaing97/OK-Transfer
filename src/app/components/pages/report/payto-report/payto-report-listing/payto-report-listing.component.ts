import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-payto-report-listing',
  templateUrl: './payto-report-listing.component.html',
  styleUrls: ['./payto-report-listing.component.scss']
})
export class PaytoReportListingComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date()
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['refID','date','transtype','transID','transform','senderNo','receiverNo','transamount','senderOKName','senderOKType','senderBusinessName','senderOKCategory','senderOKOpName','senderOkLevel','senderOkAddress','receiverOkName','receiverOkType','receiverOkBusinessName','receiverOkCategory','receiverOkOpName','receiverOkLevel','receiverOkAddress','userName','dateandtime'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  isShown: boolean | undefined;

  toggleShow() {

    this.isShown = true;
  }

}
export interface PeriodicElement {
  refID:string,
  date:string,
  transtype:string,
  transID:string,
  transform:string,
  senderNo:string,
  receiverNo:string,
  transamount:string,
  senderOKName:string,
  senderOKType:string,
  senderBusinessName:string,
  senderOKCategory:string,
  senderOKOpName:string,
  senderOkLevel:string,
  senderOkAddress:string,
  receiverOkName:string,
  receiverOkType:string,
  receiverOkBusinessName:string,
  receiverOkCategory:string,
  receiverOkOpName:string,
  receiverOkLevel:string,
  receiverOkAddress:string,
  userName:string,
  dateandtime:string,

}


const ELEMENT_DATA: PeriodicElement[] = [

  { refID: '0000215835', date: '18-May-2021', transtype: 'Cash Back To Other Main Account', transID: '00005695241', transform: 'Mobile Application', senderNo: '09420187903', receiverNo: '09795678681', transamount: '100,000', senderOKName: 'U Aye', senderOKType: 'Merchant', senderBusinessName: 'City Mart', senderOKCategory: 'Super Market', senderOKOpName: 'MPT', senderOkLevel: 'Level 1', senderOkAddress: 'No.(22), Hlaing Tsp', receiverOkName: 'Daw Soe', receiverOkType: 'Merchant', receiverOkBusinessName: 'City Mart', receiverOkCategory: 'Supermarket',receiverOkOpName: 'Telenor',receiverOkLevel: 'Level 1', receiverOkAddress: 'NO(1) Hlaing Tps',userName: 'User 1',dateandtime: 'Fri, 18-May-2021 15:15'},



];


