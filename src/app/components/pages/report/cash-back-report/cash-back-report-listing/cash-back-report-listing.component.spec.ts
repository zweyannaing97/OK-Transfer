import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBackReportListingComponent } from './cash-back-report-listing.component';

describe('CashBackReportListingComponent', () => {
  let component: CashBackReportListingComponent;
  let fixture: ComponentFixture<CashBackReportListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashBackReportListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashBackReportListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
