import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery = '';
  searchResults = [
    'Search result 1',
    'Search result 2',
    'Search result 3',
    'Search result 4',
    'Search result 5',
  ];

  onSearch() {
    // Perform search logic here
  }
}
