import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBestSellersComponent } from './latest-best-sellers.component';

describe('LatestBestSellersComponent', () => {
  let component: LatestBestSellersComponent;
  let fixture: ComponentFixture<LatestBestSellersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestBestSellersComponent]
    });
    fixture = TestBed.createComponent(LatestBestSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
