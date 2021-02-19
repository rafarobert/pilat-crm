/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:05 GMT-0400 (Bolivia Time)
 * Time: 2:44:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:05 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:5
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {SecuritygroupsAudit} from "../models/securitygroupsAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SecuritygroupAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/securitygroups-audit`;
  dataChange: BehaviorSubject<SecuritygroupsAudit[]> = new BehaviorSubject<SecuritygroupsAudit[]>([]);
  securitygroupAuditData: SecuritygroupsAudit = new SecuritygroupsAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): SecuritygroupsAudit[] {
    return this.dataChange.value;
  }

  getDataSecuritygroupsAudit(): void {
    this.getAllSecuritygroupsAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:SecuritygroupsAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllSecuritygroupsAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSecuritygroupAudit(securitygroupAudit:SecuritygroupsAudit) {
    return this.http.post(this.basePath, securitygroupAudit);
  }
  getSecuritygroupAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSecuritygroupAudit(id:any, securitygroupAudit:SecuritygroupsAudit) {
    return this.http.put(this.basePath + '/' + id, securitygroupAudit);
  }
  deleteSecuritygroupAudit(id:any) {
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
  
  
  updateSecuritygroupAuditById(id:any, securitygroupAudit:SecuritygroupsAudit) {
      return this.http.post(this.basePath + '/updateSecuritygroupAuditById?id=' + id, securitygroupAudit);
  }
  
  updateSecuritygroupAuditByCreatedBy(createdBy:any, securitygroupAudit:SecuritygroupsAudit) {
      return this.http.post(this.basePath + '/updateSecuritygroupAuditByCreatedBy?createdBy=' + createdBy, securitygroupAudit);
  }
  
  updateSecuritygroupAuditByFieldName(fieldName:any, securitygroupAudit:SecuritygroupsAudit) {
      return this.http.post(this.basePath + '/updateSecuritygroupAuditByFieldName?fieldName=' + fieldName, securitygroupAudit);
  }
  
  updateSecuritygroupAuditByDataType(dataType:any, securitygroupAudit:SecuritygroupsAudit) {
      return this.http.post(this.basePath + '/updateSecuritygroupAuditByDataType?dataType=' + dataType, securitygroupAudit);
  }
  
  updateSecuritygroupAuditByBeforeValueString(beforeValueString:any, securitygroupAudit:SecuritygroupsAudit) {
      return this.http.post(this.basePath + '/updateSecuritygroupAuditByBeforeValueString?beforeValueString=' + beforeValueString, securitygroupAudit);
  }
  
  updateSecuritygroupAuditByAfterValueString(afterValueString:any, securitygroupAudit:SecuritygroupsAudit) {
      return this.http.post(this.basePath + '/updateSecuritygroupAuditByAfterValueString?afterValueString=' + afterValueString, securitygroupAudit);
  }
  
  updateSecuritygroupAuditByBeforeValueText(beforeValueText:any, securitygroupAudit:SecuritygroupsAudit) {
      return this.http.post(this.basePath + '/updateSecuritygroupAuditByBeforeValueText?beforeValueText=' + beforeValueText, securitygroupAudit);
  }
  
  updateSecuritygroupAuditByAfterValueText(afterValueText:any, securitygroupAudit:SecuritygroupsAudit) {
      return this.http.post(this.basePath + '/updateSecuritygroupAuditByAfterValueText?afterValueText=' + afterValueText, securitygroupAudit);
  }
  
  updateSecuritygroupAuditByDateCreated(dateCreated:any, securitygroupAudit:SecuritygroupsAudit) {
      return this.http.post(this.basePath + '/updateSecuritygroupAuditByDateCreated?dateCreated=' + dateCreated, securitygroupAudit);
  }
  
  updateSecuritygroupAuditByParentId(parentId:any, securitygroupAudit:SecuritygroupsAudit) {
      return this.http.post(this.basePath + '/updateSecuritygroupAuditByParentId?parentId=' + parentId, securitygroupAudit);
  }
  
  
  
  //</es-section>
}
