/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:54 GMT-0400 (Bolivia Time)
 * Time: 2:43:54
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:54 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:54
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { ProspectListCampaignService } from './prospect-list-campaign.service';

describe('ProspectListCampaignService', () => {
  let service: ProspectListCampaignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProspectListCampaignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
