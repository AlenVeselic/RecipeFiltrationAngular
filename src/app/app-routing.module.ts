import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { SearchViewComponent } from './search-view/search-view.component';

const routes: Routes = [
  {path:'', component: SearchViewComponent},
  {path:'recipe/:id', component: RecipeViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
