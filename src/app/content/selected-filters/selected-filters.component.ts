import { Component, OnInit } from '@angular/core';
import { combineLatest, concat, forkJoin, merge, Observable, Subscription } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-selected-filters',
  templateUrl: './selected-filters.component.html',
  styleUrls: ['./selected-filters.component.scss']
})
export class SelectedFiltersComponent implements OnInit {

  private filterSubscription: Subscription;
  activeFilters: any = []
  preparationTypes: any = null;
  ingredients: any = null;
  difficultyLevels: any = null;
  query: any = null;
  selectedFilters: Observable<unknown> | undefined;
  displayedSelectedFilters: string = '[]';

  areAllFiltersEmpty: boolean = true;

  constructor(private filterService: FilterService) {
    this.filterSubscription = this.filterService.getActiveFilterUpdate().subscribe( filters =>
      {
        this.activeFilters = filters
        this.ngOnInit()
      }
    )
   }

  ngOnInit(): void {
      this.preparationTypes = this.activeFilters.preparationTypes
      this.ingredients = this.activeFilters.ingredients
      this.difficultyLevels = this.activeFilters.difficultyLevel
      this.query = this.activeFilters.searchQuery
      this.areAllFiltersEmpty = this.filterService.areFiltersEmpty()
      this.displayedSelectedFilters = [this.preparationTypes, this.ingredients, this.difficultyLevels, this.query]
      .filter(array => array)
      .filter(array => array.length > 0)
      .filter(array => array != '')
      .map(array =>{ if(Array.isArray(array)) return array.join(", "); else return array})
      .join(", ")
  }

}
