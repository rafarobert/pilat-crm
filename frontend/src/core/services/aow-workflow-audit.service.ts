/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:57 GMT-0400 (Bolivia Time)
 * Time: 2:41:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:57 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:57
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AowWorkflowAudit} from "../models/aowWorkflowAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AowWorkflowAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aow-workflow-audit`;
  dataChange: BehaviorSubject<AowWorkflowAudit[]> = new BehaviorSubject<AowWorkflowAudit[]>([]);
  aowWorkflowAuditData: AowWorkflowAudit = new AowWorkflowAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AowWorkflowAudit[] {
    return this.dataChange.value;
  }

  getDataAowWorkflowAudit(): void {
    this.getAllAowWorkflowAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AowWorkflowAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAowWorkflowAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAowWorkflowAudit(aowWorkflowAudit:AowWorkflowAudit) {
    return this.http.post(this.basePath, aowWorkflowAudit);
  }
  getAowWorkflowAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAowWorkflowAudit(id:any, aowWorkflowAudit:AowWorkflowAudit) {
    return this.http.put(this.basePath + '/' + id, aowWorkflowAudit);
  }
  deleteAowWorkflowAudit(id:any) {
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
  
  
  updateAowWorkflowAuditById(id:any, aowWorkflowAudit:AowWorkflowAudit) {
      return this.http.post(this.basePath + '/updateAowWorkflowAuditById?id=' + id, aowWorkflowAudit);
  }
  
  updateAowWorkflowAuditByCreatedBy(createdBy:any, aowWorkflowAudit:AowWorkflowAudit) {
      return this.http.post(this.basePath + '/updateAowWorkflowAuditByCreatedBy?createdBy=' + createdBy, aowWorkflowAudit);
  }
  
  updateAowWorkflowAuditByFieldName(fieldName:any, aowWorkflowAudit:AowWorkflowAudit) {
      return this.http.post(this.basePath + '/updateAowWorkflowAuditByFieldName?fieldName=' + fieldName, aowWorkflowAudit);
  }
  
  updateAowWorkflowAuditByDataType(dataType:any, aowWorkflowAudit:AowWorkflowAudit) {
      return this.http.post(this.basePath + '/updateAowWorkflowAuditByDataType?dataType=' + dataType, aowWorkflowAudit);
  }
  
  updateAowWorkflowAuditByBeforeValueString(beforeValueString:any, aowWorkflowAudit:AowWorkflowAudit) {
      return this.http.post(this.basePath + '/updateAowWorkflowAuditByBeforeValueString?beforeValueString=' + beforeValueString, aowWorkflowAudit);
  }
  
  updateAowWorkflowAuditByAfterValueString(afterValueString:any, aowWorkflowAudit:AowWorkflowAudit) {
      return this.http.post(this.basePath + '/updateAowWorkflowAuditByAfterValueString?afterValueString=' + afterValueString, aowWorkflowAudit);
  }
  
  updateAowWorkflowAuditByBeforeValueText(beforeValueText:any, aowWorkflowAudit:AowWorkflowAudit) {
      return this.http.post(this.basePath + '/updateAowWorkflowAuditByBeforeValueText?beforeValueText=' + beforeValueText, aowWorkflowAudit);
  }
  
  updateAowWorkflowAuditByAfterValueText(afterValueText:any, aowWorkflowAudit:AowWorkflowAudit) {
      return this.http.post(this.basePath + '/updateAowWorkflowAuditByAfterValueText?afterValueText=' + afterValueText, aowWorkflowAudit);
  }
  
  updateAowWorkflowAuditByDateCreated(dateCreated:any, aowWorkflowAudit:AowWorkflowAudit) {
      return this.http.post(this.basePath + '/updateAowWorkflowAuditByDateCreated?dateCreated=' + dateCreated, aowWorkflowAudit);
  }
  
  updateAowWorkflowAuditByParentId(parentId:any, aowWorkflowAudit:AowWorkflowAudit) {
      return this.http.post(this.basePath + '/updateAowWorkflowAuditByParentId?parentId=' + parentId, aowWorkflowAudit);
  }
  
  
  
  //</es-section>
}
