/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:52 GMT-0400 (Bolivia Time)
 * Time: 2:42:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:52 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:52
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { ImportMapService } from './import-map.service';

describe('ImportMapService', () => {
  let service: ImportMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
