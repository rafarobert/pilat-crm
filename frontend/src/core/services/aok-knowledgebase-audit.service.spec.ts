/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:16 GMT-0400 (Bolivia Time)
 * Time: 2:41:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:16 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:16
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AokKnowledgebaseAuditService } from './aok-knowledgebase-audit.service';

describe('AokKnowledgebaseAuditService', () => {
  let service: AokKnowledgebaseAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AokKnowledgebaseAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
