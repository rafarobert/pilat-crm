/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:21 GMT-0400 (Bolivia Time)
 * Time: 2:41:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:21 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:21
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AopCaseUpdateService } from './aop-case-update.service';

describe('AopCaseUpdateService', () => {
  let service: AopCaseUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AopCaseUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
