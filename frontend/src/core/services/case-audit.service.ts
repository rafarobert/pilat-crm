/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:13 GMT-0400 (Bolivia Time)
 * Time: 2:42:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:13 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:13
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {CasesAudit} from "../models/casesAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CaseAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/cases-audit`;
  dataChange: BehaviorSubject<CasesAudit[]> = new BehaviorSubject<CasesAudit[]>([]);
  caseAuditData: CasesAudit = new CasesAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): CasesAudit[] {
    return this.dataChange.value;
  }

  getDataCasesAudit(): void {
    this.getAllCasesAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:CasesAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCasesAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCaseAudit(caseAudit:CasesAudit) {
    return this.http.post(this.basePath, caseAudit);
  }
  getCaseAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCaseAudit(id:any, caseAudit:CasesAudit) {
    return this.http.put(this.basePath + '/' + id, caseAudit);
  }
  deleteCaseAudit(id:any) {
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
  
  
  updateCaseAuditById(id:any, caseAudit:CasesAudit) {
      return this.http.post(this.basePath + '/updateCaseAuditById?id=' + id, caseAudit);
  }
  
  updateCaseAuditByCreatedBy(createdBy:any, caseAudit:CasesAudit) {
      return this.http.post(this.basePath + '/updateCaseAuditByCreatedBy?createdBy=' + createdBy, caseAudit);
  }
  
  updateCaseAuditByFieldName(fieldName:any, caseAudit:CasesAudit) {
      return this.http.post(this.basePath + '/updateCaseAuditByFieldName?fieldName=' + fieldName, caseAudit);
  }
  
  updateCaseAuditByDataType(dataType:any, caseAudit:CasesAudit) {
      return this.http.post(this.basePath + '/updateCaseAuditByDataType?dataType=' + dataType, caseAudit);
  }
  
  updateCaseAuditByBeforeValueString(beforeValueString:any, caseAudit:CasesAudit) {
      return this.http.post(this.basePath + '/updateCaseAuditByBeforeValueString?beforeValueString=' + beforeValueString, caseAudit);
  }
  
  updateCaseAuditByAfterValueString(afterValueString:any, caseAudit:CasesAudit) {
      return this.http.post(this.basePath + '/updateCaseAuditByAfterValueString?afterValueString=' + afterValueString, caseAudit);
  }
  
  updateCaseAuditByBeforeValueText(beforeValueText:any, caseAudit:CasesAudit) {
      return this.http.post(this.basePath + '/updateCaseAuditByBeforeValueText?beforeValueText=' + beforeValueText, caseAudit);
  }
  
  updateCaseAuditByAfterValueText(afterValueText:any, caseAudit:CasesAudit) {
      return this.http.post(this.basePath + '/updateCaseAuditByAfterValueText?afterValueText=' + afterValueText, caseAudit);
  }
  
  updateCaseAuditByDateCreated(dateCreated:any, caseAudit:CasesAudit) {
      return this.http.post(this.basePath + '/updateCaseAuditByDateCreated?dateCreated=' + dateCreated, caseAudit);
  }
  
  updateCaseAuditByParentId(parentId:any, caseAudit:CasesAudit) {
      return this.http.post(this.basePath + '/updateCaseAuditByParentId?parentId=' + parentId, caseAudit);
  }
  
  
  
  //</es-section>
}
