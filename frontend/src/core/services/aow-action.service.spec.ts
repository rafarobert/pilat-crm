/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:53 GMT-0400 (Bolivia Time)
 * Time: 2:41:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:53 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:53
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AowActionService } from './aow-action.service';

describe('AowActionService', () => {
  let service: AowActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AowActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
