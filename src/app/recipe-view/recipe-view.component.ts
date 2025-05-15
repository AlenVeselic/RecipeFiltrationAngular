import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Environment } from '../environment/environment';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss'],
})
export class RecipeViewComponent implements OnInit {
  recipeId: any = {};
  recipe: any = {};
  navodila: string = '';
  difficultyRange: number[] = Environment.difficultyRange;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get('id');

    const getRecipeUrl = `${environment.api_url}/api/v1/recipes/${this.recipeId}`;

    this.http.get(getRecipeUrl).subscribe((response: any) => {
      this.recipe = response;

      this.navodila = this.recipe.navodila.replace(
        new RegExp('\n', 'g'),
        '<br />'
      );
    });
  }
}
