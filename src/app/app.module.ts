import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReqInterceptor } from './core/interceptor/req-interceptor.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from "@angular/material/toolbar";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ConfirmAlertComponentComponent } from './components/modal/confirm-alert-component/confirm-alert-component.component';
import { TransferModalComponent } from './components/modal/transfer-modal/transfer-modal.component';
import {FlexModule} from "@angular/flex-layout";
import { CashToMainFilterComponent } from './components/modal/transfer-modal/cash-to-main-filter/cash-to-main-filter.component';
import { MainToOtherCashFilterComponent } from './components/modal/transfer-modal/main-to-other-cash-filter/main-to-other-cash-filter.component';
import { CashToOtherMainFilterComponent } from './components/modal/transfer-modal/cash-to-other-main-filter/cash-to-other-main-filter.component';
import { PayToFilterComponent } from './components/modal/transfer-modal/pay-to-filter/pay-to-filter.component';
import { UserRolePermissionModalComponent } from './components/modal/user-role-permission-modal/user-role-permission-modal.component';
import { CompanyFilterComponent } from './components/modal/user-role-master-modal/company-filter/company-filter.component';
import { DepartmentModalComponent } from './components/modal/user-role-master-modal/department-modal/department-modal.component';
import { DesignationModalComponent } from './components/modal/user-role-master-modal/designation-modal/designation-modal.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmAlertComponentComponent,
    TransferModalComponent,
    CashToMainFilterComponent,
    MainToOtherCashFilterComponent,
    CashToOtherMainFilterComponent,
    PayToFilterComponent,
    UserRolePermissionModalComponent,
    CompanyFilterComponent,
    DepartmentModalComponent,
    DesignationModalComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        CoreModule,
        RouterModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatDatepickerModule,
        MatSelectModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatRippleModule,
        MatExpansionModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatRadioModule,
        MatToolbarModule,
        BsDatepickerModule.forRoot(),
        NgxMaterialTimepickerModule,
        FlexModule,
        NgApexchartsModule,
        CarouselModule,
      // Specify ng-circle-progress as an import
      NgCircleProgressModule.forRoot({
        "radius": 60,
        "space": -10,
        "outerStrokeGradient": true,
        "animateTitle": false,
        "showSubtitle":true,
        "animationDuration": 1000,
        "showUnits": false,
        "showBackground": false,
        "clockwise": true,
        "startFromZero": true,
        "lazy": false})
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
