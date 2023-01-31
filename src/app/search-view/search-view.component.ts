import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit {

  currentPage: number = 1;
  numberOfPages: number = 0;
  constructor(
    private filterService: FilterService, public pagination: PaginationService
  ) { 
    pagination.getCurrentPageNumber().subscribe(currentPage => this.currentPage = currentPage)
    pagination.getNumberOfPages().subscribe(numberOfPages => this.numberOfPages = numberOfPages)
  }

  ngOnInit(): void {
  }

  loadMore(){
    this.filterService.search(true)
  }

}
