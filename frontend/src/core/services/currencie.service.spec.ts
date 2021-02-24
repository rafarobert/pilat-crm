/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 01:09:21 GMT-0400 (Bolivia Time)
 * Time: 1:9:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 01:09:21 GMT-0400 (Bolivia Time)
 * Last time updated: 1:9:21
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { CurrencieService } from './currencie.service';

describe('CurrencieService', () => {
  let service: CurrencieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
