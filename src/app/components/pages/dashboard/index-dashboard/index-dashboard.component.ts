import { Component, OnInit ,ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DashboardFilterComponent } from '../../../modal/dashboard-filter/dashboard-filter.component';
import { LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import {curveBasis} from 'd3-shape';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexGrid,
  ApexFill,
  ApexPlotOptions,
  ApexMarkers
} from "ng-apexcharts";

export type baseTotal_ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
};

export type mptbaseTotal_ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
};
export type ooredoobaseTotal_ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
};
export type telenorbaseTotal_ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
};
export type mecbaseTotal_ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
};
export type mytelbaseTotal_ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
};

export type topten_lineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  colors: string[];
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

export type monthBaseTotal_ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
};



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-index-dashboard',
  templateUrl: './index-dashboard.component.html',
  styleUrls: ['./index-dashboard.component.scss']
})
export class IndexDashboardComponent implements OnInit {
  public customOptions:any;
  public customOptions2:any;

  mainToCashBackView = true;
  cashBackToMainView = false;
  mainToOtherCashView = false;
  cashBackToOtherMainView = false;
  payToView = false;

  TableView(type: string) {
    if(type == "1") {
      this.mainToCashBackView = true;
      this.cashBackToMainView = false;
      this.mainToOtherCashView = false;
      this.cashBackToOtherMainView = false;
      this.payToView = false;
    } else if( type == '2') {
      this.cashBackToMainView = true;
      this.mainToCashBackView = false;
      this.mainToOtherCashView = false;
      this.cashBackToOtherMainView = false;
      this.payToView = false;
    } else if( type == '3') {
      this.mainToOtherCashView = true;
      this.mainToCashBackView = false;
      this.cashBackToMainView = false;
      this.cashBackToOtherMainView = false;
      this.payToView = false;
    }
    else if( type == '4') {
      this.cashBackToOtherMainView = true;
      this.mainToCashBackView = false;
      this.cashBackToMainView = false;
      this.mainToOtherCashView = false;
      this.payToView = false;
    }
    else if( type == '5') {
      this.payToView = true;
      this.cashBackToOtherMainView = false;
      this.mainToCashBackView = false;
      this.cashBackToMainView = false;
      this.mainToOtherCashView = false;
    }
  }

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

