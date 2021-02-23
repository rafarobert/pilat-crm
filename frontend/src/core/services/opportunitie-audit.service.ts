/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:27 GMT-0400 (Bolivia Time)
 * Time: 2:43:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:27 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:27
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
export class OpportunitieAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/opportunities-audit`;
  dataChange: BehaviorSubject<OpportunitiesAudit[]> = new BehaviorSubject<OpportunitiesAudit[]>([]);
  opportunitieAuditData: OpportunitiesAudit = new OpportunitiesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): OpportunitiesAudit[] {
    return this.dataChange.value;
  }

  getDataOpportunitiesAudit(): void {
    this.getAllOpportunitiesAudit().subscribe(async (res) => {
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
  createOpportunitieAudit(opportunitieAudit:OpportunitiesAudit) {
    return this.http.post(this.basePath, opportunitieAudit);
  }
  getOpportunitieAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateOpportunitieAudit(id:any, opportunitieAudit:OpportunitiesAudit) {
    return this.http.put(this.basePath + '/' + id, opportunitieAudit);
  }
  deleteOpportunitieAudit(id:any) {
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
  
  
  updateOpportunitieAuditById(id:any, opportunitieAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunitieAuditById?id=' + id, opportunitieAudit);
  }
  
  updateOpportunitieAuditByCreatedBy(createdBy:any, opportunitieAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunitieAuditByCreatedBy?createdBy=' + createdBy, opportunitieAudit);
  }
  
  updateOpportunitieAuditByFieldName(fieldName:any, opportunitieAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunitieAuditByFieldName?fieldName=' + fieldName, opportunitieAudit);
  }
  
  updateOpportunitieAuditByDataType(dataType:any, opportunitieAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunitieAuditByDataType?dataType=' + dataType, opportunitieAudit);
  }
  
  updateOpportunitieAuditByBeforeValueString(beforeValueString:any, opportunitieAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunitieAuditByBeforeValueString?beforeValueString=' + beforeValueString, opportunitieAudit);
  }
  
  updateOpportunitieAuditByAfterValueString(afterValueString:any, opportunitieAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunitieAuditByAfterValueString?afterValueString=' + afterValueString, opportunitieAudit);
  }
  
  updateOpportunitieAuditByBeforeValueText(beforeValueText:any, opportunitieAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunitieAuditByBeforeValueText?beforeValueText=' + beforeValueText, opportunitieAudit);
  }
  
  updateOpportunitieAuditByAfterValueText(afterValueText:any, opportunitieAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunitieAuditByAfterValueText?afterValueText=' + afterValueText, opportunitieAudit);
  }
  
  updateOpportunitieAuditByDateCreated(dateCreated:any, opportunitieAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunitieAuditByDateCreated?dateCreated=' + dateCreated, opportunitieAudit);
  }
  
  updateOpportunitieAuditByParentId(parentId:any, opportunitieAudit:OpportunitiesAudit) {
      return this.http.post(this.basePath + '/updateOpportunitieAuditByParentId?parentId=' + parentId, opportunitieAudit);
  }
  
  
  
  //</es-section>
}
