/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:45 GMT-0400 (Bolivia Time)
 * Time: 2:42:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:45
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { FpEventAuditService } from './fp-event-audit.service';

describe('FpEventAuditService', () => {
  let service: FpEventAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FpEventAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
