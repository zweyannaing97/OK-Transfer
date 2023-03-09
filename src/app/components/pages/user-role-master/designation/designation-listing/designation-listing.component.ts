import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DesignationModalComponent } from 'src/app/components/modal/user-role-master-modal/designation-modal/designation-modal.component';

@Component({
  selector: 'app-designation-listing',
  templateUrl: './designation-listing.component.html',
  styleUrls: ['./designation-listing.component.scss']
})
export class DesignationListingComponent implements OnInit {

  constructor(public dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(DesignationModalComponent , {
      width: '900px',
      data: {}
    });
  }


  ngOnInit(): void {
  }

  displayedColumns: string[] = ['designName', 'remark', 'isActive', 'createdTime', 'updatedTime', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  designName: string;
  remark: string;
  isActive: boolean;
  action: string;
  createdTime:string;
  updatedTime:string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {designName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:false, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',  action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:false, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:false, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',   action:'assets/img/Icon/Edit Pattern.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:false, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-',action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {designName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:false, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

];

