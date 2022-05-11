import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss']
})
export class SearchAreaComponent implements OnInit {

  filters: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {




  }

  toggleAdvancedFilters(){
    this.filters = !this.filters;
  }

}
