/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 02:51:17 GMT-0400 (Bolivia Time)
 * Time: 2:51:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 02:51:17 GMT-0400 (Bolivia Time)
 * Last time updated: 2:51:17
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {SlowLog} from "../models/slowLog";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class SlowLogService {

  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/slow-log`;
  dataChange: BehaviorSubject<SlowLog[]> = new BehaviorSubject<SlowLog[]>([]);
  slowLogData: SlowLog;

  constructor(private http: HttpClient) { }

  get data(): SlowLog[] {
    return this.dataChange.value;
  }

  getDataSlowLog(): void {
    this.getSlowLog().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:SlowLog[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getSlowLog(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createSlowLog(slowLog:SlowLog) {
    return this.http.post(this.basePath, slowLog);
  }
  getSlowLog(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateSlowLog(id:any, slowLog:SlowLog) {
    return this.http.put(this.basePath + '/' + id, slowLog);
  }
  deleteSlowLog(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByThreadId(threadId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByThreadId/' + threadId + '?' + attributes);
  }
  
  findOneByRowsSent(rowsSent:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRowsSent/' + rowsSent + '?' + attributes);
  }
  
  findOneByRowsExamined(rowsExamined:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRowsExamined/' + rowsExamined + '?' + attributes);
  }
  
  findOneByLastInsertId(lastInsertId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLastInsertId/' + lastInsertId + '?' + attributes);
  }
  
  findOneByInsertId(insertId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByInsertId/' + insertId + '?' + attributes);
  }
  
  findOneByServerId(serverId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByServerId/' + serverId + '?' + attributes);
  }
  
  findOneByDb(db:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDb/' + db + '?' + attributes);
  }
  
  findOneByUserHost(userHost:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserHost/' + userHost + '?' + attributes);
  }
  
  findOneBySqlText(sqlText:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySqlText/' + sqlText + '?' + attributes);
  }
  
  
  updateSlowLogByThreadId(threadId:any, slowLog:SlowLog) {
      return this.http.post(this.basePath + '/updateSlowLogByThreadId?threadId=' + threadId, slowLog);
  }
  
  updateSlowLogByRowsSent(rowsSent:any, slowLog:SlowLog) {
      return this.http.post(this.basePath + '/updateSlowLogByRowsSent?rowsSent=' + rowsSent, slowLog);
  }
  
  updateSlowLogByRowsExamined(rowsExamined:any, slowLog:SlowLog) {
      return this.http.post(this.basePath + '/updateSlowLogByRowsExamined?rowsExamined=' + rowsExamined, slowLog);
  }
  
  updateSlowLogByLastInsertId(lastInsertId:any, slowLog:SlowLog) {
      return this.http.post(this.basePath + '/updateSlowLogByLastInsertId?lastInsertId=' + lastInsertId, slowLog);
  }
  
  updateSlowLogByInsertId(insertId:any, slowLog:SlowLog) {
      return this.http.post(this.basePath + '/updateSlowLogByInsertId?insertId=' + insertId, slowLog);
  }
  
  updateSlowLogByServerId(serverId:any, slowLog:SlowLog) {
      return this.http.post(this.basePath + '/updateSlowLogByServerId?serverId=' + serverId, slowLog);
  }
  
  updateSlowLogByDb(db:any, slowLog:SlowLog) {
      return this.http.post(this.basePath + '/updateSlowLogByDb?db=' + db, slowLog);
  }
  
  updateSlowLogByUserHost(userHost:any, slowLog:SlowLog) {
      return this.http.post(this.basePath + '/updateSlowLogByUserHost?userHost=' + userHost, slowLog);
  }
  
  updateSlowLogBySqlText(sqlText:any, slowLog:SlowLog) {
      return this.http.post(this.basePath + '/updateSlowLogBySqlText?sqlText=' + sqlText, slowLog);
  }
  
  
  
  //</es-section>
}
