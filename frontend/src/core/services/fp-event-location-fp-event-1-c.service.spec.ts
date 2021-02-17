/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:50 GMT-0400 (Bolivia Time)
 * Time: 2:42:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:50 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:50
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { FpEventLocationFpEvent1CService } from './fp-event-location-fp-event-1-c.service';

describe('FpEventLocationFpEvent1CService', () => {
  let service: FpEventLocationFpEvent1CService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FpEventLocationFpEvent1CService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
