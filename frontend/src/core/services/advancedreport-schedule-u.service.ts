/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:17:38 GMT-0400 (Bolivia Time)
 * Time: 3:17:38
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:17:38 GMT-0400 (Bolivia Time)
 * Last time updated: 3:17:38
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AdvancedreportsScheduleU} from "../models/advancedreportsScheduleU";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AdvancedreportScheduleUService {

  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/advancedreports-schedule-u`;
  dataChange: BehaviorSubject<AdvancedreportsScheduleU[]> = new BehaviorSubject<AdvancedreportsScheduleU[]>([]);
  advancedreportScheduleUData: AdvancedreportsScheduleU;

  constructor(private http: HttpClient) { }

  get data(): AdvancedreportsScheduleU[] {
    return this.dataChange.value;
  }

  getDataAdvancedreportsScheduleU(): void {
    this.getAdvancedreportsScheduleU().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AdvancedreportsScheduleU[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAdvancedreportsScheduleU(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAdvancedreportScheduleU(advancedreportScheduleU:AdvancedreportsScheduleU) {
    return this.http.post(this.basePath, advancedreportScheduleU);
  }
  getAdvancedreportScheduleU(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAdvancedreportScheduleU(id:any, advancedreportScheduleU:AdvancedreportsScheduleU) {
    return this.http.put(this.basePath + '/' + id, advancedreportScheduleU);
  }
  deleteAdvancedreportScheduleU(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByUser(user:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUser/' + user + '?' + attributes);
  }
  
  
  updateAdvancedreportScheduleUById(id:any, advancedreportScheduleU:AdvancedreportsScheduleU) {
      return this.http.post(this.basePath + '/updateAdvancedreportScheduleUById?id=' + id, advancedreportScheduleU);
  }
  
  updateAdvancedreportScheduleUByUser(user:any, advancedreportScheduleU:AdvancedreportsScheduleU) {
      return this.http.post(this.basePath + '/updateAdvancedreportScheduleUByUser?user=' + user, advancedreportScheduleU);
  }
  
  
  
  //</es-section>
}
