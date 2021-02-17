/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:07 GMT-0400 (Bolivia Time)
 * Time: 2:41:7
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:07 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:7
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AnalyticReporting} from "../models/analyticReporting";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AnalyticReportingService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/analytic-reporting`;
  dataChange: BehaviorSubject<AnalyticReporting[]> = new BehaviorSubject<AnalyticReporting[]>([]);
  analyticReportingData: AnalyticReporting = new AnalyticReporting();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AnalyticReporting[] {
    return this.dataChange.value;
  }

  getDataAnalyticReporting(): void {
    this.getAllAnalyticReporting().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AnalyticReporting[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAnalyticReporting(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAnalyticReporting(analyticReporting:AnalyticReporting) {
    return this.http.post(this.basePath, analyticReporting);
  }
  getAnalyticReporting(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAnalyticReporting(id:any, analyticReporting:AnalyticReporting) {
    return this.http.put(this.basePath + '/' + id, analyticReporting);
  }
  deleteAnalyticReporting(id:any) {
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
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
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
  
  
  updateAnalyticReportingById(id:any, analyticReporting:AnalyticReporting) {
      return this.http.post(this.basePath + '/updateAnalyticReportingById?id=' + id, analyticReporting);
  }
  
  updateAnalyticReportingByDeleted(deleted:any, analyticReporting:AnalyticReporting) {
      return this.http.post(this.basePath + '/updateAnalyticReportingByDeleted?deleted=' + deleted, analyticReporting);
  }
  
  updateAnalyticReportingByName(name:any, analyticReporting:AnalyticReporting) {
      return this.http.post(this.basePath + '/updateAnalyticReportingByName?name=' + name, analyticReporting);
  }
  
  updateAnalyticReportingByDescription(description:any, analyticReporting:AnalyticReporting) {
      return this.http.post(this.basePath + '/updateAnalyticReportingByDescription?description=' + description, analyticReporting);
  }
  
  updateAnalyticReportingByDateEntered(dateEntered:any, analyticReporting:AnalyticReporting) {
      return this.http.post(this.basePath + '/updateAnalyticReportingByDateEntered?dateEntered=' + dateEntered, analyticReporting);
  }
  
  updateAnalyticReportingByDateModified(dateModified:any, analyticReporting:AnalyticReporting) {
      return this.http.post(this.basePath + '/updateAnalyticReportingByDateModified?dateModified=' + dateModified, analyticReporting);
  }
  
  updateAnalyticReportingByModifiedUserId(modifiedUserId:any, analyticReporting:AnalyticReporting) {
      return this.http.post(this.basePath + '/updateAnalyticReportingByModifiedUserId?modifiedUserId=' + modifiedUserId, analyticReporting);
  }
  
  updateAnalyticReportingByCreatedBy(createdBy:any, analyticReporting:AnalyticReporting) {
      return this.http.post(this.basePath + '/updateAnalyticReportingByCreatedBy?createdBy=' + createdBy, analyticReporting);
  }
  
  updateAnalyticReportingByAssignedUserId(assignedUserId:any, analyticReporting:AnalyticReporting) {
      return this.http.post(this.basePath + '/updateAnalyticReportingByAssignedUserId?assignedUserId=' + assignedUserId, analyticReporting);
  }
  
  
  
  //</es-section>
}