  @ViewChild("mptbaseTotalChart") mptbaseTotalChart: ChartComponent | undefined;
  public mptbaseTotalChartOpt:mptbaseTotal_ChartOptions = {
    colors: [
      '#FCD97C',
      '#FAC943',
      '#F9BB12',
      '#D09A05',
      '#816003',],
    series: [1200000, 820000,1500000,1300000,1700000],
    chart: {
      type: "donut",
      height: 220
    },
    labels: [
      'Main To Cash Back',
      'Cash Back To Main',
      'Main To Other Cash Back',
      'Cash Back To Other Main',
      'Pay To'],
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
              fontSize: '10px',
              fontWeight: '600',
              formatter: function (val) {
                return val
              }
            },
            total: {
              show: true,
              label: 'Total Amount',
              fontSize: '10px',
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

  @ViewChild("ooredoobaseTotalChart") ooredoobaseTotalChart: ChartComponent | undefined;
  public ooredoobaseTotalChartOpt:ooredoobaseTotal_ChartOptions = {
    colors: [
      '#F6969B',
      '#F14D55',
      '#EA141F',
      '#9C0E15',
      '#69090D',],
    series: [1000000, 900000,1000000,1500000,920000],
    chart: {
      type: "donut",
      height: 220
    },
    labels: [
      'Main To Cash Back',
      'Cash Back To Main',
      'Main To Other Cash Back',
      'Cash Back To Other Main',
      'Pay To'],
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
              fontSize: '10px',
              fontWeight: '600',
              formatter: function (val) {
                return val
              }
            },
            total: {
              show: true,
              label: 'Total Amount',
              fontSize: '10px',
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

  @ViewChild("telenorbaseTotalChart") telenorbaseTotalChart: ChartComponent | undefined;
  public telenorbaseTotalChartOpt:telenorbaseTotal_ChartOptions = {
    colors: [
      '#6EE2FC',
      '#3BD5FB',
      '#04ADD3',
      '#037D99',
      '#024E60',],
    series: [1000000, 1360000,1000000,300000,700000],
    chart: {
      type: "donut",
      height: 220
    },
    labels: [
      'Main To Cash Back',
      'Cash Back To Main',
      'Main To Other Cash Back',
      'Cash Back To Other Main',
      'Pay To'],
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
              fontSize: '10px',
              fontWeight: '600',
              formatter: function (val) {
                return val
              }
            },
            total: {
              show: true,
              label: 'Total Amount',
              fontSize: '10px',
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

@ViewChild("mecbaseTotalChart") mecbaseTotalChart: ChartComponent | undefined;
  public mecbaseTotalChartOpt:mecbaseTotal_ChartOptions = {
    colors: [
      '#B4CEF8',
      '#81ADF3',
      '#145FD9',
      '#0F49A7',
      '#0B3374',],
    series: [900000, 250800,700000,258000,1000000],
    chart: {
      type: "donut",
      height: 220
    },
    labels: [
      'Main To Cash Back',
      'Cash Back To Main',
      'Main To Other Cash Back',
      'Cash Back To Other Main',
      'Pay To'],
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
              fontSize: '10px',
              fontWeight: '600',
              formatter: function (val) {
                return val
              }
            },
            total: {
              show: true,
              label: 'Total Amount',
              fontSize: '10px',
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

@ViewChild("mytelbaseTotalChart") mytelbaseTotalChart: ChartComponent | undefined;
  public mytelbaseTotalChartOpt:mytelbaseTotal_ChartOptions = {
    colors: [
      '#FFA676',
      '#FF7D37',
      '#ED5300',
      '#B64000',
      '#802D00',],
    series: [900000, 250800,700000,258000,1000000],
    chart: {
      type: "donut",
      height: 220
    },
    labels: [
      'Main To Cash Back',
      'Cash Back To Main',
      'Main To Other Cash Back',
      'Cash Back To Other Main',
      'Pay To'],
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
              fontSize: '10px',
              fontWeight: '600',
              formatter: function (val) {
                return val
              }
            },
            total: {
              show: true,
              label: 'Total Amount',
              fontSize: '10px',
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

  @ViewChild("topten_linechart") topten_linechart: ChartComponent | undefined;
  public toptenlineChartOpt:topten_lineChartOptions = {
    colors: ['#FF0000'],
    series: [
      {
        name: "Desktops",
        data: [85000, 70000, 65000, 50000, 45000, 30000, 25000, 15000, 10000]
      }
    ],
    chart: {
      toolbar:{
        show:false
      },
      height: 618,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: "Product Trends by Month",
      align: "left"
    },
    stroke: {
      curve: "straight"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        "09421001255",
        "097878784656",
        "09448460545",
        "09787618344",
        "09969789548",
        "0963884558",
        "095311779",
        "09261982966",
        "09787952143"
      ]
    }
  }

  @ViewChild("cashToMain_linechart") cashToMain_linechart: ChartComponent | undefined;
  public cashToMainlineChartOpt:topten_lineChartOptions = {
    colors: ['#FF4500'],
    series: [
      {
        name: "Desktops",
        data: [85000, 70000, 65000, 50000, 45000, 30000, 25000, 15000, 10000]
      }
    ],
    chart: {
      toolbar:{
        show:false
      },
      height: 618,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: "Product Trends by Month",
      align: "left"
    },
    stroke: {
      curve: "straight"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        "09421001255",
        "097878784656",
        "09448460545",
        "09787618344",
        "09969789548",
        "0963884558",
        "095311779",
        "09261982966",
        "09787952143"
      ]
    }
  }

  @ViewChild("mainToOtherCash_linechart") mainToOtherCash_linechart: ChartComponent | undefined;
  public mianToOtherCashlineChartOpt:topten_lineChartOptions = {
    colors: ['#00DB00'],
    series: [
      {
        name: "Desktops",
        data: [85000, 70000, 65000, 50000, 45000, 30000, 25000, 15000, 10000]
      }
    ],
    chart: {
      toolbar:{
        show:false
      },
      height: 618,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: "Product Trends by Month",
      align: "left"
    },
    stroke: {
      curve: "straight"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        "09421001255",
        "097878784656",
        "09448460545",
        "09787618344",
        "09969789548",
        "0963884558",
        "095311779",
        "09261982966",
        "09787952143"
      ]
    }
  }

  @ViewChild("cashToOtherMain_linechart") cashToOtherMain_linechart: ChartComponent | undefined;
  public cashToOtherMainlineChartOpt:topten_lineChartOptions = {
    colors: ['#f9bb0e'],
    series: [
      {
        name: "Desktops",
        data: [85000, 70000, 65000, 50000, 45000, 30000, 25000, 15000, 10000]
      }
    ],
    chart: {
      toolbar:{
        show:false
      },
      height: 618,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: "Product Trends by Month",
      align: "left"
    },
    stroke: {
      curve: "straight"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        "09421001255",
        "097878784656",
        "09448460545",
        "09787618344",
        "09969789548",
        "0963884558",
        "095311779",
        "09261982966",
        "09787952143"
      ]
    }
  }

  @ViewChild("payTo_linechart") payTo_linechart: ChartComponent | undefined;
  public payTolineChartOpt:topten_lineChartOptions = {
    colors: ['#0000A4'],
    series: [
      {
        name: "Desktops",
        data: [85000, 70000, 65000, 50000, 45000, 30000, 25000, 15000, 10000]
      }
    ],
    chart: {
      toolbar:{
        show:false
      },
      height: 618,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: "Product Trends by Month",
      align: "left"
    },
    stroke: {
      curve: "straight"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        "09421001255",
        "097878784656",
        "09448460545",
        "09787618344",
        "09969789548",
        "0963884558",
        "095311779",
        "09261982966",
        "09787952143"
      ]
    }
  }

