import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationTypeFiltersComponent } from './preparation-type-filters.component';

describe('PreparationTypeFiltersComponent', () => {
  let component: PreparationTypeFiltersComponent;
  let fixture: ComponentFixture<PreparationTypeFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparationTypeFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationTypeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
