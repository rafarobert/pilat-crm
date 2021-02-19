/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:22 GMT-0400 (Bolivia Time)
 * Time: 2:41:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:22 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:22
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AopCaseUpdatesAudit} from "../models/aopCaseUpdatesAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AopCaseUpdateAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aop-case-updates-audit`;
  dataChange: BehaviorSubject<AopCaseUpdatesAudit[]> = new BehaviorSubject<AopCaseUpdatesAudit[]>([]);
  aopCaseUpdateAuditData: AopCaseUpdatesAudit = new AopCaseUpdatesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AopCaseUpdatesAudit[] {
    return this.dataChange.value;
  }

  getDataAopCaseUpdatesAudit(): void {
    this.getAllAopCaseUpdatesAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AopCaseUpdatesAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAopCaseUpdatesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAopCaseUpdateAudit(aopCaseUpdateAudit:AopCaseUpdatesAudit) {
    return this.http.post(this.basePath, aopCaseUpdateAudit);
  }
  getAopCaseUpdateAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAopCaseUpdateAudit(id:any, aopCaseUpdateAudit:AopCaseUpdatesAudit) {
    return this.http.put(this.basePath + '/' + id, aopCaseUpdateAudit);
  }
  deleteAopCaseUpdateAudit(id:any) {
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
  
  
  updateAopCaseUpdateAuditById(id:any, aopCaseUpdateAudit:AopCaseUpdatesAudit) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateAuditById?id=' + id, aopCaseUpdateAudit);
  }
  
  updateAopCaseUpdateAuditByCreatedBy(createdBy:any, aopCaseUpdateAudit:AopCaseUpdatesAudit) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateAuditByCreatedBy?createdBy=' + createdBy, aopCaseUpdateAudit);
  }
  
  updateAopCaseUpdateAuditByFieldName(fieldName:any, aopCaseUpdateAudit:AopCaseUpdatesAudit) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateAuditByFieldName?fieldName=' + fieldName, aopCaseUpdateAudit);
  }
  
  updateAopCaseUpdateAuditByDataType(dataType:any, aopCaseUpdateAudit:AopCaseUpdatesAudit) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateAuditByDataType?dataType=' + dataType, aopCaseUpdateAudit);
  }
  
  updateAopCaseUpdateAuditByBeforeValueString(beforeValueString:any, aopCaseUpdateAudit:AopCaseUpdatesAudit) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateAuditByBeforeValueString?beforeValueString=' + beforeValueString, aopCaseUpdateAudit);
  }
  
  updateAopCaseUpdateAuditByAfterValueString(afterValueString:any, aopCaseUpdateAudit:AopCaseUpdatesAudit) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateAuditByAfterValueString?afterValueString=' + afterValueString, aopCaseUpdateAudit);
  }
  
  updateAopCaseUpdateAuditByBeforeValueText(beforeValueText:any, aopCaseUpdateAudit:AopCaseUpdatesAudit) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateAuditByBeforeValueText?beforeValueText=' + beforeValueText, aopCaseUpdateAudit);
  }
  
  updateAopCaseUpdateAuditByAfterValueText(afterValueText:any, aopCaseUpdateAudit:AopCaseUpdatesAudit) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateAuditByAfterValueText?afterValueText=' + afterValueText, aopCaseUpdateAudit);
  }
  
  updateAopCaseUpdateAuditByDateCreated(dateCreated:any, aopCaseUpdateAudit:AopCaseUpdatesAudit) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateAuditByDateCreated?dateCreated=' + dateCreated, aopCaseUpdateAudit);
  }
  
  updateAopCaseUpdateAuditByParentId(parentId:any, aopCaseUpdateAudit:AopCaseUpdatesAudit) {
      return this.http.post(this.basePath + '/updateAopCaseUpdateAuditByParentId?parentId=' + parentId, aopCaseUpdateAudit);
  }
  
  
  
  //</es-section>
}
