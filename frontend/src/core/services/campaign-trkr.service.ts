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

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {CampaignTrkrs} from "../models/campaignTrkrs";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CampaignTrkrService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/campaign-trkrs`;
  dataChange: BehaviorSubject<CampaignTrkrs[]> = new BehaviorSubject<CampaignTrkrs[]>([]);
  campaignTrkrData: CampaignTrkrs = new CampaignTrkrs();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): CampaignTrkrs[] {
    return this.dataChange.value;
  }

  getDataCampaignTrkrs(): void {
    this.getAllCampaignTrkrs().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:CampaignTrkrs[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCampaignTrkrs(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCampaignTrkr(campaignTrkr:CampaignTrkrs) {
    return this.http.post(this.basePath, campaignTrkr);
  }
  getCampaignTrkr(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCampaignTrkr(id:any, campaignTrkr:CampaignTrkrs) {
    return this.http.put(this.basePath + '/' + id, campaignTrkr);
  }
  deleteCampaignTrkr(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByIsOptout(isOptout:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIsOptout/' + isOptout + '?' + attributes);
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
  
  findOneByTrackerName(trackerName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTrackerName/' + trackerName + '?' + attributes);
  }
  
  findOneByTrackerUrl(trackerUrl:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTrackerUrl/' + trackerUrl + '?' + attributes);
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
  
  findOneByCampaignId(campaignId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCampaignId/' + campaignId + '?' + attributes);
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
  
  
  updateCampaignTrkrById(id:any, campaignTrkr:CampaignTrkrs) {
      return this.http.post(this.basePath + '/updateCampaignTrkrById?id=' + id, campaignTrkr);
  }
  
  updateCampaignTrkrByIsOptout(isOptout:any, campaignTrkr:CampaignTrkrs) {
      return this.http.post(this.basePath + '/updateCampaignTrkrByIsOptout?isOptout=' + isOptout, campaignTrkr);
  }
  
  updateCampaignTrkrByDeleted(deleted:any, campaignTrkr:CampaignTrkrs) {
      return this.http.post(this.basePath + '/updateCampaignTrkrByDeleted?deleted=' + deleted, campaignTrkr);
  }
  
  updateCampaignTrkrByTrackerKey(trackerKey:any, campaignTrkr:CampaignTrkrs) {
      return this.http.post(this.basePath + '/updateCampaignTrkrByTrackerKey?trackerKey=' + trackerKey, campaignTrkr);
  }
  
  updateCampaignTrkrByTrackerName(trackerName:any, campaignTrkr:CampaignTrkrs) {
      return this.http.post(this.basePath + '/updateCampaignTrkrByTrackerName?trackerName=' + trackerName, campaignTrkr);
  }
  
  updateCampaignTrkrByTrackerUrl(trackerUrl:any, campaignTrkr:CampaignTrkrs) {
      return this.http.post(this.basePath + '/updateCampaignTrkrByTrackerUrl?trackerUrl=' + trackerUrl, campaignTrkr);
  }
  
  updateCampaignTrkrByDateEntered(dateEntered:any, campaignTrkr:CampaignTrkrs) {
      return this.http.post(this.basePath + '/updateCampaignTrkrByDateEntered?dateEntered=' + dateEntered, campaignTrkr);
  }
  
  updateCampaignTrkrByDateModified(dateModified:any, campaignTrkr:CampaignTrkrs) {
      return this.http.post(this.basePath + '/updateCampaignTrkrByDateModified?dateModified=' + dateModified, campaignTrkr);
  }
  
  updateCampaignTrkrByCampaignId(campaignId:any, campaignTrkr:CampaignTrkrs) {
      return this.http.post(this.basePath + '/updateCampaignTrkrByCampaignId?campaignId=' + campaignId, campaignTrkr);
  }
  
  updateCampaignTrkrByModifiedUserId(modifiedUserId:any, campaignTrkr:CampaignTrkrs) {
      return this.http.post(this.basePath + '/updateCampaignTrkrByModifiedUserId?modifiedUserId=' + modifiedUserId, campaignTrkr);
  }
  
  updateCampaignTrkrByCreatedBy(createdBy:any, campaignTrkr:CampaignTrkrs) {
      return this.http.post(this.basePath + '/updateCampaignTrkrByCreatedBy?createdBy=' + createdBy, campaignTrkr);
  }
  
  
  
  //</es-section>
}
