/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:14 GMT-0400 (Bolivia Time)
 * Time: 2:44:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:14 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:14
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { SurveyquestionService } from './surveyquestion.service';

describe('SurveyquestionService', () => {
  let service: SurveyquestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyquestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
