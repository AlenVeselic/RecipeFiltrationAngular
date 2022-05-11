import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilterService, filterTypes } from 'src/app/services/filter.service';

@Component({
  selector: 'app-difficulty-level-filters',
  templateUrl: './difficulty-level-filters.component.html',
  styleUrls: ['./difficulty-level-filters.component.scss']
})
export class DifficultyLevelFiltersComponent implements OnInit {

  difficultyLevels: any = null;

  constructor(private http: HttpClient,
              private filterService: FilterService) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8000/api/v1/difficulty-levels").subscribe(d => {
      this.difficultyLevels = d
    })
  }

  setDifficultyLevel(difficultyLevel: string){
    this.filterService.setFilter(filterTypes.difficultyLevel, difficultyLevel)
  }

  select(event: MouseEvent){
    const target = event.target as HTMLParagraphElement;
    const lastSelected = document.getElementsByClassName("selected");
    let lastSelectedValue = ""
    if(lastSelected.length > 0) lastSelectedValue = lastSelected[0].innerHTML;
    const difficultyOptions = document.getElementsByClassName("difficultyOption")
    for(const option of difficultyOptions){
        option.classList.remove('selected')
    }

    if(event != null && event.target!= null && target.innerHTML != lastSelectedValue){
      target.classList.add('selected');
    } else {
      target.classList.remove('selected');
    }
  }

}
