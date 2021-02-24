/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Dec 20 2020 15:45:58 GMT-0400 (Bolivia Time)
 * Time: 15:45:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Dec 20 2020 15:45:58 GMT-0400 (Bolivia Time)
 * Last time updated: 15:45:58
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { FeatureService } from './feature.service';

describe('FeatureService', () => {
  let service: FeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
