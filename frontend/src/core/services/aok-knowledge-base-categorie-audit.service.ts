/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:18 GMT-0400 (Bolivia Time)
 * Time: 2:41:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:18 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:18
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
export class AokKnowledgeBaseCategorieAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aok-knowledge-base-categories-audit`;
  dataChange: BehaviorSubject<AokKnowledgeBaseCategoriesAudit[]> = new BehaviorSubject<AokKnowledgeBaseCategoriesAudit[]>([]);
  aokKnowledgeBaseCategorieAuditData: AokKnowledgeBaseCategoriesAudit = new AokKnowledgeBaseCategoriesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AokKnowledgeBaseCategoriesAudit[] {
    return this.dataChange.value;
  }

  getDataAokKnowledgeBaseCategoriesAudit(): void {
    this.getAllAokKnowledgeBaseCategoriesAudit().subscribe(async (res) => {
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
  createAokKnowledgeBaseCategorieAudit(aokKnowledgeBaseCategorieAudit:AokKnowledgeBaseCategoriesAudit) {
    return this.http.post(this.basePath, aokKnowledgeBaseCategorieAudit);
  }
  getAokKnowledgeBaseCategorieAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAokKnowledgeBaseCategorieAudit(id:any, aokKnowledgeBaseCategorieAudit:AokKnowledgeBaseCategoriesAudit) {
    return this.http.put(this.basePath + '/' + id, aokKnowledgeBaseCategorieAudit);
  }
  deleteAokKnowledgeBaseCategorieAudit(id:any) {
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
  
  
  updateAokKnowledgeBaseCategorieAuditById(id:any, aokKnowledgeBaseCategorieAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieAuditById?id=' + id, aokKnowledgeBaseCategorieAudit);
  }
  
  updateAokKnowledgeBaseCategorieAuditByCreatedBy(createdBy:any, aokKnowledgeBaseCategorieAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieAuditByCreatedBy?createdBy=' + createdBy, aokKnowledgeBaseCategorieAudit);
  }
  
  updateAokKnowledgeBaseCategorieAuditByFieldName(fieldName:any, aokKnowledgeBaseCategorieAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieAuditByFieldName?fieldName=' + fieldName, aokKnowledgeBaseCategorieAudit);
  }
  
  updateAokKnowledgeBaseCategorieAuditByDataType(dataType:any, aokKnowledgeBaseCategorieAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieAuditByDataType?dataType=' + dataType, aokKnowledgeBaseCategorieAudit);
  }
  
  updateAokKnowledgeBaseCategorieAuditByBeforeValueString(beforeValueString:any, aokKnowledgeBaseCategorieAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieAuditByBeforeValueString?beforeValueString=' + beforeValueString, aokKnowledgeBaseCategorieAudit);
  }
  
  updateAokKnowledgeBaseCategorieAuditByAfterValueString(afterValueString:any, aokKnowledgeBaseCategorieAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieAuditByAfterValueString?afterValueString=' + afterValueString, aokKnowledgeBaseCategorieAudit);
  }
  
  updateAokKnowledgeBaseCategorieAuditByBeforeValueText(beforeValueText:any, aokKnowledgeBaseCategorieAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieAuditByBeforeValueText?beforeValueText=' + beforeValueText, aokKnowledgeBaseCategorieAudit);
  }
  
  updateAokKnowledgeBaseCategorieAuditByAfterValueText(afterValueText:any, aokKnowledgeBaseCategorieAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieAuditByAfterValueText?afterValueText=' + afterValueText, aokKnowledgeBaseCategorieAudit);
  }
  
  updateAokKnowledgeBaseCategorieAuditByDateCreated(dateCreated:any, aokKnowledgeBaseCategorieAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieAuditByDateCreated?dateCreated=' + dateCreated, aokKnowledgeBaseCategorieAudit);
  }
  
  updateAokKnowledgeBaseCategorieAuditByParentId(parentId:any, aokKnowledgeBaseCategorieAudit:AokKnowledgeBaseCategoriesAudit) {
      return this.http.post(this.basePath + '/updateAokKnowledgeBaseCategorieAuditByParentId?parentId=' + parentId, aokKnowledgeBaseCategorieAudit);
  }
  
  
  
  //</es-section>
}
