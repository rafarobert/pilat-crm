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
import {AdvancedreportsScheduleR} from "../models/advancedreportsScheduleR";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AdvancedreportScheduleRService {

  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/advancedreports-schedule-r`;
  dataChange: BehaviorSubject<AdvancedreportsScheduleR[]> = new BehaviorSubject<AdvancedreportsScheduleR[]>([]);
  advancedreportScheduleRData: AdvancedreportsScheduleR;

  constructor(private http: HttpClient) { }

  get data(): AdvancedreportsScheduleR[] {
    return this.dataChange.value;
  }

  getDataAdvancedreportsScheduleR(): void {
    this.getAdvancedreportsScheduleR().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AdvancedreportsScheduleR[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAdvancedreportsScheduleR(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAdvancedreportScheduleR(advancedreportScheduleR:AdvancedreportsScheduleR) {
    return this.http.post(this.basePath, advancedreportScheduleR);
  }
  getAdvancedreportScheduleR(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAdvancedreportScheduleR(id:any, advancedreportScheduleR:AdvancedreportsScheduleR) {
    return this.http.put(this.basePath + '/' + id, advancedreportScheduleR);
  }
  deleteAdvancedreportScheduleR(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByRole(role:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRole/' + role + '?' + attributes);
  }
  
  
  updateAdvancedreportScheduleRById(id:any, advancedreportScheduleR:AdvancedreportsScheduleR) {
      return this.http.post(this.basePath + '/updateAdvancedreportScheduleRById?id=' + id, advancedreportScheduleR);
  }
  
  updateAdvancedreportScheduleRByRole(role:any, advancedreportScheduleR:AdvancedreportsScheduleR) {
      return this.http.post(this.basePath + '/updateAdvancedreportScheduleRByRole?role=' + role, advancedreportScheduleR);
  }
  
  
  
  //</es-section>
}
