import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixproductsComponent } from './mixproducts.component';

describe('MixproductsComponent', () => {
  let component: MixproductsComponent;
  let fixture: ComponentFixture<MixproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MixproductsComponent]
    });
    fixture = TestBed.createComponent(MixproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
