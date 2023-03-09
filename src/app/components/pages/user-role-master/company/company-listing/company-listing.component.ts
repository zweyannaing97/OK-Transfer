import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CompanyFilterComponent } from 'src/app/components/modal/user-role-master-modal/company-filter/company-filter.component';
@Component({
  selector: 'app-company-listing',
  templateUrl: './company-listing.component.html',
  styleUrls: ['./company-listing.component.scss']
})
export class CompanyListingComponent implements OnInit {

  constructor(public dialog: MatDialog) {

   }

   openDialog() {
    this.dialog.open(CompanyFilterComponent , {
      width: '900px',
      data: {}
    });
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['companyName', 'remark', 'isActive', 'createdTime', 'updatedTime', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  companyName: string;
  remark: string;
  isActive: boolean;
  action: string;
  createdTime:string;
  updatedTime:string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',  action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:false, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'Sat, 17-Jan-2022 12:24:07', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',  action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',  action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:false, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'Sat, 17-Jan-2022 12:24:07', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',  action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',  action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:false, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'Sat, 17-Jan-2022 12:24:07', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',  action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',  action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:false, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'Sat, 17-Jan-2022 12:24:07', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',  action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',  action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:false, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'Sat, 17-Jan-2022 12:24:07', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

];

