/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 03 2021 23:45:30 GMT-0400 (Bolivia Time)
 * Time: 23:45:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 03 2021 23:45:30 GMT-0400 (Bolivia Time)
 * Last time updated: 23:45:30
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { PilatModuleService } from './pilat-module.service';

describe('PilatModuleService', () => {
  let service: PilatModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilatModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
