import { TestBed } from '@angular/core/testing';

import { PilatService } from './pilat.service';

describe('PilatService', () => {
  let service: PilatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
