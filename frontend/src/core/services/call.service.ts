/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:01 GMT-0400 (Bolivia Time)
 * Time: 2:42:1
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:01 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:1
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Calls} from "../models/calls";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CallService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/calls`;
  dataChange: BehaviorSubject<Calls[]> = new BehaviorSubject<Calls[]>([]);
  callData: Calls = new Calls();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Calls[] {
    return this.dataChange.value;
  }

  getDataCalls(): void {
    this.getAllCalls().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Calls[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCalls(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCall(call:Calls) {
    return this.http.post(this.basePath, call);
  }
  getCall(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCall(id:any, call:Calls) {
    return this.http.put(this.basePath + '/' + id, call);
  }
  deleteCall(id:any) {
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
  
  findOneByEmailReminderSent(emailReminderSent:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailReminderSent/' + emailReminderSent + '?' + attributes);
  }
  
  findOneByDurationHours(durationHours:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDurationHours/' + durationHours + '?' + attributes);
  }
  
  findOneByDurationMinutes(durationMinutes:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDurationMinutes/' + durationMinutes + '?' + attributes);
  }
  
  findOneByReminderTime(reminderTime:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReminderTime/' + reminderTime + '?' + attributes);
  }
  
  findOneByEmailReminderTime(emailReminderTime:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailReminderTime/' + emailReminderTime + '?' + attributes);
  }
  
  findOneByRepeatInterval(repeatInterval:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRepeatInterval/' + repeatInterval + '?' + attributes);
  }
  
  findOneByRepeatCount(repeatCount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRepeatCount/' + repeatCount + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByParentType(parentType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentType/' + parentType + '?' + attributes);
  }
  
  findOneByStatus(status:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByStatus/' + status + '?' + attributes);
  }
  
  findOneByDirection(direction:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDirection/' + direction + '?' + attributes);
  }
  
  findOneByOutlookId(outlookId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByOutlookId/' + outlookId + '?' + attributes);
  }
  
  findOneByRepeatType(repeatType:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRepeatType/' + repeatType + '?' + attributes);
  }
  
  findOneByRepeatDow(repeatDow:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRepeatDow/' + repeatDow + '?' + attributes);
  }
  
  findOneByRecurringSource(recurringSource:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRecurringSource/' + recurringSource + '?' + attributes);
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
  
  findOneByDateStart(dateStart:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateStart/' + dateStart + '?' + attributes);
  }
  
  findOneByDateEnd(dateEnd:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateEnd/' + dateEnd + '?' + attributes);
  }
  
  findOneByRepeatUntil(repeatUntil:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRepeatUntil/' + repeatUntil + '?' + attributes);
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
  
  findOneByParentId(parentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByParentId/' + parentId + '?' + attributes);
  }
  
  findOneByRepeatParentId(repeatParentId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRepeatParentId/' + repeatParentId + '?' + attributes);
  }
  
  
  updateCallById(id:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallById?id=' + id, call);
  }
  
  updateCallByDeleted(deleted:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByDeleted?deleted=' + deleted, call);
  }
  
  updateCallByEmailReminderSent(emailReminderSent:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByEmailReminderSent?emailReminderSent=' + emailReminderSent, call);
  }
  
  updateCallByDurationHours(durationHours:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByDurationHours?durationHours=' + durationHours, call);
  }
  
  updateCallByDurationMinutes(durationMinutes:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByDurationMinutes?durationMinutes=' + durationMinutes, call);
  }
  
  updateCallByReminderTime(reminderTime:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByReminderTime?reminderTime=' + reminderTime, call);
  }
  
  updateCallByEmailReminderTime(emailReminderTime:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByEmailReminderTime?emailReminderTime=' + emailReminderTime, call);
  }
  
  updateCallByRepeatInterval(repeatInterval:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByRepeatInterval?repeatInterval=' + repeatInterval, call);
  }
  
  updateCallByRepeatCount(repeatCount:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByRepeatCount?repeatCount=' + repeatCount, call);
  }
  
  updateCallByName(name:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByName?name=' + name, call);
  }
  
  updateCallByParentType(parentType:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByParentType?parentType=' + parentType, call);
  }
  
  updateCallByStatus(status:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByStatus?status=' + status, call);
  }
  
  updateCallByDirection(direction:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByDirection?direction=' + direction, call);
  }
  
  updateCallByOutlookId(outlookId:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByOutlookId?outlookId=' + outlookId, call);
  }
  
  updateCallByRepeatType(repeatType:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByRepeatType?repeatType=' + repeatType, call);
  }
  
  updateCallByRepeatDow(repeatDow:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByRepeatDow?repeatDow=' + repeatDow, call);
  }
  
  updateCallByRecurringSource(recurringSource:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByRecurringSource?recurringSource=' + recurringSource, call);
  }
  
  updateCallByDescription(description:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByDescription?description=' + description, call);
  }
  
  updateCallByDateEntered(dateEntered:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByDateEntered?dateEntered=' + dateEntered, call);
  }
  
  updateCallByDateModified(dateModified:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByDateModified?dateModified=' + dateModified, call);
  }
  
  updateCallByDateStart(dateStart:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByDateStart?dateStart=' + dateStart, call);
  }
  
  updateCallByDateEnd(dateEnd:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByDateEnd?dateEnd=' + dateEnd, call);
  }
  
  updateCallByRepeatUntil(repeatUntil:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByRepeatUntil?repeatUntil=' + repeatUntil, call);
  }
  
  updateCallByModifiedUserId(modifiedUserId:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByModifiedUserId?modifiedUserId=' + modifiedUserId, call);
  }
  
  updateCallByCreatedBy(createdBy:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByCreatedBy?createdBy=' + createdBy, call);
  }
  
  updateCallByAssignedUserId(assignedUserId:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByAssignedUserId?assignedUserId=' + assignedUserId, call);
  }
  
  updateCallByParentId(parentId:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByParentId?parentId=' + parentId, call);
  }
  
  updateCallByRepeatParentId(repeatParentId:any, call:Calls) {
      return this.http.post(this.basePath + '/updateCallByRepeatParentId?repeatParentId=' + repeatParentId, call);
  }
  
  
  
  //</es-section>
}
