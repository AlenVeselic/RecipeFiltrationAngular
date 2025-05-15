import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilterService, filterTypes } from 'src/app/services/filter.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-difficulty-level-filters',
  templateUrl: './difficulty-level-filters.component.html',
  styleUrls: ['./difficulty-level-filters.component.scss']
})
export class DifficultyLevelFiltersComponent implements OnInit {

  difficultyLevels: any = null;

  constructor(private http: HttpClient,
              public filterService: FilterService) { }

  ngOnInit(): void {
    this.http.get(`${environment.api_url}/api/v1/difficulty-levels`).subscribe(d => {
      this.difficultyLevels = d
    })
  }

  setDifficultyLevel(difficultyLevel: string){
    this.filterService.setFilter(filterTypes.difficultyLevel, difficultyLevel)
  }

  select(event: MouseEvent){
    const target = event.target as HTMLParagraphElement;
    const lastSelected = document.querySelector(".difficultyOption.selected")
    let lastSelectedValue = ""
    if(lastSelected) lastSelectedValue = lastSelected.innerHTML;
    const difficultyOptions = document.getElementsByClassName("difficultyOption")
    for(const option of difficultyOptions){
        option.classList.remove('selected')
    }
    if(target !== lastSelected){
      if(event != null && event.target!= null && target.innerHTML != lastSelectedValue){
        target.classList.add('selected');
      } else {
        target.classList.remove('selected');
      }
    }
    
  }

}
