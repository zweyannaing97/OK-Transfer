import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentModalComponent } from 'src/app/components/modal/user-role-master-modal/department-modal/department-modal.component';
@Component({
  selector: 'app-department-listing',
  templateUrl: './department-listing.component.html',
  styleUrls: ['./department-listing.component.scss']
})
export class DepartmentListingComponent implements OnInit {

  constructor(public dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(DepartmentModalComponent , {
      width: '900px',
      data: {}
    });
  }

 ngOnInit(): void {
 }

 displayedColumns: string[] = ['deptName', 'remark', 'isActive', 'createdTime' , 'updatedTime', 'action'];
 dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

 @ViewChild(MatPaginator) paginator!: MatPaginator;

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
 }

}
export interface PeriodicElement {
  deptName: string;
  createdTime:string;
  updatedTime:string;
 remark: string;
 isActive: boolean;
 action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:false, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:false, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:false, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

 {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:true, createdTime:'Fri, 16-Dec-2022 13:24:07', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},





];



