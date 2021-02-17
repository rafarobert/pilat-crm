/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:18 GMT-0400 (Bolivia Time)
 * Time: 2:41:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:18 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:18
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AokKnowledgeBaseCategorieService } from './aok-knowledge-base-categorie.service';

describe('AokKnowledgeBaseCategorieService', () => {
  let service: AokKnowledgeBaseCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AokKnowledgeBaseCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
