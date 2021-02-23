/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:28 GMT-0400 (Bolivia Time)
 * Time: 2:42:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:28 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:28
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { EapmService } from './eapm.service';

describe('EapmService', () => {
  let service: EapmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EapmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
