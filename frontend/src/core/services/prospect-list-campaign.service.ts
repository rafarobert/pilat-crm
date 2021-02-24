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

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ProspectListCampaigns} from "../models/prospectListCampaigns";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ProspectListCampaignService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/prospect-list-campaigns`;
  dataChange: BehaviorSubject<ProspectListCampaigns[]> = new BehaviorSubject<ProspectListCampaigns[]>([]);
  prospectListCampaignData: ProspectListCampaigns = new ProspectListCampaigns();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ProspectListCampaigns[] {
    return this.dataChange.value;
  }

  getDataProspectListCampaigns(): void {
    this.getAllProspectListCampaigns().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ProspectListCampaigns[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllProspectListCampaigns(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createProspectListCampaign(prospectListCampaign:ProspectListCampaigns) {
    return this.http.post(this.basePath, prospectListCampaign);
  }
  getProspectListCampaign(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateProspectListCampaign(id:any, prospectListCampaign:ProspectListCampaigns) {
    return this.http.put(this.basePath + '/' + id, prospectListCampaign);
  }
  deleteProspectListCampaign(id:any) {
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
  
  findOneByProspectListId(prospectListId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByProspectListId/' + prospectListId + '?' + attributes);
  }
  
  findOneByCampaignId(campaignId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCampaignId/' + campaignId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateProspectListCampaignById(id:any, prospectListCampaign:ProspectListCampaigns) {
      return this.http.post(this.basePath + '/updateProspectListCampaignById?id=' + id, prospectListCampaign);
  }
  
  updateProspectListCampaignByDeleted(deleted:any, prospectListCampaign:ProspectListCampaigns) {
      return this.http.post(this.basePath + '/updateProspectListCampaignByDeleted?deleted=' + deleted, prospectListCampaign);
  }
  
  updateProspectListCampaignByProspectListId(prospectListId:any, prospectListCampaign:ProspectListCampaigns) {
      return this.http.post(this.basePath + '/updateProspectListCampaignByProspectListId?prospectListId=' + prospectListId, prospectListCampaign);
  }
  
  updateProspectListCampaignByCampaignId(campaignId:any, prospectListCampaign:ProspectListCampaigns) {
      return this.http.post(this.basePath + '/updateProspectListCampaignByCampaignId?campaignId=' + campaignId, prospectListCampaign);
  }
  
  updateProspectListCampaignByDateModified(dateModified:any, prospectListCampaign:ProspectListCampaigns) {
      return this.http.post(this.basePath + '/updateProspectListCampaignByDateModified?dateModified=' + dateModified, prospectListCampaign);
  }
  
  
  
  //</es-section>
}
