import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FilterService, filterTypes } from 'src/app/services/filter.service';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss']
})
export class SearchAreaComponent implements OnInit {

  filters: boolean = false;
  faMaGlass = faSearch;

  constructor(private http: HttpClient,
              private filterService: FilterService) { }

  ngOnInit(): void {

  }

  toggleAdvancedFilters(){
    this.filters = !this.filters;
  }

  setQuery(query: string){
    this.filterService.setFilter(filterTypes.searchQuery, query)
  }

}
