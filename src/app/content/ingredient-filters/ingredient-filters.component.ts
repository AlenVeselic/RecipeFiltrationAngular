import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilterService, filterTypes } from 'src/app/services/filter.service';

@Component({
  selector: 'app-ingredient-filters',
  templateUrl: './ingredient-filters.component.html',
  styleUrls: ['./ingredient-filters.component.scss']
})
export class IngredientFiltersComponent implements OnInit {

  
  ingredients: any = null;

  constructor(private http: HttpClient,
              public filterService: FilterService) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8000/api/v1/ingredients").subscribe(i => {
      this.ingredients = i
    })
  }

  setIngredientFilter(ingredient: string){
    this.filterService.setFilter(filterTypes.ingredient, ingredient)
  }

  select(event: MouseEvent){
    const target = event.target as HTMLParagraphElement;
    
    if(event != null && event.target!= null){
      target.classList.toggle('selected');
    }
  }

}
