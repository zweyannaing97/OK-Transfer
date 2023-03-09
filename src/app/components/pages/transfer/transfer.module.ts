import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';

import { MainToCashBackListingComponent } from './main-to-cash-back/main-to-cash-back-listing/main-to-cash-back-listing.component';
import { CashBackToMainListingComponent } from './cash-back-to-main/cash-back-to-main-listing/cash-back-to-main-listing.component';
import { MainToOtherCashBackListingComponent } from './main-to-other-cash-back/main-to-other-cash-back-listing/main-to-other-cash-back-listing.component';
import { CashBackToOtherMainListingComponent } from './cash-back-to-other-main/cash-back-to-other-main-listing/cash-back-to-other-main-listing.component';
import { PayToComponent } from './pay-to/pay-to.component';
import { CreatePayToComponent } from './pay-to/create-pay-to/create-pay-to.component';
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CreateMainToCashComponent } from './main-to-cash-back/create-main-to-cash/create-main-to-cash.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FlexModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { CreateCashToMainComponent } from './cash-back-to-main/create-cash-to-main/create-cash-to-main.component';
import { CreateMainToOtherComponent } from './main-to-other-cash-back/create-main-to-other/create-main-to-other.component';
import { CreateCashToOtherMainComponent } from './cash-back-to-other-main/create-cash-to-other-main/create-cash-to-other-main.component';


@NgModule({
  declarations: [
    MainToCashBackListingComponent,
    CashBackToMainListingComponent,
    MainToOtherCashBackListingComponent,
    CashBackToOtherMainListingComponent,
    PayToComponent,
    CreatePayToComponent,
    CreateMainToCashComponent,
    CreateCashToMainComponent,
    CreateMainToOtherComponent,
    CreateCashToOtherMainComponent
  ],
  imports: [
    CommonModule,
    TransferRoutingModule,
    MatTableModule,
    MatTooltipModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexModule,
    MatInputModule,
    MatIconModule
  ]
})
export class TransferModule { }
