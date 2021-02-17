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

import { SurveyquestionoptionAuditService } from './surveyquestionoption-audit.service';

describe('SurveyquestionoptionAuditService', () => {
  let service: SurveyquestionoptionAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyquestionoptionAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
