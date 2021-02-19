import { TestBed } from '@angular/core/testing';

import { CrmContactService } from './crm-contact.service';

describe('CrmContactService', () => {
  let service: CrmContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
