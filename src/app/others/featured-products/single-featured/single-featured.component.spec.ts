import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFeaturedComponent } from './single-featured.component';

describe('SingleFeaturedComponent', () => {
  let component: SingleFeaturedComponent;
  let fixture: ComponentFixture<SingleFeaturedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleFeaturedComponent]
    });
    fixture = TestBed.createComponent(SingleFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
