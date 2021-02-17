/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Dec 30 2020 02:50:45 GMT-0400 (Bolivia Time)
 * Time: 2:50:45
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Dec 30 2020 02:50:45 GMT-0400 (Bolivia Time)
 * Last time updated: 2:50:45
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {GeneralLog} from "../models/generalLog";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class GeneralLogService {

  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/general-log`;
  dataChange: BehaviorSubject<GeneralLog[]> = new BehaviorSubject<GeneralLog[]>([]);
  generalLogData: GeneralLog;

  constructor(private http: HttpClient) { }

  get data(): GeneralLog[] {
    return this.dataChange.value;
  }

  getDataGeneralLog(): void {
    this.getGeneralLog().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:GeneralLog[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getGeneralLog(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createGeneralLog(generalLog:GeneralLog) {
    return this.http.post(this.basePath, generalLog);
  }
  getGeneralLog(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateGeneralLog(id:any, generalLog:GeneralLog) {
    return this.http.put(this.basePath + '/' + id, generalLog);
  }
  deleteGeneralLog(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByThreadId(threadId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByThreadId/' + threadId + '?' + attributes);
  }
  
  findOneByServerId(serverId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByServerId/' + serverId + '?' + attributes);
  }
  
  findOneByCommandType(commandType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCommandType/' + commandType + '?' + attributes);
  }
  
  findOneByUserHost(userHost:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserHost/' + userHost + '?' + attributes);
  }
  
  findOneByArgument(argument:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByArgument/' + argument + '?' + attributes);
  }
  
  
  updateGeneralLogByThreadId(threadId:any, generalLog:GeneralLog) {
      return this.http.post(this.basePath + '/updateGeneralLogByThreadId?threadId=' + threadId, generalLog);
  }
  
  updateGeneralLogByServerId(serverId:any, generalLog:GeneralLog) {
      return this.http.post(this.basePath + '/updateGeneralLogByServerId?serverId=' + serverId, generalLog);
  }
  
  updateGeneralLogByCommandType(commandType:any, generalLog:GeneralLog) {
      return this.http.post(this.basePath + '/updateGeneralLogByCommandType?commandType=' + commandType, generalLog);
  }
  
  updateGeneralLogByUserHost(userHost:any, generalLog:GeneralLog) {
      return this.http.post(this.basePath + '/updateGeneralLogByUserHost?userHost=' + userHost, generalLog);
  }
  
  updateGeneralLogByArgument(argument:any, generalLog:GeneralLog) {
      return this.http.post(this.basePath + '/updateGeneralLogByArgument?argument=' + argument, generalLog);
  }
  
  
  
  //</es-section>
}
