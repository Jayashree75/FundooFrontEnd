import { TestBed } from '@angular/core/testing';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

import { DataService } from './data-service.service';

describe('DataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [DataService]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
