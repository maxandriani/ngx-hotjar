import { TestBed } from '@angular/core/testing';

import { NgxHotjarService } from './ngx-hotjar.service';

describe('NgxHotjarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxHotjarService = TestBed.get(NgxHotjarService);
    expect(service).toBeTruthy();
  });
});
