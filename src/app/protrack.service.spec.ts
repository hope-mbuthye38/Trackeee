import { TestBed } from '@angular/core/testing';

import { ProtrackService } from './protrack.service';

describe('ProtrackService', () => {
  let service: ProtrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
