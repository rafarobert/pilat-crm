import { TestBed } from '@angular/core/testing';

import { CrmLeadService } from './crm-lead.service';

describe('CrmLeadService', () => {
  let service: CrmLeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmLeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
