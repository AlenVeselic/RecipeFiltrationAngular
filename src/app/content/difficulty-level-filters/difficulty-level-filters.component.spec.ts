import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyLevelFiltersComponent } from './difficulty-level-filters.component';

describe('DifficultyLevelFiltersComponent', () => {
  let component: DifficultyLevelFiltersComponent;
  let fixture: ComponentFixture<DifficultyLevelFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifficultyLevelFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultyLevelFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
