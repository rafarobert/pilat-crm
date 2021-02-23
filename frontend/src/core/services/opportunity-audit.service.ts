/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:21:41 GMT-0400 (Bolivia Time)
 * Time: 4:21:41
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:21:41 GMT-0400 (Bolivia Time)
 * Last time updated: 4:21:41
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {OpportunitiesAudit} from "../models/opportunitiesAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class OpportunityAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/opportunities-audit`;
  dataChange: BehaviorSubject<OpportunitiesAudit[]> = new BehaviorSubject<OpportunitiesAudit[]>([]);
  opportunityAuditData: OpportunitiesAudit = new OpportunitiesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): OpportunitiesAudit[] {
    return this.dataChange.value;
  }

  getDataOpportunitiesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllOpportunitiesAudit(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:OpportunitiesAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllOpportunitiesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createOpportunityAudit(opportunityAudit:OpportunitiesAudit) {
    return this.http.post(this.basePath, opportunityAudit);
  }
  getOpportunityAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateOpportunityAudit(id:any, opportunityAudit:OpportunitiesAudit) {
    return this.http.put(this.basePath + '/' + id, opportunityAudit);
  }
  deleteOpportunityAudit(id:any) {
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
  
  
  updateOpportunityAuditById(id:any, opportunityAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunityAuditById?id=' + id, opportunityAudit);
  }
  
  updateOpportunityAuditByCreatedBy(createdBy:any, opportunityAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunityAuditByCreatedBy?createdBy=' + createdBy, opportunityAudit);
  }
  
  updateOpportunityAuditByFieldName(fieldName:any, opportunityAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunityAuditByFieldName?fieldName=' + fieldName, opportunityAudit);
  }
  
  updateOpportunityAuditByDataType(dataType:any, opportunityAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunityAuditByDataType?dataType=' + dataType, opportunityAudit);
  }
  
  updateOpportunityAuditByBeforeValueString(beforeValueString:any, opportunityAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunityAuditByBeforeValueString?beforeValueString=' + beforeValueString, opportunityAudit);
  }
  
  updateOpportunityAuditByAfterValueString(afterValueString:any, opportunityAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunityAuditByAfterValueString?afterValueString=' + afterValueString, opportunityAudit);
  }
  
  updateOpportunityAuditByBeforeValueText(beforeValueText:any, opportunityAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunityAuditByBeforeValueText?beforeValueText=' + beforeValueText, opportunityAudit);
  }
  
  updateOpportunityAuditByAfterValueText(afterValueText:any, opportunityAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunityAuditByAfterValueText?afterValueText=' + afterValueText, opportunityAudit);
  }
  
  updateOpportunityAuditByDateCreated(dateCreated:any, opportunityAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunityAuditByDateCreated?dateCreated=' + dateCreated, opportunityAudit);
  }
  
  updateOpportunityAuditByParentId(parentId:any, opportunityAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunityAuditByParentId?parentId=' + parentId, opportunityAudit);
  }
  
  
  
  //</es-section>
}
