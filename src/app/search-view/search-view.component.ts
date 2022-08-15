import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit {


  constructor(
    private filterService: FilterService
  ) { 
  }

  ngOnInit(): void {
  }

  loadMore(){
    this.filterService.search(true)
  }

}
