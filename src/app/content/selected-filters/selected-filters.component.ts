import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  constructor(private filterService: FilterService) {
    this.filterSubscription = this.filterService.getActiveFilterUpdate().subscribe( filters =>
      {
        this.activeFilters = filters
        this.ngOnInit()
      }
    )
   }

  ngOnInit(): void {
      console.log("Reinitialized")
      this.preparationTypes = this.activeFilters.preparationTypes
  }

}
