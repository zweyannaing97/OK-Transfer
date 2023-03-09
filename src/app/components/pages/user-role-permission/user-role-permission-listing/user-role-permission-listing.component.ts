import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { RouterLinkActive } from '@angular/router';
import { active } from 'd3';
import { UserRolePermissionModalComponent } from 'src/app/components/modal/user-role-permission-modal/user-role-permission-modal.component';

@Component({
  selector: 'app-user-role-permission-listing',
  templateUrl: './user-role-permission-listing.component.html',
  styleUrls: ['./user-role-permission-listing.component.scss']
})
export class UserRolePermissionListingComponent implements AfterViewInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(UserRolePermissionModalComponent, {
      width: '900px',
      data: {}
    });
  }


  displayedColumns: string[] = ['profile', 'name', 'mobile', 'operator', 'type', 'companyName', 'department', 'designation', 'transaction', 'rolePermission', 'description', 'isActive', 'dateTime', 'updatedTime', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    RouterLinkActive
    this.dataSource.paginator = this.paginator;
  }
}

//     dialogRef.afterClosed().subscribe(result => {
//       if(result){}
//   });
// }



export interface PeriodicElement {
  profile: string;
  name: string;
  companyName: string;
  department: string;
  designation: string;
  mobile: string;
  operator: string;
  type: string;
  transaction: string;
  rolePermission: string;
  description: string;
  isActive: boolean;
  dateTime: string;
  action: string;
  updatedTime: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {profile: 'assets/img/images/profile.png', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929', operator: 'MPT', type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', operator: 'MPT', type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:false, dateTime:'Tue, 09-Jan-2021 10:11:25', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585', operator: 'Telenor', type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:true, dateTime:'Wed, 10-Jan-2021 09:14:18', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555', operator: 'Ooredoo', type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:true, dateTime:'Thur, 11-Jan-2021 11:15:28', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Maung Maung', companyName: 'CGM', department: 'Sales Department', designation: 'Branch Manager', mobile: '+95 09251576586', operator: 'MPT', type:'Admin', transaction:'1', rolePermission:'2', description:'Maung Maung', isActive:false, dateTime:'Fri, 12-Jan-2021 10:18:24', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929', operator: 'MPT', type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', operator: 'MPT', type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:true, dateTime:'Tue, 09-Jan-2021 10:11:25', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585', operator: 'Telenor', type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:false, dateTime:'Wed, 10-Jan-2021 09:14:18', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555', operator: 'Ooredoo', type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:true, dateTime:'Thur, 11-Jan-2021 11:15:28', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929', operator: 'MPT', type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', operator: 'MPT', type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:true, dateTime:'Tue, 09-Jan-2021 10:11:25', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585', operator: 'Telenor', type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:true, dateTime:'Wed, 10-Jan-2021 09:14:18', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555', operator: 'Ooredoo', type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:false, dateTime:'Thur, 11-Jan-2021 11:15:28', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929', operator: 'MPT', type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', operator: 'MPT', type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:true, dateTime:'Tue, 09-Jan-2021 10:11:25', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585', operator: 'Telenor', type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:true, dateTime:'Wed, 10-Jan-2021 09:14:18', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555', operator: 'Ooredoo', type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:true, dateTime:'Thur, 11-Jan-2021 11:15:28', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929', operator: 'MPT', type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:true, dateTime:'Mon, 08-Jan-2021 09:10:20', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', operator: 'MPT', type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:true, dateTime:'Tue, 09-Jan-2021 10:11:25', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585', operator: 'Telenor', type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:true, dateTime:'Wed, 10-Jan-2021 09:14:18', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555', operator: 'Ooredoo', type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:true, dateTime:'Thur, 11-Jan-2021 11:15:28', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929', operator: 'MPT', type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:false, dateTime:'Mon, 08-Jan-2021 09:10:20', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', operator: 'MPT', type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:true, dateTime:'Tue, 09-Jan-2021 10:11:25', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585', operator: 'Telenor', type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:true, dateTime:'Wed, 10-Jan-2021 09:14:18', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

  {profile: 'assets/img/images/profile.png', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555', operator: 'Ooredoo', type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:true, dateTime:'Thur, 11-Jan-2021 11:15:28', updatedTime:'-', action:'assets/img/icons/SideBar-Icon/Edit.svg'},

];


