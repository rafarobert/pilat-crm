/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:01 GMT-0400 (Bolivia Time)
 * Time: 2:43:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:01 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:1
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { JjwgMarkerService } from './jjwg-marker.service';

describe('JjwgMarkerService', () => {
  let service: JjwgMarkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JjwgMarkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
