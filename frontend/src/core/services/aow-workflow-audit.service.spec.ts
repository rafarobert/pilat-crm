/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:57 GMT-0400 (Bolivia Time)
 * Time: 2:41:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:57 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:57
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AowWorkflowAuditService } from './aow-workflow-audit.service';

describe('AowWorkflowAuditService', () => {
  let service: AowWorkflowAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AowWorkflowAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
