/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:19 GMT-0400 (Bolivia Time)
 * Time: 2:43:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:19 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:19
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { Oauth2tokenService } from './oauth2token.service';

describe('Oauth2tokenService', () => {
  let service: Oauth2tokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Oauth2tokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
