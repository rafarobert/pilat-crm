/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 03:17:37 GMT-0400 (Bolivia Time)
 * Time: 3:17:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 03:17:37 GMT-0400 (Bolivia Time)
 * Last time updated: 3:17:37
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {AdvancedreportsSchedule} from "../models/advancedreportsSchedule";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class AdvancedreportScheduleService {

  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/advancedreports-schedule`;
  dataChange: BehaviorSubject<AdvancedreportsSchedule[]> = new BehaviorSubject<AdvancedreportsSchedule[]>([]);
  advancedreportScheduleData: AdvancedreportsSchedule;

  constructor(private http: HttpClient) { }

  get data(): AdvancedreportsSchedule[] {
    return this.dataChange.value;
  }

  getDataAdvancedreportsSchedule(): void {
    this.getAdvancedreportsSchedule().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:AdvancedreportsSchedule[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAdvancedreportsSchedule(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createAdvancedreportSchedule(advancedreportSchedule:AdvancedreportsSchedule) {
    return this.http.post(this.basePath, advancedreportSchedule);
  }
  getAdvancedreportSchedule(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateAdvancedreportSchedule(id:any, advancedreportSchedule:AdvancedreportsSchedule) {
    return this.http.put(this.basePath + '/' + id, advancedreportSchedule);
  }
  deleteAdvancedreportSchedule(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByInterval(interval:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByInterval/' + interval + '?' + attributes);
  }
  
  findOneByIntervalOptions(intervalOptions:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByIntervalOptions/' + intervalOptions + '?' + attributes);
  }
  
  findOneByTime(time:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTime/' + time + '?' + attributes);
  }
  
  findOneByNexttime(nexttime:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByNexttime/' + nexttime + '?' + attributes);
  }
  
  findOneByFormats(formats:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByFormats/' + formats + '?' + attributes);
  }
  
  findOneByEmails(emails:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmails/' + emails + '?' + attributes);
  }
  
  
  updateAdvancedreportScheduleById(id:any, advancedreportSchedule:AdvancedreportsSchedule) {
      return this.http.post(this.basePath + '/updateAdvancedreportScheduleById?id=' + id, advancedreportSchedule);
  }
  
  updateAdvancedreportScheduleByInterval(interval:any, advancedreportSchedule:AdvancedreportsSchedule) {
      return this.http.post(this.basePath + '/updateAdvancedreportScheduleByInterval?interval=' + interval, advancedreportSchedule);
  }
  
  updateAdvancedreportScheduleByIntervalOptions(intervalOptions:any, advancedreportSchedule:AdvancedreportsSchedule) {
      return this.http.post(this.basePath + '/updateAdvancedreportScheduleByIntervalOptions?intervalOptions=' + intervalOptions, advancedreportSchedule);
  }
  
  updateAdvancedreportScheduleByTime(time:any, advancedreportSchedule:AdvancedreportsSchedule) {
      return this.http.post(this.basePath + '/updateAdvancedreportScheduleByTime?time=' + time, advancedreportSchedule);
  }
  
  updateAdvancedreportScheduleByNexttime(nexttime:any, advancedreportSchedule:AdvancedreportsSchedule) {
      return this.http.post(this.basePath + '/updateAdvancedreportScheduleByNexttime?nexttime=' + nexttime, advancedreportSchedule);
  }
  
  updateAdvancedreportScheduleByFormats(formats:any, advancedreportSchedule:AdvancedreportsSchedule) {
      return this.http.post(this.basePath + '/updateAdvancedreportScheduleByFormats?formats=' + formats, advancedreportSchedule);
  }
  
  updateAdvancedreportScheduleByEmails(emails:any, advancedreportSchedule:AdvancedreportsSchedule) {
      return this.http.post(this.basePath + '/updateAdvancedreportScheduleByEmails?emails=' + emails, advancedreportSchedule);
  }
  
  
  
  //</es-section>
}
