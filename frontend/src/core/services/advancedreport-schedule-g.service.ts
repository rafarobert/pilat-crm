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
import {AdvancedreportsScheduleG} from "../models/advancedreportsScheduleG";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AdvancedreportScheduleGService {

  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/advancedreports-schedule-g`;
  dataChange: BehaviorSubject<AdvancedreportsScheduleG[]> = new BehaviorSubject<AdvancedreportsScheduleG[]>([]);
  advancedreportScheduleGData: AdvancedreportsScheduleG;

  constructor(private http: HttpClient) { }

  get data(): AdvancedreportsScheduleG[] {
    return this.dataChange.value;
  }

  getDataAdvancedreportsScheduleG(): void {
    this.getAdvancedreportsScheduleG().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AdvancedreportsScheduleG[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAdvancedreportsScheduleG(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAdvancedreportScheduleG(advancedreportScheduleG:AdvancedreportsScheduleG) {
    return this.http.post(this.basePath, advancedreportScheduleG);
  }
  getAdvancedreportScheduleG(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAdvancedreportScheduleG(id:any, advancedreportScheduleG:AdvancedreportsScheduleG) {
    return this.http.put(this.basePath + '/' + id, advancedreportScheduleG);
  }
  deleteAdvancedreportScheduleG(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByGroup(group:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGroup/' + group + '?' + attributes);
  }
  
  
  updateAdvancedreportScheduleGById(id:any, advancedreportScheduleG:AdvancedreportsScheduleG) {
      return this.http.post(this.basePath + '/updateAdvancedreportScheduleGById?id=' + id, advancedreportScheduleG);
  }
  
  updateAdvancedreportScheduleGByGroup(group:any, advancedreportScheduleG:AdvancedreportsScheduleG) {
      return this.http.post(this.basePath + '/updateAdvancedreportScheduleGByGroup?group=' + group, advancedreportScheduleG);
  }
  
  
  
  //</es-section>
}
