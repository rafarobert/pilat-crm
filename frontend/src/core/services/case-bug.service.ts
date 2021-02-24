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
import {CasesBugs} from "../models/casesBugs";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CaseBugService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/cases-bugs`;
  dataChange: BehaviorSubject<CasesBugs[]> = new BehaviorSubject<CasesBugs[]>([]);
  caseBugData: CasesBugs = new CasesBugs();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): CasesBugs[] {
    return this.dataChange.value;
  }

  getDataCasesBugs(): void {
    this.getAllCasesBugs().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:CasesBugs[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCasesBugs(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCaseBug(caseBug:CasesBugs) {
    return this.http.post(this.basePath, caseBug);
  }
  getCaseBug(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCaseBug(id:any, caseBug:CasesBugs) {
    return this.http.put(this.basePath + '/' + id, caseBug);
  }
  deleteCaseBug(id:any) {
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
  
  findOneByCaseId(caseId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCaseId/' + caseId + '?' + attributes);
  }
  
  findOneByBugId(bugId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByBugId/' + bugId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateCaseBugById(id:any, caseBug:CasesBugs) {
      return this.http.post(this.basePath + '/updateCaseBugById?id=' + id, caseBug);
  }
  
  updateCaseBugByDeleted(deleted:any, caseBug:CasesBugs) {
      return this.http.post(this.basePath + '/updateCaseBugByDeleted?deleted=' + deleted, caseBug);
  }
  
  updateCaseBugByCaseId(caseId:any, caseBug:CasesBugs) {
      return this.http.post(this.basePath + '/updateCaseBugByCaseId?caseId=' + caseId, caseBug);
  }
  
  updateCaseBugByBugId(bugId:any, caseBug:CasesBugs) {
      return this.http.post(this.basePath + '/updateCaseBugByBugId?bugId=' + bugId, caseBug);
  }
  
  updateCaseBugByDateModified(dateModified:any, caseBug:CasesBugs) {
      return this.http.post(this.basePath + '/updateCaseBugByDateModified?dateModified=' + dateModified, caseBug);
  }
  
  
  
  //</es-section>
}
