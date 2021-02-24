/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:53 GMT-0400 (Bolivia Time)
 * Time: 2:43:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:53 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:53
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { ProspectListService } from './prospect-list.service';

describe('ProspectListService', () => {
  let service: ProspectListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProspectListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
