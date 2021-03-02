/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 02 2021 14:00:55 GMT-0400 (Bolivia Time)
 * Time: 14:0:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 02 2021 14:00:55 GMT-0400 (Bolivia Time)
 * Last time updated: 14:0:55
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { G3lGelEmailService } from './g3l-gel-email.service';

describe('G3lGelEmailService', () => {
  let service: G3lGelEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(G3lGelEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
