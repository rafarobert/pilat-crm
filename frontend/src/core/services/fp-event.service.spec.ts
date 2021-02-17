/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:44 GMT-0400 (Bolivia Time)
 * Time: 2:42:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:44 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:44
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { FpEventService } from './fp-event.service';

describe('FpEventService', () => {
  let service: FpEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FpEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
