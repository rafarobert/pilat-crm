/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:51 GMT-0400 (Bolivia Time)
 * Time: 2:42:51
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:51 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:51
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { IadStickyNoteService } from './iad-sticky-note.service';

describe('IadStickyNoteService', () => {
  let service: IadStickyNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IadStickyNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
