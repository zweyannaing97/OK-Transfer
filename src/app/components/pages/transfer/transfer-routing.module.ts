import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashBackToMainListingComponent } from './cash-back-to-main/cash-back-to-main-listing/cash-back-to-main-listing.component';
import { CashBackToOtherMainListingComponent } from './cash-back-to-other-main/cash-back-to-other-main-listing/cash-back-to-other-main-listing.component';
import { MainToCashBackListingComponent } from './main-to-cash-back/main-to-cash-back-listing/main-to-cash-back-listing.component';
import { MainToOtherCashBackListingComponent } from './main-to-other-cash-back/main-to-other-cash-back-listing/main-to-other-cash-back-listing.component';
import {PayToComponent} from "./pay-to/pay-to.component";
import { CreateMainToCashComponent } from "./main-to-cash-back/create-main-to-cash/create-main-to-cash.component";
import { CreateCashToMainComponent } from "./cash-back-to-main/create-cash-to-main/create-cash-to-main.component";
import { CreateMainToOtherComponent } from "./main-to-other-cash-back/create-main-to-other/create-main-to-other.component";
import { CreateCashToOtherMainComponent } from "./cash-back-to-other-main/create-cash-to-other-main/create-cash-to-other-main.component";
import { CreatePayToComponent } from "./pay-to/create-pay-to/create-pay-to.component";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'main-to-cash-back-listing',
      component: MainToCashBackListingComponent
    },
    {
      path:'add-main-to-cash',
      component:CreateMainToCashComponent
    },
    {
      path: 'cash-back-to-main-listing',
      component: CashBackToMainListingComponent
    },
    {
      path: 'create-cash-to-main',
      component: CreateCashToMainComponent
    },
    {
      path: 'main-to-other-cash-back-listing',
      component: MainToOtherCashBackListingComponent
    },
    {
      path: 'create-main-to-other-cash',
      component: CreateMainToOtherComponent
    },
    {
      path:'cash-back-to-other-main-listing',
      component:CashBackToOtherMainListingComponent
    },
    {
      path:'create-cash-to-other-main',
      component:CreateCashToOtherMainComponent
    },
    {
      path:'pay-to',
      component:PayToComponent
    },
    {
      path:'create-pay-to',
      component:CreatePayToComponent
    }
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule { }
