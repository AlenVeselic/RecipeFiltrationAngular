import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { ResultGridComponent } from './result-grid/result-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { SearchAreaComponent } from './content/search-area/search-area.component';
import { SelectedFiltersComponent } from './content/selected-filters/selected-filters.component';
import { HeaderComponent } from './header/header.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { PreparationTypeFiltersComponent } from './content/preparation-type-filters/preparation-type-filters.component';
import { DifficultyLevelFiltersComponent } from './content/difficulty-level-filters/difficulty-level-filters.component';
import { IngredientFiltersComponent } from './content/ingredient-filters/ingredient-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    ResultGridComponent,
    SearchAreaComponent,
    SelectedFiltersComponent,
    HeaderComponent,
    RecipeViewComponent,
    SearchViewComponent,
    PreparationTypeFiltersComponent,
    DifficultyLevelFiltersComponent,
    IngredientFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
