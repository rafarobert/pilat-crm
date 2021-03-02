/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Time: 14:1:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:01:15 GMT-0400 (Bolivia Time)
 * Last time updated: 14:1:15
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { PilatCronService } from './pilat-cron.service';

describe('PilatCronService', () => {
  let service: PilatCronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilatCronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
