/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:10 GMT-0400 (Bolivia Time)
 * Time: 2:42:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:10 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:10
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { CampaignTrkrService } from './campaign-trkr.service';

describe('CampaignTrkrService', () => {
  let service: CampaignTrkrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignTrkrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
