/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:21:01 GMT-0400 (Bolivia Time)
 * Time: 4:21:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:21:01 GMT-0400 (Bolivia Time)
 * Last time updated: 4:21:1
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { DocumentOpportunityService } from './document-opportunity.service';

describe('DocumentOpportunityService', () => {
  let service: DocumentOpportunityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentOpportunityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
