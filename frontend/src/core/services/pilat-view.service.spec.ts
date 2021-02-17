/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 03 2021 23:45:31 GMT-0400 (Bolivia Time)
 * Time: 23:45:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 03 2021 23:45:31 GMT-0400 (Bolivia Time)
 * Last time updated: 23:45:31
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { PilatViewService } from './pilat-view.service';

describe('PilatViewService', () => {
  let service: PilatViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilatViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
