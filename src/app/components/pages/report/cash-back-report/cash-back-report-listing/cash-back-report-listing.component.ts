import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-cash-back-report-listing',
  templateUrl: './cash-back-report-listing.component.html',
  styleUrls: ['./cash-back-report-listing.component.scss']
})
export class CashBackReportListingComponent implements OnInit {
  selectedCar: any|string;
  selectedCar2: any|string;
  selectedCar3: any|string;
  selectedCar4: any|string;

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date()
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['refID', 'date', 'transtype', 'transID', 'transform', 'AdMerchantNo', 'AdMerchantName', 'AdMerchantLevel', 'AdMerchantAddress', 'AdMerchantOpName', 'transamount', 'userName', 'dateandtime'];
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
  refID: string;
  date: string;
  transtype: string;
  transID: string;
  transform: string;
  AdMerchantNo: string;
  transamount: string;
  AdMerchantName: string;
  AdMerchantLevel: string;
  AdMerchantAddress: string;
  AdMerchantOpName: string;
  userName: string;
  dateandtime: string;



}


const ELEMENT_DATA: PeriodicElement[] = [
  { refID: '0000215835', date: '18-May-2021',
    transtype: 'Cash Back To Other Main Account', transID: '00005695241',
    transform: 'Mobile Application', AdMerchantNo: '09420186542', AdMerchantName:
      'U Mya', transamount: '10,000', AdMerchantLevel: 'Level 2', AdMerchantAddress: 'No.(22), Dagon Tsp', AdMerchantOpName: 'MPT', userName: 'User 1',dateandtime: 'Fri, 18-May-2021 15:15'},

];


