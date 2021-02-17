/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:07 GMT-0400 (Bolivia Time)
 * Time: 2:42:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:07 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:7
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Campaigns} from "../models/campaigns";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/campaigns`;
  dataChange: BehaviorSubject<Campaigns[]> = new BehaviorSubject<Campaigns[]>([]);
  campaignData: Campaigns = new Campaigns();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Campaigns[] {
    return this.dataChange.value;
  }

  getDataCampaigns(): void {
    this.getAllCampaigns().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Campaigns[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCampaigns(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
    let attributes = '';
    if(select.length) {
        attributes += 'select=' + select.toString() + '&';
    }
    if(Object.keys(where).length) {
        attributes += 'where=' + JSON.stringify(where) + '&';
    }
    if(order.length) {
        attributes += 'order=' + JSON.stringify(order) + '&';
    }
    if(limit) {
        attributes += 'limit=' + limit + '&';
    }
    if(offset) {
        attributes += 'offset=' + offset + '&';
    }
    return this.http.get(this.basePath + '?' + attributes);
  }
  createCampaign(campaign:Campaigns) {
    return this.http.post(this.basePath, campaign);
  }
  getCampaign(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCampaign(id:any, campaign:Campaigns) {
    return this.http.put(this.basePath + '/' + id, campaign);
  }
  deleteCampaign(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByTrackerKey(trackerKey:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTrackerKey/' + trackerKey + '?' + attributes);
  }
  
  findOneByTrackerCount(trackerCount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTrackerCount/' + trackerCount + '?' + attributes);
  }
  
  findOneByImpressions(impressions:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByImpressions/' + impressions + '?' + attributes);
  }
  
  findOneByBudget(budget:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBudget/' + budget + '?' + attributes);
  }
  
  findOneByExpectedCost(expectedCost:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByExpectedCost/' + expectedCost + '?' + attributes);
  }
  
  findOneByActualCost(actualCost:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByActualCost/' + actualCost + '?' + attributes);
  }
  
  findOneByExpectedRevenue(expectedRevenue:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByExpectedRevenue/' + expectedRevenue + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByReferUrl(referUrl:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReferUrl/' + referUrl + '?' + attributes);
  }
  
  findOneByTrackerText(trackerText:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTrackerText/' + trackerText + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByCampaignType(campaignType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCampaignType/' + campaignType + '?' + attributes);
  }
  
  findOneByFrequency(frequency:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFrequency/' + frequency + '?' + attributes);
  }
  
  findOneByObjective(objective:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByObjective/' + objective + '?' + attributes);
  }
  
  findOneByContent(content:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContent/' + content + '?' + attributes);
  }
  
  findOneByDateEntered(dateEntered:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateEntered/' + dateEntered + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  findOneByStartDate(startDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStartDate/' + startDate + '?' + attributes);
  }
  
  findOneByEndDate(endDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEndDate/' + endDate + '?' + attributes);
  }
  
  findOneByModifiedUserId(modifiedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModifiedUserId/' + modifiedUserId + '?' + attributes);
  }
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  findOneByCurrencyId(currencyId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCurrencyId/' + currencyId + '?' + attributes);
  }
  
  findOneBySurveyId(surveyId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySurveyId/' + surveyId + '?' + attributes);
  }
  
  
  updateCampaignById(id:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignById?id=' + id, campaign);
  }
  
  updateCampaignByDeleted(deleted:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByDeleted?deleted=' + deleted, campaign);
  }
  
  updateCampaignByTrackerKey(trackerKey:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByTrackerKey?trackerKey=' + trackerKey, campaign);
  }
  
  updateCampaignByTrackerCount(trackerCount:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByTrackerCount?trackerCount=' + trackerCount, campaign);
  }
  
  updateCampaignByImpressions(impressions:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByImpressions?impressions=' + impressions, campaign);
  }
  
  updateCampaignByBudget(budget:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByBudget?budget=' + budget, campaign);
  }
  
  updateCampaignByExpectedCost(expectedCost:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByExpectedCost?expectedCost=' + expectedCost, campaign);
  }
  
  updateCampaignByActualCost(actualCost:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByActualCost?actualCost=' + actualCost, campaign);
  }
  
  updateCampaignByExpectedRevenue(expectedRevenue:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByExpectedRevenue?expectedRevenue=' + expectedRevenue, campaign);
  }
  
  updateCampaignByName(name:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByName?name=' + name, campaign);
  }
  
  updateCampaignByReferUrl(referUrl:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByReferUrl?referUrl=' + referUrl, campaign);
  }
  
  updateCampaignByTrackerText(trackerText:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByTrackerText?trackerText=' + trackerText, campaign);
  }
  
  updateCampaignByStatus(status:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByStatus?status=' + status, campaign);
  }
  
  updateCampaignByCampaignType(campaignType:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByCampaignType?campaignType=' + campaignType, campaign);
  }
  
  updateCampaignByFrequency(frequency:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByFrequency?frequency=' + frequency, campaign);
  }
  
  updateCampaignByObjective(objective:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByObjective?objective=' + objective, campaign);
  }
  
  updateCampaignByContent(content:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByContent?content=' + content, campaign);
  }
  
  updateCampaignByDateEntered(dateEntered:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByDateEntered?dateEntered=' + dateEntered, campaign);
  }
  
  updateCampaignByDateModified(dateModified:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByDateModified?dateModified=' + dateModified, campaign);
  }
  
  updateCampaignByStartDate(startDate:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByStartDate?startDate=' + startDate, campaign);
  }
  
  updateCampaignByEndDate(endDate:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByEndDate?endDate=' + endDate, campaign);
  }
  
  updateCampaignByModifiedUserId(modifiedUserId:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByModifiedUserId?modifiedUserId=' + modifiedUserId, campaign);
  }
  
  updateCampaignByCreatedBy(createdBy:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByCreatedBy?createdBy=' + createdBy, campaign);
  }
  
  updateCampaignByAssignedUserId(assignedUserId:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByAssignedUserId?assignedUserId=' + assignedUserId, campaign);
  }
  
  updateCampaignByCurrencyId(currencyId:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignByCurrencyId?currencyId=' + currencyId, campaign);
  }
  
  updateCampaignBySurveyId(surveyId:any, campaign:Campaigns) {
      return this.http.post(this.basePath + '/updateCampaignBySurveyId?surveyId=' + surveyId, campaign);
  }
  
  
  
  //</es-section>
}
