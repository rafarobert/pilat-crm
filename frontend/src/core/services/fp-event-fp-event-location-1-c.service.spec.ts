/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:46 GMT-0400 (Bolivia Time)
 * Time: 2:42:46
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:46 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:46
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { FpEventFpEventLocation1CService } from './fp-event-fp-event-location-1-c.service';

describe('FpEventFpEventLocation1CService', () => {
  let service: FpEventFpEventLocation1CService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FpEventFpEventLocation1CService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
