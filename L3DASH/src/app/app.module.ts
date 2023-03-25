import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StatusComponent } from './status/status.component';
import { SearchComponent } from './search/search.component';
import { PerformanceComponent } from './performance/performance.component';
import { TrendsComponent } from './trends/trends.component';
import { ErrorComponent } from './error1/error.component';
import { MetricsComponent } from './metrics/metrics.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatusComponent,
    SearchComponent,
    PerformanceComponent,
    TrendsComponent,
    ErrorComponent,
    MetricsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