  @ViewChild("monthBaseTotalChart") monthBaseTotalChart: ChartComponent | undefined;

  public monthBaseTotalChartOpt:monthBaseTotal_ChartOptions = {
    colors: [
      '#ed1b24',
      '#f9bb0e',
      '#00DB00',
      '#05b8e3',
      '#FF5B00',],
    series: [4500000, 2500000,3500000,2000000,2500000],
    chart: {
      type: "donut",
      height: 300
    },
    labels: [
      'Main To Cash Back',
      'Cash Back To Main',
      'Main To Other Cash Back',
      'Cash To Other Main',
      'Pay To',],
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

  @ViewChild("monthBaseTotalbarChart") chart: ChartComponent | undefined;
  public totalBase_chartOpt:ChartOptions = {
    series: [
      {
        name: "Amount",
        data: [4500000, 2500000, 3500000, 2000000, 2500000]
      }
    ],
    chart: {
      toolbar:{
        show:false
      },
      height: 495,
      type: "bar",
      events: {
        click: function(chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    colors: [
      '#ed1b24',
      '#f9bb0e',
      '#00DB00',
      '#FF5B00',
      '#05b8e3',
    ],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    grid: {
      show: true
    },
    xaxis: {
      categories: [
        "Main To Cash Back",
        "Cash Back To Main",
        "Main To Other Cash Back",
        "Cash Back To Other Main",
        "Other Main"
      ],
      labels: {
        style: {
          fontSize: "12px"
        }
      }
    }
  }

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
  ngOnInit(): void {
    setTimeout(() => {
      this.customOptions = {
        loop: true,
        mouseDrag:true,
        touchDrag:true,
        pullDrag:true,
        dots: false,
        stagePadding:5,
        navSpeed: 700,
        navText: [ '<i class="fa fa-caret-left" aria-hidden="true"></i>','<i class="fa fa-caret-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 1
          },
          740: {
            items: 1
          },
          940: {
            items: 3
          },
          1300: {
            items: 4
          }
        },
        nav: true
      },
        this.customOptions2 = {
          loop: true,
          mouseDrag:true,
          touchDrag:true,
          pullDrag:true,
          dots: false,
          stagePadding:5,
          navSpeed: 700,
          navText: [ '<i class="fa fa-caret-left" aria-hidden="true"></i>','<i class="fa fa-caret-right" aria-hidden="true"></i>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 4
            },
            1300: {
              items: 5
            }
          },
          nav: true
        }
    }, 1);
  }

}
