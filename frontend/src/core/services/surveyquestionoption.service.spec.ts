/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:10 GMT-0400 (Bolivia Time)
 * Time: 2:44:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:10 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:10
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { SurveyquestionoptionService } from './surveyquestionoption.service';

describe('SurveyquestionoptionService', () => {
  let service: SurveyquestionoptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyquestionoptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
