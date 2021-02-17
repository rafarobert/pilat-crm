/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:20:14 GMT-0400 (Bolivia Time)
 * Time: 4:20:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:20:14 GMT-0400 (Bolivia Time)
 * Last time updated: 4:20:14
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AokKnowledgeBaseCategoriesAudit} from "../models/aokKnowledgeBaseCategoriesAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AokKnowledgeBaseCategoryAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aok-knowledge-base-categories-audit`;
  dataChange: BehaviorSubject<AokKnowledgeBaseCategoriesAudit[]> = new BehaviorSubject<AokKnowledgeBaseCategoriesAudit[]>([]);
  aokKnowledgeBaseCategoryAuditData: AokKnowledgeBaseCategoriesAudit = new AokKnowledgeBaseCategoriesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AokKnowledgeBaseCategoriesAudit[] {
    return this.dataChange.value;
  }

  getDataAokKnowledgeBaseCategoriesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllAokKnowledgeBaseCategoriesAudit(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AokKnowledgeBaseCategoriesAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAokKnowledgeBaseCategoriesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAokKnowledgeBaseCategoryAudit(aokKnowledgeBaseCategoryAudit:AokKnowledgeBaseCategoriesAudit) {
    return this.http.post(this.basePath, aokKnowledgeBaseCategoryAudit);
  }
  getAokKnowledgeBaseCategoryAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAokKnowledgeBaseCategoryAudit(id:any, aokKnowledgeBaseCategoryAudit:AokKnowledgeBaseCategoriesAudit) {
    return this.http.put(this.basePath + '/' + id, aokKnowledgeBaseCategoryAudit);
  }
  deleteAokKnowledgeBaseCategoryAudit(id:any) {
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
  
  
  updateAokKnowledgeBaseCategoryAuditById(id:any, aokKnowledgeBaseCategoryAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryAuditById?id=' + id, aokKnowledgeBaseCategoryAudit);
  }
  
  updateAokKnowledgeBaseCategoryAuditByCreatedBy(createdBy:any, aokKnowledgeBaseCategoryAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryAuditByCreatedBy?createdBy=' + createdBy, aokKnowledgeBaseCategoryAudit);
  }
  
  updateAokKnowledgeBaseCategoryAuditByFieldName(fieldName:any, aokKnowledgeBaseCategoryAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryAuditByFieldName?fieldName=' + fieldName, aokKnowledgeBaseCategoryAudit);
  }
  
  updateAokKnowledgeBaseCategoryAuditByDataType(dataType:any, aokKnowledgeBaseCategoryAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryAuditByDataType?dataType=' + dataType, aokKnowledgeBaseCategoryAudit);
  }
  
  updateAokKnowledgeBaseCategoryAuditByBeforeValueString(beforeValueString:any, aokKnowledgeBaseCategoryAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryAuditByBeforeValueString?beforeValueString=' + beforeValueString, aokKnowledgeBaseCategoryAudit);
  }
  
  updateAokKnowledgeBaseCategoryAuditByAfterValueString(afterValueString:any, aokKnowledgeBaseCategoryAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryAuditByAfterValueString?afterValueString=' + afterValueString, aokKnowledgeBaseCategoryAudit);
  }
  
  updateAokKnowledgeBaseCategoryAuditByBeforeValueText(beforeValueText:any, aokKnowledgeBaseCategoryAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryAuditByBeforeValueText?beforeValueText=' + beforeValueText, aokKnowledgeBaseCategoryAudit);
  }
  
  updateAokKnowledgeBaseCategoryAuditByAfterValueText(afterValueText:any, aokKnowledgeBaseCategoryAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryAuditByAfterValueText?afterValueText=' + afterValueText, aokKnowledgeBaseCategoryAudit);
  }
  
  updateAokKnowledgeBaseCategoryAuditByDateCreated(dateCreated:any, aokKnowledgeBaseCategoryAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryAuditByDateCreated?dateCreated=' + dateCreated, aokKnowledgeBaseCategoryAudit);
  }
  
  updateAokKnowledgeBaseCategoryAuditByParentId(parentId:any, aokKnowledgeBaseCategoryAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategoryAuditByParentId?parentId=' + parentId, aokKnowledgeBaseCategoryAudit);
  }
  
  
  
  //</es-section>
}
