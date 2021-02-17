/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:17:37 GMT-0400 (Bolivia Time)
 * Time: 3:17:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:17:37 GMT-0400 (Bolivia Time)
 * Last time updated: 3:17:37
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AdvancedreportScheduleGService } from './advancedreport-schedule-g.service';

describe('AdvancedreportScheduleGService', () => {
  let service: AdvancedreportScheduleGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvancedreportScheduleGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
