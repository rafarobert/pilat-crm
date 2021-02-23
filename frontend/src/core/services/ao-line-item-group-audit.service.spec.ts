/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:38 GMT-0400 (Bolivia Time)
 * Time: 2:41:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:38 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:38
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AoLineItemGroupAuditService } from './ao-line-item-group-audit.service';

describe('AoLineItemGroupAuditService', () => {
  let service: AoLineItemGroupAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AoLineItemGroupAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
