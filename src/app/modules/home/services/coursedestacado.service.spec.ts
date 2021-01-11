import { TestBed } from '@angular/core/testing';

import { CoursedestacadoService } from './coursedestacado.service';

describe('CoursedestacadoService', () => {
  let service: CoursedestacadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursedestacadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
