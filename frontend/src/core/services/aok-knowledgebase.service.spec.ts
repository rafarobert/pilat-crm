/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:15 GMT-0400 (Bolivia Time)
 * Time: 2:41:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:15 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:15
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AokKnowledgebaseService } from './aok-knowledgebase.service';

describe('AokKnowledgebaseService', () => {
  let service: AokKnowledgebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AokKnowledgebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
