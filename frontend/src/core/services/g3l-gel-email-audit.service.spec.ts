/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:02 GMT-0400 (Bolivia Time)
 * Time: 0:23:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:02 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:2
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { G3lGelEmailAuditService } from './g3l-gel-email-audit.service';

describe('G3lGelEmailAuditService', () => {
  let service: G3lGelEmailAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(G3lGelEmailAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
