/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:01 GMT-0400 (Bolivia Time)
 * Time: 2:41:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:01 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:1
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AmProjecttemplateContact1CService } from './am-projecttemplate-contact-1-c.service';

describe('AmProjecttemplateContact1CService', () => {
  let service: AmProjecttemplateContact1CService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmProjecttemplateContact1CService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
