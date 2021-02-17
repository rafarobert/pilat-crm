/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:52 GMT-0400 (Bolivia Time)
 * Time: 2:42:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:52 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:52
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { IadStickyNoteAuditService } from './iad-sticky-note-audit.service';

describe('IadStickyNoteAuditService', () => {
  let service: IadStickyNoteAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IadStickyNoteAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
