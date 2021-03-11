/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 09 2021 00:05:05 GMT-0400 (Bolivia Time)
 * Time: 0:5:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 09 2021 00:05:05 GMT-0400 (Bolivia Time)
 * Last time updated: 0:5:5
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { PilatLogService } from './pilat-log.service';

describe('PilatLogService', () => {
  let service: PilatLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilatLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
