/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:19:30 GMT-0400 (Bolivia Time)
 * Time: 3:19:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:19:30 GMT-0400 (Bolivia Time)
 * Last time updated: 3:19:30
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { SoUserService } from './so-user.service';

describe('SoUserService', () => {
  let service: SoUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
