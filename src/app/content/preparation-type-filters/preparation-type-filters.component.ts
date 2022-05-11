import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilterService, filterTypes } from 'src/app/services/filter.service';

@Component({
  selector: 'app-preparation-type-filters',
  templateUrl: './preparation-type-filters.component.html',
  styleUrls: ['./preparation-type-filters.component.scss']
})
export class PreparationTypeFiltersComponent implements OnInit {
  preparationTypes: any = null;
  selected: number[] =  [];

  constructor(private http: HttpClient,
              private filterService: FilterService) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8000/api/v1/preparation-types").subscribe(p => {
      this.preparationTypes = p
    })
  }

  setPreparationType(preparationType: string){
    this.filterService.setFilter(filterTypes.preparationType, preparationType)
  }

  select(event: MouseEvent){
    const target = event.target as HTMLParagraphElement;
    if(event != null && event.target!= null){
      target.classList.toggle('selected');
    }
  }

}
