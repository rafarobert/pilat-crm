/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 01:10:14 GMT-0400 (Bolivia Time)
 * Time: 1:10:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 01:10:14 GMT-0400 (Bolivia Time)
 * Last time updated: 1:10:14
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { PilatDictionaryService } from './pilat-dictionary.service';

describe('PilatDictionaryService', () => {
  let service: PilatDictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilatDictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
