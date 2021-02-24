/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:45 GMT-0400 (Bolivia Time)
 * Time: 2:42:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:45
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { FpEventContactCService } from './fp-event-contact-c.service';

describe('FpEventContactCService', () => {
  let service: FpEventContactCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FpEventContactCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
