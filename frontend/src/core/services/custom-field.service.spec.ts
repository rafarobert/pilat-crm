/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:21 GMT-0400 (Bolivia Time)
 * Time: 2:42:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:21 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:21
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { CustomFieldService } from './custom-field.service';

describe('CustomFieldService', () => {
  let service: CustomFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
