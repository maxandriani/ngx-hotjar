import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHotjarComponent } from './ngx-hotjar.component';

describe('NgxHotjarComponent', () => {
  let component: NgxHotjarComponent;
  let fixture: ComponentFixture<NgxHotjarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxHotjarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHotjarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
