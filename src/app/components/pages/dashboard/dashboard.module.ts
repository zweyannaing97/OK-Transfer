import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { DashboardFilterComponent } from '../../modal/dashboard-filter/dashboard-filter.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IndexDashboardComponent } from './index-dashboard/index-dashboard.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {NgApexchartsModule} from "ng-apexcharts";
import {MatDividerModule} from "@angular/material/divider";
import {CarouselModule} from "ngx-owl-carousel-o";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {NgCircleProgressModule} from "ng-circle-progress";
import {FlexModule} from "@angular/flex-layout";
import { OperatorTotalMonthComponent } from './operator-total-month/operator-total-month.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { MptMonthChartComponent } from './mpt-month-chart/mpt-month-chart.component';
import { OoredooMonthChartComponent } from './ooredoo-month-chart/ooredoo-month-chart.component';
import { TelenorMonthChartComponent } from './telenor-month-chart/telenor-month-chart.component';
import { MecMonthChartComponent } from './mec-month-chart/mec-month-chart.component';
import { MytelMonthChartComponent } from './mytel-month-chart/mytel-month-chart.component';
import { TotalTransferChartComponent } from './total-transfer-chart/total-transfer-chart.component';


@NgModule({
  declarations: [
    IndexDashboardComponent,
    DashboardFilterComponent,
    OperatorTotalMonthComponent,
    MptMonthChartComponent,
    OoredooMonthChartComponent,
    TelenorMonthChartComponent,
    MecMonthChartComponent,
    MytelMonthChartComponent,
    TotalTransferChartComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxChartsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    BsDatepickerModule,
    MatTooltipModule,
    NgApexchartsModule,
    MatDividerModule,
    CarouselModule,
    FontAwesomeModule,
    NgCircleProgressModule,
    FlexModule,
    MatPaginatorModule,
  ]
})
export class DashboardModule { }
