/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:52 GMT-0400 (Bolivia Time)
 * Time: 2:40:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:52 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:52
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AclActionService } from './acl-action.service';

describe('AclActionService', () => {
  let service: AclActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AclActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
