/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:06 GMT-0400 (Bolivia Time)
 * Time: 2:42:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:06 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:6
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {CallsUsers} from "../models/callsUsers";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CallUserService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/calls-users`;
  dataChange: BehaviorSubject<CallsUsers[]> = new BehaviorSubject<CallsUsers[]>([]);
  callUserData: CallsUsers = new CallsUsers();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): CallsUsers[] {
    return this.dataChange.value;
  }

  getDataCallsUsers(): void {
    this.getAllCallsUsers().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:CallsUsers[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCallsUsers(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCallUser(callUser:CallsUsers) {
    return this.http.post(this.basePath, callUser);
  }
  getCallUser(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCallUser(id:any, callUser:CallsUsers) {
    return this.http.put(this.basePath + '/' + id, callUser);
  }
  deleteCallUser(id:any) {
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
  
  findOneByCallId(callId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCallId/' + callId + '?' + attributes);
  }
  
  findOneByUserId(userId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserId/' + userId + '?' + attributes);
  }
  
  findOneByRequired(required:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRequired/' + required + '?' + attributes);
  }
  
  findOneByAcceptStatus(acceptStatus:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByAcceptStatus/' + acceptStatus + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateCallUserById(id:any, callUser:CallsUsers) {
      return this.http.post(this.basePath + '/updateCallUserById?id=' + id, callUser);
  }
  
  updateCallUserByDeleted(deleted:any, callUser:CallsUsers) {
      return this.http.post(this.basePath + '/updateCallUserByDeleted?deleted=' + deleted, callUser);
  }
  
  updateCallUserByCallId(callId:any, callUser:CallsUsers) {
      return this.http.post(this.basePath + '/updateCallUserByCallId?callId=' + callId, callUser);
  }
  
  updateCallUserByUserId(userId:any, callUser:CallsUsers) {
      return this.http.post(this.basePath + '/updateCallUserByUserId?userId=' + userId, callUser);
  }
  
  updateCallUserByRequired(required:any, callUser:CallsUsers) {
      return this.http.post(this.basePath + '/updateCallUserByRequired?required=' + required, callUser);
  }
  
  updateCallUserByAcceptStatus(acceptStatus:any, callUser:CallsUsers) {
      return this.http.post(this.basePath + '/updateCallUserByAcceptStatus?acceptStatus=' + acceptStatus, callUser);
  }
  
  updateCallUserByDateModified(dateModified:any, callUser:CallsUsers) {
      return this.http.post(this.basePath + '/updateCallUserByDateModified?dateModified=' + dateModified, callUser);
  }
  
  
  
  //</es-section>
}
