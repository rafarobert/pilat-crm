/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:56 GMT-0400 (Bolivia Time)
 * Time: 2:42:56
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:56 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:56
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
export class JjwgAddreCacheAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/jjwg-address-cache-audit`;
  dataChange: BehaviorSubject<JjwgAddressCacheAudit[]> = new BehaviorSubject<JjwgAddressCacheAudit[]>([]);
  jjwgAddreCacheAuditData: JjwgAddressCacheAudit = new JjwgAddressCacheAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): JjwgAddressCacheAudit[] {
    return this.dataChange.value;
  }

  getDataJjwgAddressCacheAudit(): void {
    this.getAllJjwgAddressCacheAudit().subscribe(async (res) => {
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
  createJjwgAddreCacheAudit(jjwgAddreCacheAudit:JjwgAddressCacheAudit) {
    return this.http.post(this.basePath, jjwgAddreCacheAudit);
  }
  getJjwgAddreCacheAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateJjwgAddreCacheAudit(id:any, jjwgAddreCacheAudit:JjwgAddressCacheAudit) {
    return this.http.put(this.basePath + '/' + id, jjwgAddreCacheAudit);
  }
  deleteJjwgAddreCacheAudit(id:any) {
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
  
  
  updateJjwgAddreCacheAuditById(id:any, jjwgAddreCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheAuditById?id=' + id, jjwgAddreCacheAudit);
  }
  
  updateJjwgAddreCacheAuditByCreatedBy(createdBy:any, jjwgAddreCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheAuditByCreatedBy?createdBy=' + createdBy, jjwgAddreCacheAudit);
  }
  
  updateJjwgAddreCacheAuditByFieldName(fieldName:any, jjwgAddreCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheAuditByFieldName?fieldName=' + fieldName, jjwgAddreCacheAudit);
  }
  
  updateJjwgAddreCacheAuditByDataType(dataType:any, jjwgAddreCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheAuditByDataType?dataType=' + dataType, jjwgAddreCacheAudit);
  }
  
  updateJjwgAddreCacheAuditByBeforeValueString(beforeValueString:any, jjwgAddreCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheAuditByBeforeValueString?beforeValueString=' + beforeValueString, jjwgAddreCacheAudit);
  }
  
  updateJjwgAddreCacheAuditByAfterValueString(afterValueString:any, jjwgAddreCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheAuditByAfterValueString?afterValueString=' + afterValueString, jjwgAddreCacheAudit);
  }
  
  updateJjwgAddreCacheAuditByBeforeValueText(beforeValueText:any, jjwgAddreCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheAuditByBeforeValueText?beforeValueText=' + beforeValueText, jjwgAddreCacheAudit);
  }
  
  updateJjwgAddreCacheAuditByAfterValueText(afterValueText:any, jjwgAddreCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheAuditByAfterValueText?afterValueText=' + afterValueText, jjwgAddreCacheAudit);
  }
  
  updateJjwgAddreCacheAuditByDateCreated(dateCreated:any, jjwgAddreCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheAuditByDateCreated?dateCreated=' + dateCreated, jjwgAddreCacheAudit);
  }
  
  updateJjwgAddreCacheAuditByParentId(parentId:any, jjwgAddreCacheAudit:JjwgAddressCacheAudit) {
      return this.http.post(this.basePath + '/updateJjwgAddreCacheAuditByParentId?parentId=' + parentId, jjwgAddreCacheAudit);
  }
  
  
  
  //</es-section>
}
