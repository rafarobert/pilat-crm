/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:12 GMT-0400 (Bolivia Time)
 * Time: 2:42:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:12 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:12
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Cases} from "../models/cases";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/cases`;
  dataChange: BehaviorSubject<Cases[]> = new BehaviorSubject<Cases[]>([]);
  caseData: Cases = new Cases();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Cases[] {
    return this.dataChange.value;
  }

  getDataCases(): void {
    this.getAllCases().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Cases[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCases(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCase(case:Cases) {
    return this.http.post(this.basePath, case);
  }
  getCase(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCase(id:any, case:Cases) {
    return this.http.put(this.basePath + '/' + id, case);
  }
  deleteCase(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByCaseNumber(caseNumber:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCaseNumber/' + caseNumber + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByType(type:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByType/' + type + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByPriority(priority:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPriority/' + priority + '?' + attributes);
  }
  
  findOneByState(state:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByState/' + state + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByResolution(resolution:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByResolution/' + resolution + '?' + attributes);
  }
  
  findOneByWorkLog(workLog:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByWorkLog/' + workLog + '?' + attributes);
  }
  
  findOneByDateEntered(dateEntered:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateEntered/' + dateEntered + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  findOneByModifiedUserId(modifiedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModifiedUserId/' + modifiedUserId + '?' + attributes);
  }
  
  findOneByCreatedBy(createdBy:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedBy/' + createdBy + '?' + attributes);
  }
  
  findOneByAssignedUserId(assignedUserId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAssignedUserId/' + assignedUserId + '?' + attributes);
  }
  
  findOneByAccountId(accountId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAccountId/' + accountId + '?' + attributes);
  }
  
  findOneByContactCreatedById(contactCreatedById:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactCreatedById/' + contactCreatedById + '?' + attributes);
  }
  
  
  updateCaseById(id:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseById?id=' + id, case);
  }
  
  updateCaseByDeleted(deleted:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByDeleted?deleted=' + deleted, case);
  }
  
  updateCaseByCaseNumber(caseNumber:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByCaseNumber?caseNumber=' + caseNumber, case);
  }
  
  updateCaseByName(name:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByName?name=' + name, case);
  }
  
  updateCaseByType(type:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByType?type=' + type, case);
  }
  
  updateCaseByStatus(status:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByStatus?status=' + status, case);
  }
  
  updateCaseByPriority(priority:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByPriority?priority=' + priority, case);
  }
  
  updateCaseByState(state:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByState?state=' + state, case);
  }
  
  updateCaseByDescription(description:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByDescription?description=' + description, case);
  }
  
  updateCaseByResolution(resolution:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByResolution?resolution=' + resolution, case);
  }
  
  updateCaseByWorkLog(workLog:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByWorkLog?workLog=' + workLog, case);
  }
  
  updateCaseByDateEntered(dateEntered:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByDateEntered?dateEntered=' + dateEntered, case);
  }
  
  updateCaseByDateModified(dateModified:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByDateModified?dateModified=' + dateModified, case);
  }
  
  updateCaseByModifiedUserId(modifiedUserId:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByModifiedUserId?modifiedUserId=' + modifiedUserId, case);
  }
  
  updateCaseByCreatedBy(createdBy:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByCreatedBy?createdBy=' + createdBy, case);
  }
  
  updateCaseByAssignedUserId(assignedUserId:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByAssignedUserId?assignedUserId=' + assignedUserId, case);
  }
  
  updateCaseByAccountId(accountId:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByAccountId?accountId=' + accountId, case);
  }
  
  updateCaseByContactCreatedById(contactCreatedById:any, case:Cases) {
      return this.http.post(this.basePath + '/updateCaseByContactCreatedById?contactCreatedById=' + contactCreatedById, case);
  }
  
  
  
  //</es-section>
}
