import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <div class="error">
      <h3>{{title}}</h3>
      <p>{{message}}</p>
      <a [href]="link">{{linkText}}</a>
    </div>
  `,
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() link: string = '';
  @Input() linkText: string = '';
}
