import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export enum filterTypes {
  preparationType,
  ingredient,
  difficultyLevel,
  searchQuery
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  preparationTypes: string[] = [];
  ingredients: string[] = [];
  difficultyLevel: string[] = [""];
  searchQuery: string = ""
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
      case filterTypes.searchQuery:{
        this.searchQuery = filterValue;
        break;
      }
    }

    this.search()
  }
  search(){
    let body: any = {}
    body.preparationTypes = this.preparationTypes.length > 0 ? this.preparationTypes : [""];
    body.ingredients = this.ingredients.length > 0 ? this.ingredients : [""];
    body.difficultyLevel = this.difficultyLevel.length > 0 ? this.difficultyLevel : [""];
    body.searchQuery = this.searchQuery
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

  areFiltersEmpty(): boolean{
    if(this.preparationTypes.length > 0 && this.preparationTypes[0] != ""){
      return false
    }
    if(this.ingredients.length > 0 && this.ingredients[0] != ""){
      return false
    }
    if(this.difficultyLevel.length > 0 && this.difficultyLevel[0] != ""){
      return false
    }
    if(this.searchQuery.length > 0 && this.searchQuery != ""){
      return false
    }
    return true
  }

}
