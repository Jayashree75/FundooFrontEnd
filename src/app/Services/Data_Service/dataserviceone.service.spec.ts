import { TestBed } from '@angular/core/testing';

import { DataserviceoneService } from './dataserviceone.service';

describe('DataserviceoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataserviceoneService = TestBed.get(DataserviceoneService);
    expect(service).toBeTruthy();
  });
});
