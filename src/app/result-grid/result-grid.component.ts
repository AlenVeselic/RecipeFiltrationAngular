import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-result-grid',
  templateUrl: './result-grid.component.html',
  styleUrls: ['./result-grid.component.scss']
})
export class ResultGridComponent implements OnInit {

  @Input() recipes: string[] = [];

  phpRecipes: any[] = [];

  private recipeSubscription: Subscription;

  constructor(private http: HttpClient, private router: Router, private filterService: FilterService) { 
    this.recipeSubscription = this.filterService.getRecipeUpdate().subscribe( recipes =>
      {
        this.phpRecipes = recipes
      }
    )
  }

  ngOnInit(): void {
    console.log("Sending request")
    if(this.phpRecipes.length === 0){
      this.filterService.search()
    }
    for(let recipe of this.phpRecipes) console.log(recipe.ime)
  }

  


}
