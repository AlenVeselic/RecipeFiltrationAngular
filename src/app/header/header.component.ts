import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  randomRecipeId: number = 0;

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
  }

  goToRandomRecipe(){
    this.http.get("http://localhost:8000/api/v1/recipeIds").subscribe((response: any) => {
      this.randomRecipeId = response[Math.floor(Math.random() * response.length)];
      this.router.navigateByUrl('/recipe/' + String(this.randomRecipeId)).then(() => {window.location.reload()});
    })
  }

}
