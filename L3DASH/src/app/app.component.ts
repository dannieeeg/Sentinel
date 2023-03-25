import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { StatusComponent } from './status/status.component';
import { SearchComponent } from './search/search.component';
import { PerformanceComponent } from './performance/performance.component';
import { TrendsComponent } from './trends/trends.component';
import { ErrorComponent } from './error1/error.component';
import { MetricsComponent } from './metrics/metrics.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [
    HeaderComponent,
    StatusComponent,
    SearchComponent,
    PerformanceComponent,
    TrendsComponent,
    ErrorComponent,
    MetricsComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'L3DASH';
}
