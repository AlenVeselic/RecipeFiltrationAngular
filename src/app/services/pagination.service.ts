import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  currentPage: number = 1;
  pageNumber:number = 0;
  private currentPageNumber = new BehaviorSubject<number>(this.currentPage)
  private numberOfPages = new BehaviorSubject<number>(this.pageNumber)

  constructor() { }

  getNumberOfPages(){
    return this.numberOfPages.asObservable()
  }
  setNumberOfPages(numberOfPages: number){
    this.numberOfPages.next(numberOfPages)
    this.setCurrentPageNumber(1)
  }

  getCurrentPageNumber(){
    return this.currentPageNumber.asObservable()
  }

  setCurrentPageNumber(newPageNumber: number){
    this.currentPageNumber.next(newPageNumber)
  }
}
