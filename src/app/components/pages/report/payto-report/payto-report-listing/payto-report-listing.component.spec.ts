import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytoReportListingComponent } from './payto-report-listing.component';

describe('PaytoReportListingComponent', () => {
  let component: PaytoReportListingComponent;
  let fixture: ComponentFixture<PaytoReportListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaytoReportListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytoReportListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
