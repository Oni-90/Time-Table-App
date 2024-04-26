import { TestBed } from '@angular/core/testing';

import { EnseignantsService } from './enseignants.service';

describe('EnseignantsService', () => {
  let service: EnseignantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnseignantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
