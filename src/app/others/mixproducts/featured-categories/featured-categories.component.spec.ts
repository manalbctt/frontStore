import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCategoriesComponent } from './featured-categories.component';

describe('FeaturedCategoriesComponent', () => {
  let component: FeaturedCategoriesComponent;
  let fixture: ComponentFixture<FeaturedCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedCategoriesComponent]
    });
    fixture = TestBed.createComponent(FeaturedCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
