/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:20:12 GMT-0400 (Bolivia Time)
 * Time: 4:20:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:20:12 GMT-0400 (Bolivia Time)
 * Last time updated: 4:20:12
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AokKnowledgebaseCategoryService } from './aok-knowledgebase-category.service';

describe('AokKnowledgebaseCategoryService', () => {
  let service: AokKnowledgebaseCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AokKnowledgebaseCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
