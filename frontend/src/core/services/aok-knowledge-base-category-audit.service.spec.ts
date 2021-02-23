/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:20:14 GMT-0400 (Bolivia Time)
 * Time: 4:20:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:20:14 GMT-0400 (Bolivia Time)
 * Last time updated: 4:20:14
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AokKnowledgeBaseCategoryAuditService } from './aok-knowledge-base-category-audit.service';

describe('AokKnowledgeBaseCategoryAuditService', () => {
  let service: AokKnowledgeBaseCategoryAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AokKnowledgeBaseCategoryAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
