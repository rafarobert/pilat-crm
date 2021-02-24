/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:08 GMT-0400 (Bolivia Time)
 * Time: 2:42:8
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:08 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:8
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {CampaignsAudit} from "../models/campaignsAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CampaignAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/campaigns-audit`;
  dataChange: BehaviorSubject<CampaignsAudit[]> = new BehaviorSubject<CampaignsAudit[]>([]);
  campaignAuditData: CampaignsAudit = new CampaignsAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): CampaignsAudit[] {
    return this.dataChange.value;
  }

  getDataCampaignsAudit(): void {
    this.getAllCampaignsAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:CampaignsAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCampaignsAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCampaignAudit(campaignAudit:CampaignsAudit) {
    return this.http.post(this.basePath, campaignAudit);
  }
  getCampaignAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCampaignAudit(id:any, campaignAudit:CampaignsAudit) {
    return this.http.put(this.basePath + '/' + id, campaignAudit);
  }
  deleteCampaignAudit(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  findOneByFieldName(fieldName:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFieldName/' + fieldName + '?' + attributes);
  }
  
  findOneByDataType(dataType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDataType/' + dataType + '?' + attributes);
  }
  
  findOneByBeforeValueString(beforeValueString:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBeforeValueString/' + beforeValueString + '?' + attributes);
  }
  
  findOneByAfterValueString(afterValueString:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAfterValueString/' + afterValueString + '?' + attributes);
  }
  
  findOneByBeforeValueText(beforeValueText:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBeforeValueText/' + beforeValueText + '?' + attributes);
  }
  
  findOneByAfterValueText(afterValueText:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAfterValueText/' + afterValueText + '?' + attributes);
  }
  
  findOneByDateCreated(dateCreated:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateCreated/' + dateCreated + '?' + attributes);
  }
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  
  updateCampaignAuditById(id:any, campaignAudit:CampaignsAudit) {
      return this.http.post(this.basePath + '/updateCampaignAuditById?id=' + id, campaignAudit);
  }
  
  updateCampaignAuditByCreatedBy(createdBy:any, campaignAudit:CampaignsAudit) {
      return this.http.post(this.basePath + '/updateCampaignAuditByCreatedBy?createdBy=' + createdBy, campaignAudit);
  }
  
  updateCampaignAuditByFieldName(fieldName:any, campaignAudit:CampaignsAudit) {
      return this.http.post(this.basePath + '/updateCampaignAuditByFieldName?fieldName=' + fieldName, campaignAudit);
  }
  
  updateCampaignAuditByDataType(dataType:any, campaignAudit:CampaignsAudit) {
      return this.http.post(this.basePath + '/updateCampaignAuditByDataType?dataType=' + dataType, campaignAudit);
  }
  
  updateCampaignAuditByBeforeValueString(beforeValueString:any, campaignAudit:CampaignsAudit) {
      return this.http.post(this.basePath + '/updateCampaignAuditByBeforeValueString?beforeValueString=' + beforeValueString, campaignAudit);
  }
  
  updateCampaignAuditByAfterValueString(afterValueString:any, campaignAudit:CampaignsAudit) {
      return this.http.post(this.basePath + '/updateCampaignAuditByAfterValueString?afterValueString=' + afterValueString, campaignAudit);
  }
  
  updateCampaignAuditByBeforeValueText(beforeValueText:any, campaignAudit:CampaignsAudit) {
      return this.http.post(this.basePath + '/updateCampaignAuditByBeforeValueText?beforeValueText=' + beforeValueText, campaignAudit);
  }
  
  updateCampaignAuditByAfterValueText(afterValueText:any, campaignAudit:CampaignsAudit) {
      return this.http.post(this.basePath + '/updateCampaignAuditByAfterValueText?afterValueText=' + afterValueText, campaignAudit);
  }
  
  updateCampaignAuditByDateCreated(dateCreated:any, campaignAudit:CampaignsAudit) {
      return this.http.post(this.basePath + '/updateCampaignAuditByDateCreated?dateCreated=' + dateCreated, campaignAudit);
  }
  
  updateCampaignAuditByParentId(parentId:any, campaignAudit:CampaignsAudit) {
      return this.http.post(this.basePath + '/updateCampaignAuditByParentId?parentId=' + parentId, campaignAudit);
  }
  
  
  
  //</es-section>
}
