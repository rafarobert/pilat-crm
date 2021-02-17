/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:40:59 GMT-0400 (Bolivia Time)
 * Time: 2:40:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:40:59 GMT-0400 (Bolivia Time)
 * Last time updated: 2:40:59
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AmProjecttemplateService } from './am-projecttemplate.service';

describe('AmProjecttemplateService', () => {
  let service: AmProjecttemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmProjecttemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
