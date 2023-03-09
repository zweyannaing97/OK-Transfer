import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashBackReportListingComponent } from './cash-back-report/cash-back-report-listing/cash-back-report-listing.component';
import { PaytoReportListingComponent } from './payto-report/payto-report-listing/payto-report-listing.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'cash-back-report-listing',
      component:CashBackReportListingComponent
    },

    {
      path: 'payto-report-listing',
      component:PaytoReportListingComponent
    }

 
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
