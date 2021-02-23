/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 02:50:45 GMT-0400 (Bolivia Time)
 * Time: 2:50:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 02:50:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:50:45
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { GeneralLogService } from './general-log.service';

describe('GeneralLogService', () => {
  let service: GeneralLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
