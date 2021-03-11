/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Tue Mar 09 2021 00:05:05 GMT-0400 (Bolivia Time)
 * Time: 0:5:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Tue Mar 09 2021 00:05:05 GMT-0400 (Bolivia Time)
 * Last time updated: 0:5:5
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {PilatLogs} from "../models/pilatLogs";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class PilatLogService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/pilat-logs`;
  dataChange: BehaviorSubject<PilatLogs[]> = new BehaviorSubject<PilatLogs[]>([]);
  pilatLogData: PilatLogs = new PilatLogs();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): PilatLogs[] {
    return this.dataChange.value;
  }

  getDataPilatLogs(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllPilatLogs(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:PilatLogs[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllPilatLogs(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createPilatLog(pilatLog:PilatLogs) {
    return this.http.post(this.basePath, pilatLog);
  }
  getPilatLog(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updatePilatLog(id:any, pilatLog:PilatLogs) {
    return this.http.put(this.basePath + '/' + id, pilatLog);
  }
  deletePilatLog(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByUid(Id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUid/' + Id + '?' + attributes);
  }
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByAction(action:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAction/' + action + '?' + attributes);
  }
  
  findOneByDescription(description:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDescription/' + description + '?' + attributes);
  }
  
  findOneByModule(module:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModule/' + module + '?' + attributes);
  }
  
  findOneByUser(user:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUser/' + user + '?' + attributes);
  }
  
  findOneBySourceId(sourceId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySourceId/' + sourceId + '?' + attributes);
  }
  
  findOneByModuleId(moduleId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByModuleId/' + moduleId + '?' + attributes);
  }
  
  findOneByCreatedby(createdby:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedby/' + createdby + '?' + attributes);
  }
  
  findOneByUpdatedby(updatedby:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUpdatedby/' + updatedby + '?' + attributes);
  }
  
  findOneByDueat(dueat:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDueat/' + dueat + '?' + attributes);
  }
  
  findOneByCreatedat(createdat:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedat/' + createdat + '?' + attributes);
  }
  
  findOneByUpdatedat(updatedat:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUpdatedat/' + updatedat + '?' + attributes);
  }
  
  
  updatePilatLogByUid(Id:any, pilatLog:PilatLogs) {
      return this.http.post(this.basePath + '/updatePilatLogByUid?Id=' + Id, pilatLog);
  }
  
  updatePilatLogById(id:any, pilatLog:PilatLogs) {
      return this.http.post(this.basePath + '/updatePilatLogById?id=' + id, pilatLog);
  }
  
  updatePilatLogByAction(action:any, pilatLog:PilatLogs) {
      return this.http.post(this.basePath + '/updatePilatLogByAction?action=' + action, pilatLog);
  }
  
  updatePilatLogByDescription(description:any, pilatLog:PilatLogs) {
      return this.http.post(this.basePath + '/updatePilatLogByDescription?description=' + description, pilatLog);
  }
  
  updatePilatLogByModule(module:any, pilatLog:PilatLogs) {
      return this.http.post(this.basePath + '/updatePilatLogByModule?module=' + module, pilatLog);
  }
  
  updatePilatLogByUser(user:any, pilatLog:PilatLogs) {
      return this.http.post(this.basePath + '/updatePilatLogByUser?user=' + user, pilatLog);
  }
  
  updatePilatLogBySourceId(sourceId:any, pilatLog:PilatLogs) {
      return this.http.post(this.basePath + '/updatePilatLogBySourceId?sourceId=' + sourceId, pilatLog);
  }
  
  updatePilatLogByModuleId(moduleId:any, pilatLog:PilatLogs) {
      return this.http.post(this.basePath + '/updatePilatLogByModuleId?moduleId=' + moduleId, pilatLog);
  }
  
  updatePilatLogByCreatedby(createdby:any, pilatLog:PilatLogs) {
      return this.http.post(this.basePath + '/updatePilatLogByCreatedby?createdby=' + createdby, pilatLog);
  }
  
  updatePilatLogByUpdatedby(updatedby:any, pilatLog:PilatLogs) {
      return this.http.post(this.basePath + '/updatePilatLogByUpdatedby?updatedby=' + updatedby, pilatLog);
  }
  
  updatePilatLogByDueat(dueat:any, pilatLog:PilatLogs) {
      return this.http.post(this.basePath + '/updatePilatLogByDueat?dueat=' + dueat, pilatLog);
  }
  
  updatePilatLogByCreatedat(createdat:any, pilatLog:PilatLogs) {
      return this.http.post(this.basePath + '/updatePilatLogByCreatedat?createdat=' + createdat, pilatLog);
  }
  
  updatePilatLogByUpdatedat(updatedat:any, pilatLog:PilatLogs) {
      return this.http.post(this.basePath + '/updatePilatLogByUpdatedat?updatedat=' + updatedat, pilatLog);
  }
  
  
  
  //</es-section>
}
