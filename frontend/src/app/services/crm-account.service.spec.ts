import { TestBed } from '@angular/core/testing';

import { CrmAccountService } from './crm-account.service';

describe('CrmAccountService', () => {
  let service: CrmAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
