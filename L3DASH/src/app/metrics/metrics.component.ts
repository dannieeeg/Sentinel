import { Component } from '@angular/core';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent {
  appName = 'My Application';
  totalRequests = 10000;
  successfulRequests = 9500;
  failedRequests = 500;
  averageResponseTime = 300;
  cpuUsage = 80;
  memoryUsage = 60;
}
