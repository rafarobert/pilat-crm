import { TestBed } from '@angular/core/testing';

import { CrmCallService } from './crm-call.service';

describe('CrmCallServiceService', () => {
  let service: CrmCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
