/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:00 GMT-0400 (Bolivia Time)
 * Time: 2:44:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:00 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:0
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { RoleModuleService } from './role-module.service';

describe('RoleModuleService', () => {
  let service: RoleModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>