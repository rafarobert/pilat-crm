/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:05 GMT-0400 (Bolivia Time)
 * Time: 2:44:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:05 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:5
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { SecuritygroupDefaultService } from './securitygroup-default.service';

describe('SecuritygroupDefaultService', () => {
  let service: SecuritygroupDefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuritygroupDefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
