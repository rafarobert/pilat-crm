/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:43 GMT-0400 (Bolivia Time)
 * Time: 2:43:43
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:43 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:43
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { ProjectContact1CService } from './project-contact-1-c.service';

describe('ProjectContact1CService', () => {
  let service: ProjectContact1CService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectContact1CService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
