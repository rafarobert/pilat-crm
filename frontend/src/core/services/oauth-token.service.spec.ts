/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:22 GMT-0400 (Bolivia Time)
 * Time: 2:43:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:22 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:22
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { OauthTokenService } from './oauth-token.service';

describe('OauthTokenService', () => {
  let service: OauthTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OauthTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
