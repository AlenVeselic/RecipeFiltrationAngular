import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit {

  recipeId:any = {}
  recipe:any = {}
  navodila: string = ""

  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get('id');

    this.http.get("http://localhost:8000/api/v1/recipes/" + this.recipeId).subscribe((response: any) => 
    {
      this.recipe = response
      console.log(String.raw`${this.recipe.navodila}`)
      this.navodila = this.recipe.navodila.replace(new RegExp('\n', 'g'), "<br />")
    })
    
  }

}
