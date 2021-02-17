/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:34 GMT-0400 (Bolivia Time)
 * Time: 2:43:34
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:34 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:34
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {OutboundEmailAudit} from "../models/outboundEmailAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class OutboundEmailAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/outbound-email-audit`;
  dataChange: BehaviorSubject<OutboundEmailAudit[]> = new BehaviorSubject<OutboundEmailAudit[]>([]);
  outboundEmailAuditData: OutboundEmailAudit = new OutboundEmailAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): OutboundEmailAudit[] {
    return this.dataChange.value;
  }

  getDataOutboundEmailAudit(): void {
    this.getAllOutboundEmailAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:OutboundEmailAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllOutboundEmailAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createOutboundEmailAudit(outboundEmailAudit:OutboundEmailAudit) {
    return this.http.post(this.basePath, outboundEmailAudit);
  }
  getOutboundEmailAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateOutboundEmailAudit(id:any, outboundEmailAudit:OutboundEmailAudit) {
    return this.http.put(this.basePath + '/' + id, outboundEmailAudit);
  }
  deleteOutboundEmailAudit(id:any) {
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
  
  
  updateOutboundEmailAuditById(id:any, outboundEmailAudit:OutboundEmailAudit) {
      return this.http.post(this.basePath + '/updateOutboundEmailAuditById?id=' + id, outboundEmailAudit);
  }
  
  updateOutboundEmailAuditByCreatedBy(createdBy:any, outboundEmailAudit:OutboundEmailAudit) {
      return this.http.post(this.basePath + '/updateOutboundEmailAuditByCreatedBy?createdBy=' + createdBy, outboundEmailAudit);
  }
  
  updateOutboundEmailAuditByFieldName(fieldName:any, outboundEmailAudit:OutboundEmailAudit) {
      return this.http.post(this.basePath + '/updateOutboundEmailAuditByFieldName?fieldName=' + fieldName, outboundEmailAudit);
  }
  
  updateOutboundEmailAuditByDataType(dataType:any, outboundEmailAudit:OutboundEmailAudit) {
      return this.http.post(this.basePath + '/updateOutboundEmailAuditByDataType?dataType=' + dataType, outboundEmailAudit);
  }
  
  updateOutboundEmailAuditByBeforeValueString(beforeValueString:any, outboundEmailAudit:OutboundEmailAudit) {
      return this.http.post(this.basePath + '/updateOutboundEmailAuditByBeforeValueString?beforeValueString=' + beforeValueString, outboundEmailAudit);
  }
  
  updateOutboundEmailAuditByAfterValueString(afterValueString:any, outboundEmailAudit:OutboundEmailAudit) {
      return this.http.post(this.basePath + '/updateOutboundEmailAuditByAfterValueString?afterValueString=' + afterValueString, outboundEmailAudit);
  }
  
  updateOutboundEmailAuditByBeforeValueText(beforeValueText:any, outboundEmailAudit:OutboundEmailAudit) {
      return this.http.post(this.basePath + '/updateOutboundEmailAuditByBeforeValueText?beforeValueText=' + beforeValueText, outboundEmailAudit);
  }
  
  updateOutboundEmailAuditByAfterValueText(afterValueText:any, outboundEmailAudit:OutboundEmailAudit) {
      return this.http.post(this.basePath + '/updateOutboundEmailAuditByAfterValueText?afterValueText=' + afterValueText, outboundEmailAudit);
  }
  
  updateOutboundEmailAuditByDateCreated(dateCreated:any, outboundEmailAudit:OutboundEmailAudit) {
      return this.http.post(this.basePath + '/updateOutboundEmailAuditByDateCreated?dateCreated=' + dateCreated, outboundEmailAudit);
  }
  
  updateOutboundEmailAuditByParentId(parentId:any, outboundEmailAudit:OutboundEmailAudit) {
      return this.http.post(this.basePath + '/updateOutboundEmailAuditByParentId?parentId=' + parentId, outboundEmailAudit);
  }
  
  
  
  //</es-section>
}