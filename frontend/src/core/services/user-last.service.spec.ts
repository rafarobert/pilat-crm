/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:19:44 GMT-0400 (Bolivia Time)
 * Time: 3:19:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:19:44 GMT-0400 (Bolivia Time)
 * Last time updated: 3:19:44
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { UserLastService } from './user-last.service';

describe('UserLastService', () => {
  let service: UserLastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
