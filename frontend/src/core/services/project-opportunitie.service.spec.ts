/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:42 GMT-0400 (Bolivia Time)
 * Time: 2:43:42
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:42 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:42
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { ProjectOpportunitieService } from './project-opportunitie.service';

describe('ProjectOpportunitieService', () => {
  let service: ProjectOpportunitieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectOpportunitieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
