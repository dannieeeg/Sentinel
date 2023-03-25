import { Component } from '@angular/core';
// import { Chart } from 'chart.js';
// 

@Component({
  selector: 'app-trends',
  template: `
    <div class="trends-component">
      <h3>Trends</h3>
      <p>Track trends and historical data with the following tools:</p>
      <ul>
        <li><a href="https://kibana.example.com" target="_blank">Kibana</a></li>
        <li><a href="https://splunk.example.com" target="_blank">Splunk</a></li>
      </ul>
      <div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <!-- <h2 class="text-center my-4">Trends</h2> -->
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <canvas id="myChart"></canvas>
    </div>
  </div>
</div>

    </div>
  `
})
export class TrendsComponent {}
