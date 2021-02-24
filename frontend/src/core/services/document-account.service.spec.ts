/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:24 GMT-0400 (Bolivia Time)
 * Time: 2:42:24
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:24 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:24
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { DocumentAccountService } from './document-account.service';

describe('DocumentAccountService', () => {
  let service: DocumentAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
