/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:25 GMT-0400 (Bolivia Time)
 * Time: 2:44:25
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:25 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:25
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { UserLastImportService } from './user-last-import.service';

describe('UserLastImportService', () => {
  let service: UserLastImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLastImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
