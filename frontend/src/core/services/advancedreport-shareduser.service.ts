/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:17:39 GMT-0400 (Bolivia Time)
 * Time: 3:17:39
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:17:39 GMT-0400 (Bolivia Time)
 * Last time updated: 3:17:39
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AdvancedreportsSharedusers} from "../models/advancedreportsSharedusers";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AdvancedreportShareduserService {

  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/advancedreports-sharedusers`;
  dataChange: BehaviorSubject<AdvancedreportsSharedusers[]> = new BehaviorSubject<AdvancedreportsSharedusers[]>([]);
  advancedreportShareduserData: AdvancedreportsSharedusers;

  constructor(private http: HttpClient) { }

  get data(): AdvancedreportsSharedusers[] {
    return this.dataChange.value;
  }

  getDataAdvancedreportsSharedusers(): void {
    this.getAdvancedreportsSharedusers().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AdvancedreportsSharedusers[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAdvancedreportsSharedusers(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAdvancedreportShareduser(advancedreportShareduser:AdvancedreportsSharedusers) {
    return this.http.post(this.basePath, advancedreportShareduser);
  }
  getAdvancedreportShareduser(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAdvancedreportShareduser(id:any, advancedreportShareduser:AdvancedreportsSharedusers) {
    return this.http.put(this.basePath + '/' + id, advancedreportShareduser);
  }
  deleteAdvancedreportShareduser(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByReportId(reportId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReportId/' + reportId + '?' + attributes);
  }
  
  findOneByUserId(userId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserId/' + userId + '?' + attributes);
  }
  
  findOneByLevel(level:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLevel/' + level + '?' + attributes);
  }
  
  
  updateAdvancedreportShareduserByReportId(reportId:any, advancedreportShareduser:AdvancedreportsSharedusers) {
      return this.http.post(this.basePath + '/updateAdvancedreportShareduserByReportId?reportId=' + reportId, advancedreportShareduser);
  }
  
  updateAdvancedreportShareduserByUserId(userId:any, advancedreportShareduser:AdvancedreportsSharedusers) {
      return this.http.post(this.basePath + '/updateAdvancedreportShareduserByUserId?userId=' + userId, advancedreportShareduser);
  }
  
  updateAdvancedreportShareduserByLevel(level:any, advancedreportShareduser:AdvancedreportsSharedusers) {
      return this.http.post(this.basePath + '/updateAdvancedreportShareduserByLevel?level=' + level, advancedreportShareduser);
  }
  
  
  
  //</es-section>
}
