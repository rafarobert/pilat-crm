/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:19:58 GMT-0400 (Bolivia Time)
 * Time: 4:19:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:19:58 GMT-0400 (Bolivia Time)
 * Last time updated: 4:19:58
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AccountOpportunityService } from './account-opportunity.service';

describe('AccountOpportunityService', () => {
  let service: AccountOpportunityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountOpportunityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
