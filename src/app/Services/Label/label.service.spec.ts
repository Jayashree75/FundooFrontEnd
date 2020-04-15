import { TestBed } from '@angular/core/testing';

import { LabelService } from './label.service';
import { HttpClientModule } from '@angular/common/http';

describe('LabelService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: LabelService = TestBed.get(LabelService);
    expect(service).toBeTruthy();
  });
});
