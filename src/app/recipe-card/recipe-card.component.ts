import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: any = {};

  displayedPreparationType = "";
  displayedIngredient = "";

  constructor(private router: Router,
              private filterService: FilterService) { 
  }

  ngOnInit(): void {
    this.displayedPreparationType =  this.getDisplayedItem(this.recipe.priprave, "naziv", this.filterService.preparationTypes)
    this.displayedIngredient = this.getDisplayedItem(this.recipe.sestavine, "ime", this.filterService.ingredients) 
  }

  getDisplayedItem(itemArray: Array<any>, itemAttributeName: string, selectedFilterArray: Array<String>){
    for(const item of itemArray){
      console.log(item[itemAttributeName])
      if(selectedFilterArray.includes(item[itemAttributeName])) return item[itemAttributeName]
    }
    return itemArray[0][itemAttributeName]
  }
}
