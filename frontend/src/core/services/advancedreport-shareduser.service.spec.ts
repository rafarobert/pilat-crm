/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:17:39 GMT-0400 (Bolivia Time)
 * Time: 3:17:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:17:39 GMT-0400 (Bolivia Time)
 * Last time updated: 3:17:39
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AdvancedreportShareduserService } from './advancedreport-shareduser.service';

describe('AdvancedreportShareduserService', () => {
  let service: AdvancedreportShareduserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvancedreportShareduserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
