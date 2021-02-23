/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:21:23 GMT-0400 (Bolivia Time)
 * Time: 4:21:23
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:21:23 GMT-0400 (Bolivia Time)
 * Last time updated: 4:21:23
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {JjwgAddressCacheAudit} from "../models/jjwgAddressCacheAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class JjwgAddresCacheAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/jjwg-address-cache-audit`;
  dataChange: BehaviorSubject<JjwgAddressCacheAudit[]> = new BehaviorSubject<JjwgAddressCacheAudit[]>([]);
  jjwgAddresCacheAuditData: JjwgAddressCacheAudit = new JjwgAddressCacheAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): JjwgAddressCacheAudit[] {
    return this.dataChange.value;
  }

  getDataJjwgAddressCacheAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllJjwgAddressCacheAudit(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:JjwgAddressCacheAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllJjwgAddressCacheAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createJjwgAddresCacheAudit(jjwgAddresCacheAudit:JjwgAddressCacheAudit) {
    return this.http.post(this.basePath, jjwgAddresCacheAudit);
  }
  getJjwgAddresCacheAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateJjwgAddresCacheAudit(id:any, jjwgAddresCacheAudit:JjwgAddressCacheAudit) {
    return this.http.put(this.basePath + '/' + id, jjwgAddresCacheAudit);
  }
  deleteJjwgAddresCacheAudit(id:any) {
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
  
  
  updateJjwgAddresCacheAuditById(id:any, jjwgAddresCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheAuditById?id=' + id, jjwgAddresCacheAudit);
  }
  
  updateJjwgAddresCacheAuditByCreatedBy(createdBy:any, jjwgAddresCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheAuditByCreatedBy?createdBy=' + createdBy, jjwgAddresCacheAudit);
  }
  
  updateJjwgAddresCacheAuditByFieldName(fieldName:any, jjwgAddresCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheAuditByFieldName?fieldName=' + fieldName, jjwgAddresCacheAudit);
  }
  
  updateJjwgAddresCacheAuditByDataType(dataType:any, jjwgAddresCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheAuditByDataType?dataType=' + dataType, jjwgAddresCacheAudit);
  }
  
  updateJjwgAddresCacheAuditByBeforeValueString(beforeValueString:any, jjwgAddresCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheAuditByBeforeValueString?beforeValueString=' + beforeValueString, jjwgAddresCacheAudit);
  }
  
  updateJjwgAddresCacheAuditByAfterValueString(afterValueString:any, jjwgAddresCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheAuditByAfterValueString?afterValueString=' + afterValueString, jjwgAddresCacheAudit);
  }
  
  updateJjwgAddresCacheAuditByBeforeValueText(beforeValueText:any, jjwgAddresCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheAuditByBeforeValueText?beforeValueText=' + beforeValueText, jjwgAddresCacheAudit);
  }
  
  updateJjwgAddresCacheAuditByAfterValueText(afterValueText:any, jjwgAddresCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheAuditByAfterValueText?afterValueText=' + afterValueText, jjwgAddresCacheAudit);
  }
  
  updateJjwgAddresCacheAuditByDateCreated(dateCreated:any, jjwgAddresCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheAuditByDateCreated?dateCreated=' + dateCreated, jjwgAddresCacheAudit);
  }
  
  updateJjwgAddresCacheAuditByParentId(parentId:any, jjwgAddresCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddresCacheAuditByParentId?parentId=' + parentId, jjwgAddresCacheAudit);
  }
  
  
  
  //</es-section>
}
