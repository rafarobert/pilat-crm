/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:03 GMT-0400 (Bolivia Time)
 * Time: 2:41:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:03 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:3
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AmProjecttemplateUser1CService } from './am-projecttemplate-user-1-c.service';

describe('AmProjecttemplateUser1CService', () => {
  let service: AmProjecttemplateUser1CService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmProjecttemplateUser1CService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
