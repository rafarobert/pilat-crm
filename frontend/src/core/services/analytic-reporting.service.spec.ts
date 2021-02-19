/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:07 GMT-0400 (Bolivia Time)
 * Time: 2:41:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:07 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:7
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AnalyticReportingService } from './analytic-reporting.service';

describe('AnalyticReportingService', () => {
  let service: AnalyticReportingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticReportingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
