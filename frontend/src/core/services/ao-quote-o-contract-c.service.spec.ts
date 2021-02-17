/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:51 GMT-0400 (Bolivia Time)
 * Time: 2:41:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:51 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:51
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AoQuoteOContractCService } from './ao-quote-o-contract-c.service';

describe('AoQuoteOContractCService', () => {
  let service: AoQuoteOContractCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AoQuoteOContractCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
