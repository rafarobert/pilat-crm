import { TestBed } from '@angular/core/testing';

import { CrmOpportunityService } from './crm-opportunity.service';

describe('CrmOpportunityService', () => {
  let service: CrmOpportunityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmOpportunityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
