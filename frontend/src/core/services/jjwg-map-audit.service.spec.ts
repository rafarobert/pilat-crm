/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:59 GMT-0400 (Bolivia Time)
 * Time: 2:42:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:59 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:59
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { JjwgMapAuditService } from './jjwg-map-audit.service';

describe('JjwgMapAuditService', () => {
  let service: JjwgMapAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JjwgMapAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>