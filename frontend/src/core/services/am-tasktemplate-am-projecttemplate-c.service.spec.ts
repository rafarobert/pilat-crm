/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:05 GMT-0400 (Bolivia Time)
 * Time: 2:41:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:05 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:5
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AmTasktemplateAmProjecttemplateCService } from './am-tasktemplate-am-projecttemplate-c.service';

describe('AmTasktemplateAmProjecttemplateCService', () => {
  let service: AmTasktemplateAmProjecttemplateCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmTasktemplateAmProjecttemplateCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
