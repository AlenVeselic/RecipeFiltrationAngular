import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginationService } from './pagination.service';

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
  currentRecipes: Object[] = [];
  currentPage: number = 0
  private recipes = new BehaviorSubject<Object[]>(this.currentRecipes)
  private activeFilters = new Subject<any>()


  constructor(private http: HttpClient,
              private pagination: PaginationService
              ) 
              {
                this.pagination.getCurrentPageNumber().subscribe(pageNumber => this.currentPage = pageNumber)
              }

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

    this.search(false)
  }
  search(addToRecipes: boolean){
    let body: any = {}
    body.preparationTypes = this.preparationTypes.length > 0 ? this.preparationTypes : [""];
    body.ingredients = this.ingredients.length > 0 ? this.ingredients : [""];
    body.difficultyLevel = this.difficultyLevel.length > 0 ? this.difficultyLevel : [""];
    body.searchQuery = this.searchQuery
    let recipes: any = {}
    console.log(body)
    this.activeFilters.next(body);
    let searchUrl = `${environment.api_url}/api/v1/recipes/search`
    if(addToRecipes) searchUrl += `?page=${this.currentPage + 1}`
    this.http.post(searchUrl, body).subscribe(response => {
      recipes = response
      console.log(response)
      if(addToRecipes){
        this.getRecipeUpdate().subscribe(current => this.currentRecipes = current)
        this.recipes.next([...this.currentRecipes,...recipes.data])
        this.pagination.setCurrentPageNumber(this.currentPage + 1)
            
      }
      else{ 
        this.recipes.next(recipes.data)
        this.pagination.setNumberOfPages(recipes.last_page)
      }
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
