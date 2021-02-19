/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:00 GMT-0400 (Bolivia Time)
 * Time: 2:42:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:00 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:0
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { BugAuditService } from './bug-audit.service';

describe('BugAuditService', () => {
  let service: BugAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
