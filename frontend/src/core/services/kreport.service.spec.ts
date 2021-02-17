/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:18:54 GMT-0400 (Bolivia Time)
 * Time: 3:18:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:18:54 GMT-0400 (Bolivia Time)
 * Last time updated: 3:18:54
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { KreportService } from './kreport.service';

describe('KreportService', () => {
  let service: KreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
