import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBComponent } from './page-b.component';

describe('PageBComponent', () => {
  let component: PageBComponent;
  let fixture: ComponentFixture<PageBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
