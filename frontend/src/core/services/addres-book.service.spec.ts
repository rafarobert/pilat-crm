/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:20:00 GMT-0400 (Bolivia Time)
 * Time: 4:20:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:20:00 GMT-0400 (Bolivia Time)
 * Last time updated: 4:20:0
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AddresBookService } from './addres-book.service';

describe('AddresBookService', () => {
  let service: AddresBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddresBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
