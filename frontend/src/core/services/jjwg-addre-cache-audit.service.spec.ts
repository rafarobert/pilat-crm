/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:56 GMT-0400 (Bolivia Time)
 * Time: 2:42:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:56 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:56
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { JjwgAddreCacheAuditService } from './jjwg-addre-cache-audit.service';

describe('JjwgAddreCacheAuditService', () => {
  let service: JjwgAddreCacheAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JjwgAddreCacheAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
