import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DashboardFilterComponent} from "../../../modal/dashboard-filter/dashboard-filter.component";
import {BsDatepickerDirective} from "ngx-bootstrap/datepicker";
import {ChartComponent} from "ng-apexcharts";
import {baseTotal_ChartOptions} from "../index-dashboard/index-dashboard.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-operator-total-month',
  templateUrl: './operator-total-month.component.html',
  styleUrls: ['./operator-total-month.component.scss']
})
export class OperatorTotalMonthComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  @ViewChild("baseTotalChart") baseTotalChart: ChartComponent | undefined;

  public baseTotalChartOpt:baseTotal_ChartOptions = {
    colors: [
      '#f9bb0e',
      '#ed1b24',
      '#05b8e3',
      '#3a7eed',
      '#FF5B00',],
    series: [8150000, 5320000,4360000,2580000,1120000],
    chart: {
      type: "donut",
      height: 300
    },
    labels: ['MPT',
      'Ooredoo',
      'Telenor',
      'MEC',
      'Mytel',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: true
    },
    legend: {
      show: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50%',
          labels:{
            show : true,
            name: {
              offsetY: -8,
            },
            value:{
              show: true,
              fontSize: '12px',
              fontWeight: '600',
              formatter: function (val) {
                return val
              }
            },
            total: {
              show: true,
              label: 'Total Amount',
              fontSize: '12px',
              fontWeight: '600',
              color: '#373d3f',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a:any, b:any) => {
                  return a + b
                }, 0)
              }
            }
          }
        }
      }
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function(val) {
          return val + ".00" + " Rs"
        },
        title: {
          formatter: function (seriesName) {
            return ''
          }
        }
      }
    },
  };

  constructor(public dialog: MatDialog) { }

  openDialog(type?: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      type: type,
    };
    this.dialog.open(DashboardFilterComponent, dialogConfig);
    // this.dialog.open(DashboardFilterComponent, {
    //   width: '900px',
    //   data: {}
    // });
  }

  displayedColumns: string[] = ['operatorName', 'date1', 'date2', 'date3', 'date4', 'date5', 'date6'
    , 'date7', 'date8', 'date9', 'date10', 'date11', 'date12', 'date13', 'date14', 'date15', 'date16', 'date17'
    , 'date18', 'date19', 'date20', 'date21', 'date22', 'date23', 'date24', 'date25', 'date26', 'date27'
    , 'date28', 'date29', 'date30', 'date31'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  operatorName: string;
  date1: string;
  date2: string;
  date3: string;
  date4: string;
  date5: string;
  date6: string;
  date7: string;
  date8: string;
  date9: string;
  date10: string;
  date11: string;
  date12: string;
  date13: string;
  date14: string;
  date15: string;
  date16: string;
  date17: string;
  date18: string;
  date19: string;
  date20: string;
  date21: string;
  date22: string;
  date23: string;
  date24: string;
  date25: string;
  date26: string;
  date27: string;
  date28: string;
  date29: string;
  date30: string;
  date31: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {operatorName: 'MPT', date1: '60,000', date2:'70,000', date3:'60,000', date4:'60,000', date5:'60,000', date6:'60,000', date7:'60,000', date8:'60,000', date9:'60,000', date10:'60,000',
    date11: '60,000', date12:'70,000', date13:'60,000', date14:'60,000', date15:'60,000', date16:'60,000', date17:'60,000', date18:'60,000', date19:'60,000', date20:'60,000',
    date21: '60,000', date22:'70,000', date23:'60,000', date24:'60,000', date25:'60,000', date26:'60,000', date27:'60,000', date28:'60,000', date29:'60,000', date30:'60,000', date31:'60,000',},

  {operatorName: 'Ooredoo', date1: '60,000', date2:'70,000', date3:'60,000', date4:'60,000', date5:'60,000', date6:'60,000', date7:'60,000', date8:'60,000', date9:'60,000', date10:'60,000',
    date11: '60,000', date12:'70,000', date13:'60,000', date14:'60,000', date15:'60,000', date16:'60,000', date17:'60,000', date18:'60,000', date19:'60,000', date20:'60,000',
    date21: '60,000', date22:'70,000', date23:'60,000', date24:'60,000', date25:'60,000', date26:'60,000', date27:'60,000', date28:'60,000', date29:'60,000', date30:'60,000', date31:'60,000',},

  {operatorName: 'Telenor', date1: '60,000', date2:'70,000', date3:'60,000', date4:'60,000', date5:'60,000', date6:'60,000', date7:'60,000', date8:'60,000', date9:'60,000', date10:'60,000',
    date11: '60,000', date12:'70,000', date13:'60,000', date14:'60,000', date15:'60,000', date16:'60,000', date17:'60,000', date18:'60,000', date19:'60,000', date20:'60,000',
    date21: '60,000', date22:'70,000', date23:'60,000', date24:'60,000', date25:'60,000', date26:'60,000', date27:'60,000', date28:'60,000', date29:'60,000', date30:'60,000', date31:'60,000',},

  {operatorName: 'MEC', date1: '60,000', date2:'70,000', date3:'60,000', date4:'60,000', date5:'60,000', date6:'60,000', date7:'60,000', date8:'60,000', date9:'60,000', date10:'60,000',
    date11: '60,000', date12:'70,000', date13:'60,000', date14:'60,000', date15:'60,000', date16:'60,000', date17:'60,000', date18:'60,000', date19:'60,000', date20:'60,000',
    date21: '60,000', date22:'70,000', date23:'60,000', date24:'60,000', date25:'60,000', date26:'60,000', date27:'60,000', date28:'60,000', date29:'60,000', date30:'60,000', date31:'60,000',},

  {operatorName: 'Mytel', date1: '60,000', date2:'70,000', date3:'60,000', date4:'60,000', date5:'60,000', date6:'60,000', date7:'60,000', date8:'60,000', date9:'60,000', date10:'60,000',
    date11: '60,000', date12:'70,000', date13:'60,000', date14:'60,000', date15:'60,000', date16:'60,000', date17:'60,000', date18:'60,000', date19:'60,000', date20:'60,000',
    date21: '60,000', date22:'70,000', date23:'60,000', date24:'60,000', date25:'60,000', date26:'60,000', date27:'60,000', date28:'60,000', date29:'60,000', date30:'60,000', date31:'60,000',},

];