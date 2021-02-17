/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:20:13 GMT-0400 (Bolivia Time)
 * Time: 4:20:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:20:13 GMT-0400 (Bolivia Time)
 * Last time updated: 4:20:13
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AokKnowledgeBaseCategoryService } from './aok-knowledge-base-category.service';

describe('AokKnowledgeBaseCategoryService', () => {
  let service: AokKnowledgeBaseCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AokKnowledgeBaseCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
