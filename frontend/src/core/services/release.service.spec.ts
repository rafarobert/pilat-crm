/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:56 GMT-0400 (Bolivia Time)
 * Time: 2:43:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:56 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:56
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { ReleaseService } from './release.service';

describe('ReleaseService', () => {
  let service: ReleaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReleaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
