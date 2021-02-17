/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:40 GMT-0400 (Bolivia Time)
 * Time: 2:43:40
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:40 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:40
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { ProjectBugService } from './project-bug.service';

describe('ProjectBugService', () => {
  let service: ProjectBugService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectBugService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
