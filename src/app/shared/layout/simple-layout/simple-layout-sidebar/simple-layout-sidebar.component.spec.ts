import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLayoutSidebarComponent } from './simple-layout-sidebar.component';

describe('SimpleLayoutSidebarComponent', () => {
  let component: SimpleLayoutSidebarComponent;
  let fixture: ComponentFixture<SimpleLayoutSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleLayoutSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLayoutSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
