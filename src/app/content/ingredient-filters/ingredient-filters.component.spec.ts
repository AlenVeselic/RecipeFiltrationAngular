import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientFiltersComponent } from './ingredient-filters.component';

describe('IngredientFiltersComponent', () => {
  let component: IngredientFiltersComponent;
  let fixture: ComponentFixture<IngredientFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
