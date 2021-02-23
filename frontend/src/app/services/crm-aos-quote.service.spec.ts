import { TestBed } from '@angular/core/testing';

import { CrmAosQuoteService } from './crm-aos-quote.service';

describe('CrmAosQuoteService', () => {
  let service: CrmAosQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmAosQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
