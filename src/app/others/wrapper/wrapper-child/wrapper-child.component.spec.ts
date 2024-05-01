import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperChildComponent } from './wrapper-child.component';

describe('WrapperChildComponent', () => {
  let component: WrapperChildComponent;
  let fixture: ComponentFixture<WrapperChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperChildComponent]
    });
    fixture = TestBed.createComponent(WrapperChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
