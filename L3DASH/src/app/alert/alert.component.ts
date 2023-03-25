import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() heading: string = "";
  @Input() message: string ="";
  @Input() alertType: string ="";
  @Input() splunkLink: string = "";
  @Input() kibanaLink: string = "";
  @Input() dynatraceLink: string ="";
  isAcknowledged = false; // Define the isAcknowledged property

  acknowledge(): void {
    this.isAcknowledged = true;
  }
}
