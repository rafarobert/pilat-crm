/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:04 GMT-0400 (Bolivia Time)
 * Time: 2:42:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:04 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:4
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {CallsReschedule} from "../models/callsReschedule";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CallRescheduleService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/calls-reschedule`;
  dataChange: BehaviorSubject<CallsReschedule[]> = new BehaviorSubject<CallsReschedule[]>([]);
  callRescheduleData: CallsReschedule = new CallsReschedule();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): CallsReschedule[] {
    return this.dataChange.value;
  }

  getDataCallsReschedule(): void {
    this.getAllCallsReschedule().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:CallsReschedule[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCallsReschedule(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCallReschedule(callReschedule:CallsReschedule) {
    return this.http.post(this.basePath, callReschedule);
  }
  getCallReschedule(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCallReschedule(id:any, callReschedule:CallsReschedule) {
    return this.http.put(this.basePath + '/' + id, callReschedule);
  }
  deleteCallReschedule(id:any) {
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
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByReason(reason:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReason/' + reason + '?' + attributes);
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
  
  findOneByCallId(callId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCallId/' + callId + '?' + attributes);
  }
  
  
  updateCallRescheduleById(id:any, callReschedule:CallsReschedule) {
      return this.http.post(this.basePath + '/updateCallRescheduleById?id=' + id, callReschedule);
  }
  
  updateCallRescheduleByDeleted(deleted:any, callReschedule:CallsReschedule) {
      return this.http.post(this.basePath + '/updateCallRescheduleByDeleted?deleted=' + deleted, callReschedule);
  }
  
  updateCallRescheduleByName(name:any, callReschedule:CallsReschedule) {
      return this.http.post(this.basePath + '/updateCallRescheduleByName?name=' + name, callReschedule);
  }
  
  updateCallRescheduleByReason(reason:any, callReschedule:CallsReschedule) {
      return this.http.post(this.basePath + '/updateCallRescheduleByReason?reason=' + reason, callReschedule);
  }
  
  updateCallRescheduleByDescription(description:any, callReschedule:CallsReschedule) {
      return this.http.post(this.basePath + '/updateCallRescheduleByDescription?description=' + description, callReschedule);
  }
  
  updateCallRescheduleByDateEntered(dateEntered:any, callReschedule:CallsReschedule) {
      return this.http.post(this.basePath + '/updateCallRescheduleByDateEntered?dateEntered=' + dateEntered, callReschedule);
  }
  
  updateCallRescheduleByDateModified(dateModified:any, callReschedule:CallsReschedule) {
      return this.http.post(this.basePath + '/updateCallRescheduleByDateModified?dateModified=' + dateModified, callReschedule);
  }
  
  updateCallRescheduleByModifiedUserId(modifiedUserId:any, callReschedule:CallsReschedule) {
      return this.http.post(this.basePath + '/updateCallRescheduleByModifiedUserId?modifiedUserId=' + modifiedUserId, callReschedule);
  }
  
  updateCallRescheduleByCreatedBy(createdBy:any, callReschedule:CallsReschedule) {
      return this.http.post(this.basePath + '/updateCallRescheduleByCreatedBy?createdBy=' + createdBy, callReschedule);
  }
  
  updateCallRescheduleByAssignedUserId(assignedUserId:any, callReschedule:CallsReschedule) {
      return this.http.post(this.basePath + '/updateCallRescheduleByAssignedUserId?assignedUserId=' + assignedUserId, callReschedule);
  }
  
  updateCallRescheduleByCallId(callId:any, callReschedule:CallsReschedule) {
      return this.http.post(this.basePath + '/updateCallRescheduleByCallId?callId=' + callId, callReschedule);
  }
  
  
  
  //</es-section>
}
