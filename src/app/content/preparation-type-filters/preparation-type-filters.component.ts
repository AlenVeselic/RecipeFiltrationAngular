import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilterService, filterTypes } from 'src/app/services/filter.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-preparation-type-filters',
  templateUrl: './preparation-type-filters.component.html',
  styleUrls: ['./preparation-type-filters.component.scss'],
})
export class PreparationTypeFiltersComponent implements OnInit {
  preparationTypes: any = null;
  selected: number[] = [];

  constructor(private http: HttpClient, public filterService: FilterService) {}

  ngOnInit(): void {
    const allPreparationTypesUrl = `${environment.api_url}/api/v1/preparation-types`;

    this.http.get(allPreparationTypesUrl).subscribe((p) => {
      this.preparationTypes = p;
    });
  }

  setPreparationType(preparationType: string) {
    this.filterService.setFilter(filterTypes.preparationType, preparationType);
  }

  select(event: MouseEvent) {
    const target = event.target as HTMLParagraphElement;
    if (event != null && event.target != null) {
      target.classList.toggle('selected');
    }
  }
}
