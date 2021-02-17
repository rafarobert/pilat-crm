/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:04 GMT-0400 (Bolivia Time)
 * Time: 2:42:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:04 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:4
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { CallRescheduleService } from './call-reschedule.service';

describe('CallRescheduleService', () => {
  let service: CallRescheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallRescheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
