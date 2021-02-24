/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 01:10:10 GMT-0400 (Bolivia Time)
 * Time: 1:10:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 01:10:10 GMT-0400 (Bolivia Time)
 * Last time updated: 1:10:10
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { OpportunitieService } from './opportunitie.service';

describe('OpportunitieService', () => {
  let service: OpportunitieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpportunitieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
