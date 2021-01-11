import { TestBed } from '@angular/core/testing';

import { InstructoreService } from './instructore.service';

describe('InstructoreService', () => {
  let service: InstructoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
