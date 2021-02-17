/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:21:22 GMT-0400 (Bolivia Time)
 * Time: 4:21:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:21:22 GMT-0400 (Bolivia Time)
 * Last time updated: 4:21:22
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { JjwgAddresCacheService } from './jjwg-addres-cache.service';

describe('JjwgAddresCacheService', () => {
  let service: JjwgAddresCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JjwgAddresCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
