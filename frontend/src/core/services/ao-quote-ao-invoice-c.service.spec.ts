/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:49 GMT-0400 (Bolivia Time)
 * Time: 2:41:49
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:49 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:49
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AoQuoteAoInvoiceCService } from './ao-quote-ao-invoice-c.service';

describe('AoQuoteAoInvoiceCService', () => {
  let service: AoQuoteAoInvoiceCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AoQuoteAoInvoiceCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
