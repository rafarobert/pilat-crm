/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:26 GMT-0400 (Bolivia Time)
 * Time: 2:41:26
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:26 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:26
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AorReports} from "../models/aorReports";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AorReportService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/aor-reports`;
  dataChange: BehaviorSubject<AorReports[]> = new BehaviorSubject<AorReports[]>([]);
  aorReportData: AorReports = new AorReports();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): AorReports[] {
    return this.dataChange.value;
  }

  getDataAorReports(): void {
    this.getAllAorReports().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AorReports[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllAorReports(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAorReport(aorReport:AorReports) {
    return this.http.post(this.basePath, aorReport);
  }
  getAorReport(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAorReport(id:any, aorReport:AorReports) {
    return this.http.put(this.basePath + '/' + id, aorReport);
  }
  deleteAorReport(id:any) {
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
  
  findOneByGraphsPerRow(graphsPerRow:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGraphsPerRow/' + graphsPerRow + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByReportModule(reportModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReportModule/' + reportModule + '?' + attributes);
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
  
  
  updateAorReportById(id:any, aorReport:AorReports) {
      return this.http.post(this.basePath + '/updateAorReportById?id=' + id, aorReport);
  }
  
  updateAorReportByDeleted(deleted:any, aorReport:AorReports) {
      return this.http.post(this.basePath + '/updateAorReportByDeleted?deleted=' + deleted, aorReport);
  }
  
  updateAorReportByGraphsPerRow(graphsPerRow:any, aorReport:AorReports) {
      return this.http.post(this.basePath + '/updateAorReportByGraphsPerRow?graphsPerRow=' + graphsPerRow, aorReport);
  }
  
  updateAorReportByName(name:any, aorReport:AorReports) {
      return this.http.post(this.basePath + '/updateAorReportByName?name=' + name, aorReport);
  }
  
  updateAorReportByReportModule(reportModule:any, aorReport:AorReports) {
      return this.http.post(this.basePath + '/updateAorReportByReportModule?reportModule=' + reportModule, aorReport);
  }
  
  updateAorReportByDescription(description:any, aorReport:AorReports) {
      return this.http.post(this.basePath + '/updateAorReportByDescription?description=' + description, aorReport);
  }
  
  updateAorReportByDateEntered(dateEntered:any, aorReport:AorReports) {
      return this.http.post(this.basePath + '/updateAorReportByDateEntered?dateEntered=' + dateEntered, aorReport);
  }
  
  updateAorReportByDateModified(dateModified:any, aorReport:AorReports) {
      return this.http.post(this.basePath + '/updateAorReportByDateModified?dateModified=' + dateModified, aorReport);
  }
  
  updateAorReportByModifiedUserId(modifiedUserId:any, aorReport:AorReports) {
      return this.http.post(this.basePath + '/updateAorReportByModifiedUserId?modifiedUserId=' + modifiedUserId, aorReport);
  }
  
  updateAorReportByCreatedBy(createdBy:any, aorReport:AorReports) {
      return this.http.post(this.basePath + '/updateAorReportByCreatedBy?createdBy=' + createdBy, aorReport);
  }
  
  updateAorReportByAssignedUserId(assignedUserId:any, aorReport:AorReports) {
      return this.http.post(this.basePath + '/updateAorReportByAssignedUserId?assignedUserId=' + assignedUserId, aorReport);
  }
  
  
  
  //</es-section>
}
