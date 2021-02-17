/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 02:51:17 GMT-0400 (Bolivia Time)
 * Time: 2:51:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 02:51:17 GMT-0400 (Bolivia Time)
 * Last time updated: 2:51:17
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { SlowLogService } from './slow-log.service';

describe('SlowLogService', () => {
  let service: SlowLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlowLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
