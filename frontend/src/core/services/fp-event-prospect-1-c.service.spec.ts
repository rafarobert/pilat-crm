/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:48 GMT-0400 (Bolivia Time)
 * Time: 2:42:48
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:48 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:48
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { FpEventProspect1CService } from './fp-event-prospect-1-c.service';

describe('FpEventProspect1CService', () => {
  let service: FpEventProspect1CService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FpEventProspect1CService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
