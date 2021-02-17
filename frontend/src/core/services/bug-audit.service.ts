/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:00 GMT-0400 (Bolivia Time)
 * Time: 2:42:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:00 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:0
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {BugsAudit} from "../models/bugsAudit";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class BugAuditService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/bugs-audit`;
  dataChange: BehaviorSubject<BugsAudit[]> = new BehaviorSubject<BugsAudit[]>([]);
  bugAuditData: BugsAudit = new BugsAudit();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): BugsAudit[] {
    return this.dataChange.value;
  }

  getDataBugsAudit(): void {
    this.getAllBugsAudit().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:BugsAudit[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllBugsAudit(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createBugAudit(bugAudit:BugsAudit) {
    return this.http.post(this.basePath, bugAudit);
  }
  getBugAudit(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateBugAudit(id:any, bugAudit:BugsAudit) {
    return this.http.put(this.basePath + '/' + id, bugAudit);
  }
  deleteBugAudit(id:any) {
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
  
  
  updateBugAuditById(id:any, bugAudit:BugsAudit) {
      return this.http.post(this.basePath + '/updateBugAuditById?id=' + id, bugAudit);
  }
  
  updateBugAuditByCreatedBy(createdBy:any, bugAudit:BugsAudit) {
      return this.http.post(this.basePath + '/updateBugAuditByCreatedBy?createdBy=' + createdBy, bugAudit);
  }
  
  updateBugAuditByFieldName(fieldName:any, bugAudit:BugsAudit) {
      return this.http.post(this.basePath + '/updateBugAuditByFieldName?fieldName=' + fieldName, bugAudit);
  }
  
  updateBugAuditByDataType(dataType:any, bugAudit:BugsAudit) {
      return this.http.post(this.basePath + '/updateBugAuditByDataType?dataType=' + dataType, bugAudit);
  }
  
  updateBugAuditByBeforeValueString(beforeValueString:any, bugAudit:BugsAudit) {
      return this.http.post(this.basePath + '/updateBugAuditByBeforeValueString?beforeValueString=' + beforeValueString, bugAudit);
  }
  
  updateBugAuditByAfterValueString(afterValueString:any, bugAudit:BugsAudit) {
      return this.http.post(this.basePath + '/updateBugAuditByAfterValueString?afterValueString=' + afterValueString, bugAudit);
  }
  
  updateBugAuditByBeforeValueText(beforeValueText:any, bugAudit:BugsAudit) {
      return this.http.post(this.basePath + '/updateBugAuditByBeforeValueText?beforeValueText=' + beforeValueText, bugAudit);
  }
  
  updateBugAuditByAfterValueText(afterValueText:any, bugAudit:BugsAudit) {
      return this.http.post(this.basePath + '/updateBugAuditByAfterValueText?afterValueText=' + afterValueText, bugAudit);
  }
  
  updateBugAuditByDateCreated(dateCreated:any, bugAudit:BugsAudit) {
      return this.http.post(this.basePath + '/updateBugAuditByDateCreated?dateCreated=' + dateCreated, bugAudit);
  }
  
  updateBugAuditByParentId(parentId:any, bugAudit:BugsAudit) {
      return this.http.post(this.basePath + '/updateBugAuditByParentId?parentId=' + parentId, bugAudit);
  }
  
  
  
  //</es-section>
}
