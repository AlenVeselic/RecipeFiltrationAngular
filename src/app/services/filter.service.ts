import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export enum filterTypes {
  preparationType,
  ingredient,
  difficultyLevel,
  query
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  preparationTypes: string[] = [];
  ingredients: string[] = [];
  difficultyLevel: string[] = [];
  query: string = ""
  private recipes = new Subject<any>()
  private activeFilters = new Subject<any>()


  constructor(private http: HttpClient) { }

  setFilter(type: filterTypes, filterValue: string){
    switch(type){
      case filterTypes.preparationType: {
        if(!this.preparationTypes.includes(filterValue)){
        this.preparationTypes.push(filterValue)}
        else
        {
          this.preparationTypes = this.preparationTypes
          .filter(
            preparationType => {
              if(preparationType != filterValue){return true;}
              else return false;})
        }
        break;
      }
      case filterTypes.ingredient:{
        if(!this.ingredients.includes(filterValue)){
        this.ingredients.push(filterValue)
      }else{
        this.ingredients = this.ingredients
          .filter(ingredients => {
            if(ingredients != filterValue) return true;
            else return false;
          })
      }
        break;
      }
      case filterTypes.difficultyLevel:{
        if(this.difficultyLevel.length > 0 && this.difficultyLevel[0] != filterValue){
        this.difficultyLevel[0] = filterValue;
      }else{
        this.difficultyLevel= [""];
      }
        break;
      }
      case filterTypes.query:{
        this.query = filterValue;
        break;
      }
    }

    this.search()
  }
  search(){
    let body: any = {}
    body.preparationTypes = this.preparationTypes.length > 0 ? this.preparationTypes : [""];
    body.ingredients = this.ingredients.length > 0 ? this.ingredients : [""];
    body.difficultyLevel = this.difficultyLevel.length >0 ? this.difficultyLevel : [""];
    body.query = this.query
    let recipes: any = {}
    console.log(body)
    this.activeFilters.next(body);
    this.http.post("http://localhost:8000/api/v1/recipes/search", body).subscribe(response => {
      recipes = response
      console.log(response)
      this.recipes.next(recipes)
    })
  }

  getRecipeUpdate(): Observable<any>{
    return this.recipes.asObservable();
  }
  getActiveFilterUpdate(): Observable<any>{
    return this.activeFilters.asObservable();
  }
}
