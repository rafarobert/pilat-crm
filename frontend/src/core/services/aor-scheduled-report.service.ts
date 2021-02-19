/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:28 GMT-0400 (Bolivia Time)
 * Time: 2:41:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:28 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:28
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AorScheduledReports} from "../models/aorScheduledReports";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AorScheduledReportService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aor-scheduled-reports`;
  dataChange: BehaviorSubject<AorScheduledReports[]> = new BehaviorSubject<AorScheduledReports[]>([]);
  aorScheduledReportData: AorScheduledReports = new AorScheduledReports();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AorScheduledReports[] {
    return this.dataChange.value;
  }

  getDataAorScheduledReports(): void {
    this.getAllAorScheduledReports().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AorScheduledReports[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAorScheduledReports(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAorScheduledReport(aorScheduledReport:AorScheduledReports) {
    return this.http.post(this.basePath, aorScheduledReport);
  }
  getAorScheduledReport(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAorScheduledReport(id:any, aorScheduledReport:AorScheduledReports) {
    return this.http.put(this.basePath + '/' + id, aorScheduledReport);
  }
  deleteAorScheduledReport(id:any) {
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
  
  findOneBySchedule(schedule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySchedule/' + schedule + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByEmailRecipients(emailRecipients:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailRecipients/' + emailRecipients + '?' + attributes);
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
  
  findOneByLastRun(lastRun:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLastRun/' + lastRun + '?' + attributes);
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
  
  findOneByAorReportId(aorReportId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAorReportId/' + aorReportId + '?' + attributes);
  }
  
  
  updateAorScheduledReportById(id:any, aorScheduledReport:AorScheduledReports) {
      return this.http.post(this.basePath + '/updateAorScheduledReportById?id=' + id, aorScheduledReport);
  }
  
  updateAorScheduledReportByDeleted(deleted:any, aorScheduledReport:AorScheduledReports) {
      return this.http.post(this.basePath + '/updateAorScheduledReportByDeleted?deleted=' + deleted, aorScheduledReport);
  }
  
  updateAorScheduledReportByName(name:any, aorScheduledReport:AorScheduledReports) {
      return this.http.post(this.basePath + '/updateAorScheduledReportByName?name=' + name, aorScheduledReport);
  }
  
  updateAorScheduledReportBySchedule(schedule:any, aorScheduledReport:AorScheduledReports) {
      return this.http.post(this.basePath + '/updateAorScheduledReportBySchedule?schedule=' + schedule, aorScheduledReport);
  }
  
  updateAorScheduledReportByStatus(status:any, aorScheduledReport:AorScheduledReports) {
      return this.http.post(this.basePath + '/updateAorScheduledReportByStatus?status=' + status, aorScheduledReport);
  }
  
  updateAorScheduledReportByDescription(description:any, aorScheduledReport:AorScheduledReports) {
      return this.http.post(this.basePath + '/updateAorScheduledReportByDescription?description=' + description, aorScheduledReport);
  }
  
  updateAorScheduledReportByEmailRecipients(emailRecipients:any, aorScheduledReport:AorScheduledReports) {
      return this.http.post(this.basePath + '/updateAorScheduledReportByEmailRecipients?emailRecipients=' + emailRecipients, aorScheduledReport);
  }
  
  updateAorScheduledReportByDateEntered(dateEntered:any, aorScheduledReport:AorScheduledReports) {
      return this.http.post(this.basePath + '/updateAorScheduledReportByDateEntered?dateEntered=' + dateEntered, aorScheduledReport);
  }
  
  updateAorScheduledReportByDateModified(dateModified:any, aorScheduledReport:AorScheduledReports) {
      return this.http.post(this.basePath + '/updateAorScheduledReportByDateModified?dateModified=' + dateModified, aorScheduledReport);
  }
  
  updateAorScheduledReportByLastRun(lastRun:any, aorScheduledReport:AorScheduledReports) {
      return this.http.post(this.basePath + '/updateAorScheduledReportByLastRun?lastRun=' + lastRun, aorScheduledReport);
  }
  
  updateAorScheduledReportByModifiedUserId(modifiedUserId:any, aorScheduledReport:AorScheduledReports) {
      return this.http.post(this.basePath + '/updateAorScheduledReportByModifiedUserId?modifiedUserId=' + modifiedUserId, aorScheduledReport);
  }
  
  updateAorScheduledReportByCreatedBy(createdBy:any, aorScheduledReport:AorScheduledReports) {
      return this.http.post(this.basePath + '/updateAorScheduledReportByCreatedBy?createdBy=' + createdBy, aorScheduledReport);
  }
  
  updateAorScheduledReportByAorReportId(aorReportId:any, aorScheduledReport:AorScheduledReports) {
      return this.http.post(this.basePath + '/updateAorScheduledReportByAorReportId?aorReportId=' + aorReportId, aorScheduledReport);
  }
  
  
  
  //</es-section>
}
