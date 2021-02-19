/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:45 GMT-0400 (Bolivia Time)
 * Time: 2:42:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:45
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {FpEventsAudit} from "../models/fpEventsAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class FpEventAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/fp-events-audit`;
  dataChange: BehaviorSubject<FpEventsAudit[]> = new BehaviorSubject<FpEventsAudit[]>([]);
  fpEventAuditData: FpEventsAudit = new FpEventsAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): FpEventsAudit[] {
    return this.dataChange.value;
  }

  getDataFpEventsAudit(): void {
    this.getAllFpEventsAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:FpEventsAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllFpEventsAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createFpEventAudit(fpEventAudit:FpEventsAudit) {
    return this.http.post(this.basePath, fpEventAudit);
  }
  getFpEventAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateFpEventAudit(id:any, fpEventAudit:FpEventsAudit) {
    return this.http.put(this.basePath + '/' + id, fpEventAudit);
  }
  deleteFpEventAudit(id:any) {
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
  
  
  updateFpEventAuditById(id:any, fpEventAudit:FpEventsAudit) {
      return this.http.post(this.basePath + '/updateFpEventAuditById?id=' + id, fpEventAudit);
  }
  
  updateFpEventAuditByCreatedBy(createdBy:any, fpEventAudit:FpEventsAudit) {
      return this.http.post(this.basePath + '/updateFpEventAuditByCreatedBy?createdBy=' + createdBy, fpEventAudit);
  }
  
  updateFpEventAuditByFieldName(fieldName:any, fpEventAudit:FpEventsAudit) {
      return this.http.post(this.basePath + '/updateFpEventAuditByFieldName?fieldName=' + fieldName, fpEventAudit);
  }
  
  updateFpEventAuditByDataType(dataType:any, fpEventAudit:FpEventsAudit) {
      return this.http.post(this.basePath + '/updateFpEventAuditByDataType?dataType=' + dataType, fpEventAudit);
  }
  
  updateFpEventAuditByBeforeValueString(beforeValueString:any, fpEventAudit:FpEventsAudit) {
      return this.http.post(this.basePath + '/updateFpEventAuditByBeforeValueString?beforeValueString=' + beforeValueString, fpEventAudit);
  }
  
  updateFpEventAuditByAfterValueString(afterValueString:any, fpEventAudit:FpEventsAudit) {
      return this.http.post(this.basePath + '/updateFpEventAuditByAfterValueString?afterValueString=' + afterValueString, fpEventAudit);
  }
  
  updateFpEventAuditByBeforeValueText(beforeValueText:any, fpEventAudit:FpEventsAudit) {
      return this.http.post(this.basePath + '/updateFpEventAuditByBeforeValueText?beforeValueText=' + beforeValueText, fpEventAudit);
  }
  
  updateFpEventAuditByAfterValueText(afterValueText:any, fpEventAudit:FpEventsAudit) {
      return this.http.post(this.basePath + '/updateFpEventAuditByAfterValueText?afterValueText=' + afterValueText, fpEventAudit);
  }
  
  updateFpEventAuditByDateCreated(dateCreated:any, fpEventAudit:FpEventsAudit) {
      return this.http.post(this.basePath + '/updateFpEventAuditByDateCreated?dateCreated=' + dateCreated, fpEventAudit);
  }
  
  updateFpEventAuditByParentId(parentId:any, fpEventAudit:FpEventsAudit) {
      return this.http.post(this.basePath + '/updateFpEventAuditByParentId?parentId=' + parentId, fpEventAudit);
  }
  
  
  
  //</es-section>
}
