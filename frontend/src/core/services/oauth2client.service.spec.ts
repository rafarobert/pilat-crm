/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:17 GMT-0400 (Bolivia Time)
 * Time: 2:43:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:17 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:17
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { Oauth2clientService } from './oauth2client.service';

describe('Oauth2clientService', () => {
  let service: Oauth2clientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Oauth2clientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
