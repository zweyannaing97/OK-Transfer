import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexDashboardComponent } from './index-dashboard/index-dashboard.component';
import { OperatorTotalMonthComponent} from "./operator-total-month/operator-total-month.component";
import { MptMonthChartComponent } from "./mpt-month-chart/mpt-month-chart.component";
import { OoredooMonthChartComponent } from "./ooredoo-month-chart/ooredoo-month-chart.component";
import { TelenorMonthChartComponent } from "./telenor-month-chart/telenor-month-chart.component";
import {MecMonthChartComponent} from "./mec-month-chart/mec-month-chart.component";
import {MytelMonthChartComponent} from "./mytel-month-chart/mytel-month-chart.component";
import {TotalTransferChartComponent} from "./total-transfer-chart/total-transfer-chart.component";

const routes: Routes = [

  {
    path:'',
    component: IndexDashboardComponent
  },
  {
    path:'operator-total-month-chart',
    component: OperatorTotalMonthComponent
  },
  {
    path:'mpt-month-chart',
    component: MptMonthChartComponent
  },
  {
    path:'ooredoo-month-chart',
    component: OoredooMonthChartComponent
  },
  {
    path:'telenor-month-chart',
    component: TelenorMonthChartComponent
  },
  {
    path:'mec-month-chart',
    component: MecMonthChartComponent
  },
  {
    path:'mytel-month-chart',
    component: MytelMonthChartComponent
  },
  {
    path:'total-transfer-chart',
    component: TotalTransferChartComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
