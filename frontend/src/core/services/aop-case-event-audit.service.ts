/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:20 GMT-0400 (Bolivia Time)
 * Time: 2:41:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:20 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:20
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AopCaseEventsAudit} from "../models/aopCaseEventsAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AopCaseEventAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aop-case-events-audit`;
  dataChange: BehaviorSubject<AopCaseEventsAudit[]> = new BehaviorSubject<AopCaseEventsAudit[]>([]);
  aopCaseEventAuditData: AopCaseEventsAudit = new AopCaseEventsAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AopCaseEventsAudit[] {
    return this.dataChange.value;
  }

  getDataAopCaseEventsAudit(): void {
    this.getAllAopCaseEventsAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AopCaseEventsAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAopCaseEventsAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAopCaseEventAudit(aopCaseEventAudit:AopCaseEventsAudit) {
    return this.http.post(this.basePath, aopCaseEventAudit);
  }
  getAopCaseEventAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAopCaseEventAudit(id:any, aopCaseEventAudit:AopCaseEventsAudit) {
    return this.http.put(this.basePath + '/' + id, aopCaseEventAudit);
  }
  deleteAopCaseEventAudit(id:any) {
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
  
  
  updateAopCaseEventAuditById(id:any, aopCaseEventAudit:AopCaseEventsAudit) {
      return this.http.post(this.basePath + '/updateAopCaseEventAuditById?id=' + id, aopCaseEventAudit);
  }
  
  updateAopCaseEventAuditByCreatedBy(createdBy:any, aopCaseEventAudit:AopCaseEventsAudit) {
      return this.http.post(this.basePath + '/updateAopCaseEventAuditByCreatedBy?createdBy=' + createdBy, aopCaseEventAudit);
  }
  
  updateAopCaseEventAuditByFieldName(fieldName:any, aopCaseEventAudit:AopCaseEventsAudit) {
      return this.http.post(this.basePath + '/updateAopCaseEventAuditByFieldName?fieldName=' + fieldName, aopCaseEventAudit);
  }
  
  updateAopCaseEventAuditByDataType(dataType:any, aopCaseEventAudit:AopCaseEventsAudit) {
      return this.http.post(this.basePath + '/updateAopCaseEventAuditByDataType?dataType=' + dataType, aopCaseEventAudit);
  }
  
  updateAopCaseEventAuditByBeforeValueString(beforeValueString:any, aopCaseEventAudit:AopCaseEventsAudit) {
      return this.http.post(this.basePath + '/updateAopCaseEventAuditByBeforeValueString?beforeValueString=' + beforeValueString, aopCaseEventAudit);
  }
  
  updateAopCaseEventAuditByAfterValueString(afterValueString:any, aopCaseEventAudit:AopCaseEventsAudit) {
      return this.http.post(this.basePath + '/updateAopCaseEventAuditByAfterValueString?afterValueString=' + afterValueString, aopCaseEventAudit);
  }
  
  updateAopCaseEventAuditByBeforeValueText(beforeValueText:any, aopCaseEventAudit:AopCaseEventsAudit) {
      return this.http.post(this.basePath + '/updateAopCaseEventAuditByBeforeValueText?beforeValueText=' + beforeValueText, aopCaseEventAudit);
  }
  
  updateAopCaseEventAuditByAfterValueText(afterValueText:any, aopCaseEventAudit:AopCaseEventsAudit) {
      return this.http.post(this.basePath + '/updateAopCaseEventAuditByAfterValueText?afterValueText=' + afterValueText, aopCaseEventAudit);
  }
  
  updateAopCaseEventAuditByDateCreated(dateCreated:any, aopCaseEventAudit:AopCaseEventsAudit) {
      return this.http.post(this.basePath + '/updateAopCaseEventAuditByDateCreated?dateCreated=' + dateCreated, aopCaseEventAudit);
  }
  
  updateAopCaseEventAuditByParentId(parentId:any, aopCaseEventAudit:AopCaseEventsAudit) {
      return this.http.post(this.basePath + '/updateAopCaseEventAuditByParentId?parentId=' + parentId, aopCaseEventAudit);
  }
  
  
  
  //</es-section>
}
