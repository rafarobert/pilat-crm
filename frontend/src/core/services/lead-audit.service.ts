/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:07 GMT-0400 (Bolivia Time)
 * Time: 2:43:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:07 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:7
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {LeadsAudit} from "../models/leadsAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class LeadAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/leads-audit`;
  dataChange: BehaviorSubject<LeadsAudit[]> = new BehaviorSubject<LeadsAudit[]>([]);
  leadAuditData: LeadsAudit = new LeadsAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): LeadsAudit[] {
    return this.dataChange.value;
  }

  getDataLeadsAudit(): void {
    this.getAllLeadsAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:LeadsAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllLeadsAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createLeadAudit(leadAudit:LeadsAudit) {
    return this.http.post(this.basePath, leadAudit);
  }
  getLeadAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateLeadAudit(id:any, leadAudit:LeadsAudit) {
    return this.http.put(this.basePath + '/' + id, leadAudit);
  }
  deleteLeadAudit(id:any) {
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
  
  
  updateLeadAuditById(id:any, leadAudit:LeadsAudit) {
      return this.http.post(this.basePath + '/updateLeadAuditById?id=' + id, leadAudit);
  }
  
  updateLeadAuditByCreatedBy(createdBy:any, leadAudit:LeadsAudit) {
      return this.http.post(this.basePath + '/updateLeadAuditByCreatedBy?createdBy=' + createdBy, leadAudit);
  }
  
  updateLeadAuditByFieldName(fieldName:any, leadAudit:LeadsAudit) {
      return this.http.post(this.basePath + '/updateLeadAuditByFieldName?fieldName=' + fieldName, leadAudit);
  }
  
  updateLeadAuditByDataType(dataType:any, leadAudit:LeadsAudit) {
      return this.http.post(this.basePath + '/updateLeadAuditByDataType?dataType=' + dataType, leadAudit);
  }
  
  updateLeadAuditByBeforeValueString(beforeValueString:any, leadAudit:LeadsAudit) {
      return this.http.post(this.basePath + '/updateLeadAuditByBeforeValueString?beforeValueString=' + beforeValueString, leadAudit);
  }
  
  updateLeadAuditByAfterValueString(afterValueString:any, leadAudit:LeadsAudit) {
      return this.http.post(this.basePath + '/updateLeadAuditByAfterValueString?afterValueString=' + afterValueString, leadAudit);
  }
  
  updateLeadAuditByBeforeValueText(beforeValueText:any, leadAudit:LeadsAudit) {
      return this.http.post(this.basePath + '/updateLeadAuditByBeforeValueText?beforeValueText=' + beforeValueText, leadAudit);
  }
  
  updateLeadAuditByAfterValueText(afterValueText:any, leadAudit:LeadsAudit) {
      return this.http.post(this.basePath + '/updateLeadAuditByAfterValueText?afterValueText=' + afterValueText, leadAudit);
  }
  
  updateLeadAuditByDateCreated(dateCreated:any, leadAudit:LeadsAudit) {
      return this.http.post(this.basePath + '/updateLeadAuditByDateCreated?dateCreated=' + dateCreated, leadAudit);
  }
  
  updateLeadAuditByParentId(parentId:any, leadAudit:LeadsAudit) {
      return this.http.post(this.basePath + '/updateLeadAuditByParentId?parentId=' + parentId, leadAudit);
  }
  
  
  
  //</es-section>
}
