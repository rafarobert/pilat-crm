/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:05 GMT-0400 (Bolivia Time)
 * Time: 2:42:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:05 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:5
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {CallsRescheduleAudit} from "../models/callsRescheduleAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CallRescheduleAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/calls-reschedule-audit`;
  dataChange: BehaviorSubject<CallsRescheduleAudit[]> = new BehaviorSubject<CallsRescheduleAudit[]>([]);
  callRescheduleAuditData: CallsRescheduleAudit = new CallsRescheduleAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): CallsRescheduleAudit[] {
    return this.dataChange.value;
  }

  getDataCallsRescheduleAudit(): void {
    this.getAllCallsRescheduleAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:CallsRescheduleAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCallsRescheduleAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCallRescheduleAudit(callRescheduleAudit:CallsRescheduleAudit) {
    return this.http.post(this.basePath, callRescheduleAudit);
  }
  getCallRescheduleAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCallRescheduleAudit(id:any, callRescheduleAudit:CallsRescheduleAudit) {
    return this.http.put(this.basePath + '/' + id, callRescheduleAudit);
  }
  deleteCallRescheduleAudit(id:any) {
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
  
  
  updateCallRescheduleAuditById(id:any, callRescheduleAudit:CallsRescheduleAudit) {
      return this.http.post(this.basePath + '/updateCallRescheduleAuditById?id=' + id, callRescheduleAudit);
  }
  
  updateCallRescheduleAuditByCreatedBy(createdBy:any, callRescheduleAudit:CallsRescheduleAudit) {
      return this.http.post(this.basePath + '/updateCallRescheduleAuditByCreatedBy?createdBy=' + createdBy, callRescheduleAudit);
  }
  
  updateCallRescheduleAuditByFieldName(fieldName:any, callRescheduleAudit:CallsRescheduleAudit) {
      return this.http.post(this.basePath + '/updateCallRescheduleAuditByFieldName?fieldName=' + fieldName, callRescheduleAudit);
  }
  
  updateCallRescheduleAuditByDataType(dataType:any, callRescheduleAudit:CallsRescheduleAudit) {
      return this.http.post(this.basePath + '/updateCallRescheduleAuditByDataType?dataType=' + dataType, callRescheduleAudit);
  }
  
  updateCallRescheduleAuditByBeforeValueString(beforeValueString:any, callRescheduleAudit:CallsRescheduleAudit) {
      return this.http.post(this.basePath + '/updateCallRescheduleAuditByBeforeValueString?beforeValueString=' + beforeValueString, callRescheduleAudit);
  }
  
  updateCallRescheduleAuditByAfterValueString(afterValueString:any, callRescheduleAudit:CallsRescheduleAudit) {
      return this.http.post(this.basePath + '/updateCallRescheduleAuditByAfterValueString?afterValueString=' + afterValueString, callRescheduleAudit);
  }
  
  updateCallRescheduleAuditByBeforeValueText(beforeValueText:any, callRescheduleAudit:CallsRescheduleAudit) {
      return this.http.post(this.basePath + '/updateCallRescheduleAuditByBeforeValueText?beforeValueText=' + beforeValueText, callRescheduleAudit);
  }
  
  updateCallRescheduleAuditByAfterValueText(afterValueText:any, callRescheduleAudit:CallsRescheduleAudit) {
      return this.http.post(this.basePath + '/updateCallRescheduleAuditByAfterValueText?afterValueText=' + afterValueText, callRescheduleAudit);
  }
  
  updateCallRescheduleAuditByDateCreated(dateCreated:any, callRescheduleAudit:CallsRescheduleAudit) {
      return this.http.post(this.basePath + '/updateCallRescheduleAuditByDateCreated?dateCreated=' + dateCreated, callRescheduleAudit);
  }
  
  updateCallRescheduleAuditByParentId(parentId:any, callRescheduleAudit:CallsRescheduleAudit) {
      return this.http.post(this.basePath + '/updateCallRescheduleAuditByParentId?parentId=' + parentId, callRescheduleAudit);
  }
  
  
  
  //</es-section>
}
