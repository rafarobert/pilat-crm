/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:09 GMT-0400 (Bolivia Time)
 * Time: 2:42:9
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:09 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:9
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {CampaignLog} from "../models/campaignLog";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CampaignLogService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/campaign-log`;
  dataChange: BehaviorSubject<CampaignLog[]> = new BehaviorSubject<CampaignLog[]>([]);
  campaignLogData: CampaignLog = new CampaignLog();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): CampaignLog[] {
    return this.dataChange.value;
  }

  getDataCampaignLog(): void {
    this.getAllCampaignLog().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:CampaignLog[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCampaignLog(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCampaignLog(campaignLog:CampaignLog) {
    return this.http.post(this.basePath, campaignLog);
  }
  getCampaignLog(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCampaignLog(id:any, campaignLog:CampaignLog) {
    return this.http.put(this.basePath + '/' + id, campaignLog);
  }
  deleteCampaignLog(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByArchived(archived:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByArchived/' + archived + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByHits(hits:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByHits/' + hits + '?' + attributes);
  }
  
  findOneByTargetTrackerKey(targetTrackerKey:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTargetTrackerKey/' + targetTrackerKey + '?' + attributes);
  }
  
  findOneByTargetId(targetId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTargetId/' + targetId + '?' + attributes);
  }
  
  findOneByTargetType(targetType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTargetType/' + targetType + '?' + attributes);
  }
  
  findOneByActivityType(activityType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByActivityType/' + activityType + '?' + attributes);
  }
  
  findOneByRelatedId(relatedId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedId/' + relatedId + '?' + attributes);
  }
  
  findOneByRelatedType(relatedType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedType/' + relatedType + '?' + attributes);
  }
  
  findOneByMoreInformation(moreInformation:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMoreInformation/' + moreInformation + '?' + attributes);
  }
  
  findOneByActivityDate(activityDate:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByActivityDate/' + activityDate + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  findOneByCampaignId(campaignId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCampaignId/' + campaignId + '?' + attributes);
  }
  
  findOneByListId(listId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByListId/' + listId + '?' + attributes);
  }
  
  findOneByMarketingId(marketingId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMarketingId/' + marketingId + '?' + attributes);
  }
  
  
  updateCampaignLogById(id:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogById?id=' + id, campaignLog);
  }
  
  updateCampaignLogByArchived(archived:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogByArchived?archived=' + archived, campaignLog);
  }
  
  updateCampaignLogByDeleted(deleted:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogByDeleted?deleted=' + deleted, campaignLog);
  }
  
  updateCampaignLogByHits(hits:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogByHits?hits=' + hits, campaignLog);
  }
  
  updateCampaignLogByTargetTrackerKey(targetTrackerKey:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogByTargetTrackerKey?targetTrackerKey=' + targetTrackerKey, campaignLog);
  }
  
  updateCampaignLogByTargetId(targetId:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogByTargetId?targetId=' + targetId, campaignLog);
  }
  
  updateCampaignLogByTargetType(targetType:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogByTargetType?targetType=' + targetType, campaignLog);
  }
  
  updateCampaignLogByActivityType(activityType:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogByActivityType?activityType=' + activityType, campaignLog);
  }
  
  updateCampaignLogByRelatedId(relatedId:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogByRelatedId?relatedId=' + relatedId, campaignLog);
  }
  
  updateCampaignLogByRelatedType(relatedType:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogByRelatedType?relatedType=' + relatedType, campaignLog);
  }
  
  updateCampaignLogByMoreInformation(moreInformation:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogByMoreInformation?moreInformation=' + moreInformation, campaignLog);
  }
  
  updateCampaignLogByActivityDate(activityDate:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogByActivityDate?activityDate=' + activityDate, campaignLog);
  }
  
  updateCampaignLogByDateModified(dateModified:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogByDateModified?dateModified=' + dateModified, campaignLog);
  }
  
  updateCampaignLogByCampaignId(campaignId:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogByCampaignId?campaignId=' + campaignId, campaignLog);
  }
  
  updateCampaignLogByListId(listId:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogByListId?listId=' + listId, campaignLog);
  }
  
  updateCampaignLogByMarketingId(marketingId:any, campaignLog:CampaignLog) {
      return this.http.post(this.basePath + '/updateCampaignLogByMarketingId?marketingId=' + marketingId, campaignLog);
  }
  
  
  
  //</es-section>
}
