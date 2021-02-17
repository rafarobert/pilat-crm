/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:26 GMT-0400 (Bolivia Time)
 * Time: 2:41:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:26 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:26
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AorReportService } from './aor-report.service';

describe('AorReportService', () => {
  let service: AorReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AorReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
