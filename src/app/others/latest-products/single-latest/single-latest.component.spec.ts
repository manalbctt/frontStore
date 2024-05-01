import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLatestComponent } from './single-latest.component';

describe('SingleLatestComponent', () => {
  let component: SingleLatestComponent;
  let fixture: ComponentFixture<SingleLatestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleLatestComponent]
    });
    fixture = TestBed.createComponent(SingleLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
