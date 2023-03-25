import { Component } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent {
  appName = 'My Application';
  requestsPerMinute = 120;
  averageResponseTime = 300;
  serverUptime = '99.9%';
  cpuUsage = 0;
  memoryUsage = 0;
  networkUsage = 0;
  // cpuUsage: number;
  // memoryUsage: number;
  // networkUsage: number;
}
