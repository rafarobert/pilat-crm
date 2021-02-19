/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:47 GMT-0400 (Bolivia Time)
 * Time: 2:42:47
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:47 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:47
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { FpEventLead1CService } from './fp-event-lead-1-c.service';

describe('FpEventLead1CService', () => {
  let service: FpEventLead1CService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FpEventLead1CService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
