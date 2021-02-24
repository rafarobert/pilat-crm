/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:16 GMT-0400 (Bolivia Time)
 * Time: 2:41:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:16 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:16
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AokKnowledgebaseAudit} from "../models/aokKnowledgebaseAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AokKnowledgebaseAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aok-knowledgebase-audit`;
  dataChange: BehaviorSubject<AokKnowledgebaseAudit[]> = new BehaviorSubject<AokKnowledgebaseAudit[]>([]);
  aokKnowledgebaseAuditData: AokKnowledgebaseAudit = new AokKnowledgebaseAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AokKnowledgebaseAudit[] {
    return this.dataChange.value;
  }

  getDataAokKnowledgebaseAudit(): void {
    this.getAllAokKnowledgebaseAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AokKnowledgebaseAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAokKnowledgebaseAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAokKnowledgebaseAudit(aokKnowledgebaseAudit:AokKnowledgebaseAudit) {
    return this.http.post(this.basePath, aokKnowledgebaseAudit);
  }
  getAokKnowledgebaseAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAokKnowledgebaseAudit(id:any, aokKnowledgebaseAudit:AokKnowledgebaseAudit) {
    return this.http.put(this.basePath + '/' + id, aokKnowledgebaseAudit);
  }
  deleteAokKnowledgebaseAudit(id:any) {
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
  
  
  updateAokKnowledgebaseAuditById(id:any, aokKnowledgebaseAudit:AokKnowledgebaseAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseAuditById?id=' + id, aokKnowledgebaseAudit);
  }
  
  updateAokKnowledgebaseAuditByCreatedBy(createdBy:any, aokKnowledgebaseAudit:AokKnowledgebaseAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseAuditByCreatedBy?createdBy=' + createdBy, aokKnowledgebaseAudit);
  }
  
  updateAokKnowledgebaseAuditByFieldName(fieldName:any, aokKnowledgebaseAudit:AokKnowledgebaseAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseAuditByFieldName?fieldName=' + fieldName, aokKnowledgebaseAudit);
  }
  
  updateAokKnowledgebaseAuditByDataType(dataType:any, aokKnowledgebaseAudit:AokKnowledgebaseAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseAuditByDataType?dataType=' + dataType, aokKnowledgebaseAudit);
  }
  
  updateAokKnowledgebaseAuditByBeforeValueString(beforeValueString:any, aokKnowledgebaseAudit:AokKnowledgebaseAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseAuditByBeforeValueString?beforeValueString=' + beforeValueString, aokKnowledgebaseAudit);
  }
  
  updateAokKnowledgebaseAuditByAfterValueString(afterValueString:any, aokKnowledgebaseAudit:AokKnowledgebaseAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseAuditByAfterValueString?afterValueString=' + afterValueString, aokKnowledgebaseAudit);
  }
  
  updateAokKnowledgebaseAuditByBeforeValueText(beforeValueText:any, aokKnowledgebaseAudit:AokKnowledgebaseAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseAuditByBeforeValueText?beforeValueText=' + beforeValueText, aokKnowledgebaseAudit);
  }
  
  updateAokKnowledgebaseAuditByAfterValueText(afterValueText:any, aokKnowledgebaseAudit:AokKnowledgebaseAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseAuditByAfterValueText?afterValueText=' + afterValueText, aokKnowledgebaseAudit);
  }
  
  updateAokKnowledgebaseAuditByDateCreated(dateCreated:any, aokKnowledgebaseAudit:AokKnowledgebaseAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseAuditByDateCreated?dateCreated=' + dateCreated, aokKnowledgebaseAudit);
  }
  
  updateAokKnowledgebaseAuditByParentId(parentId:any, aokKnowledgebaseAudit:AokKnowledgebaseAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgebaseAuditByParentId?parentId=' + parentId, aokKnowledgebaseAudit);
  }
  
  
  
  //</es-section>
}
