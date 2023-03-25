import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  applications = [
    { name: 'Application 1', status: 'up', statusDetails: 'All systems operational' },
    { name: 'Application 2', status: 'down', statusDetails: 'Service Unavailable' },
    { name: 'Application 3', status: 'up', statusDetails: 'All systems operational' },
    { name: 'Application 4', status: 'down', statusDetails: 'Service Unavailable' },
    { name: 'Application 5', status: 'up', statusDetails: 'All systems operational' },
    { name: 'Application 6', status: 'down', statusDetails: 'Service Unavailable' },
    { name: 'Application 7', status: 'up', statusDetails: 'All systems operational' },
    { name: 'Application 8', status: 'down', statusDetails: 'Service Unavailable' },
    { name: 'Application 9', status: 'up', statusDetails: 'All systems operational' },
    { name: 'Application 10', status: 'down', statusDetails: 'Service Unavailable' },
  ];

  selectedStatus: string = '';
  searchTerm: string = '';

  get filteredApplications() {
    return this.applications.filter(application => {
      return application.status.includes(this.selectedStatus) &&
        (application.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          application.statusDetails.toLowerCase().includes(this.searchTerm.toLowerCase()));
    });
  }
}
