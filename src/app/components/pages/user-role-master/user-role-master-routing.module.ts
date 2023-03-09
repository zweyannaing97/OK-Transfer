import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyCreateComponent } from './company/company-create/company-create.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyListingComponent } from './company/company-listing/company-listing.component';
import { DepartmentCreateComponent } from './department/department-create/department-create.component';
import { DepartmentEditComponent } from './department/department-edit/department-edit.component';
import { DepartmentListingComponent } from './department/department-listing/department-listing.component';
import { DesignationCreateComponent } from './designation/designation-create/designation-create.component';
import { DesignationEditComponent } from './designation/designation-edit/designation-edit.component';
import { DesignationListingComponent } from './designation/designation-listing/designation-listing.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'company-listing',
      component: CompanyListingComponent
    },

    {
      path: 'company-create',
      component:CompanyCreateComponent
    },

    {
      path: 'company-edit',
      component:CompanyEditComponent
    },
    

    {
      path: 'department-listing',
      component: DepartmentListingComponent
    },  

    {
      path: 'department-create',
      component: DepartmentCreateComponent
    },

    {
      path: 'department-edit',
      component:DepartmentEditComponent
    },

    
    {
      path: 'designation-listing',
      component: DesignationListingComponent
    },

    {
      path: 'designation-create',
      component: DesignationCreateComponent
    },

    {
      path: 'designation-edit',
      component:DesignationEditComponent
    },
  ]

  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoleMasterRoutingModule { }
