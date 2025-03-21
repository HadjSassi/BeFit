import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {chartExample1, chartExample2, chartOptions, parseOptions} from '../../variables/charts';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class NutritionistComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked = true;
  public clicked1 = false;

  ngOnInit() {

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 30, 33, 35, 40, 48]
    ];
    this.data = this.datasets[0];


    let chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    let ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    let chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
      type: 'line',
      options: chartExample1.options,
      data: chartExample1.data
    });
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
}
