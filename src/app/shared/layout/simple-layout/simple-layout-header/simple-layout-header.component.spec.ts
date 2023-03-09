import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLayoutHeaderComponent } from './simple-layout-header.component';

describe('SimpleLayoutHeaderComponent', () => {
  let component: SimpleLayoutHeaderComponent;
  let fixture: ComponentFixture<SimpleLayoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleLayoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
