/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:58 GMT-0400 (Bolivia Time)
 * Time: 2:43:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:58 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:58
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {RemindersInvitees} from "../models/remindersInvitees";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ReminderInviteeService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/reminders-invitees`;
  dataChange: BehaviorSubject<RemindersInvitees[]> = new BehaviorSubject<RemindersInvitees[]>([]);
  reminderInviteeData: RemindersInvitees = new RemindersInvitees();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): RemindersInvitees[] {
    return this.dataChange.value;
  }

  getDataRemindersInvitees(): void {
    this.getAllRemindersInvitees().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:RemindersInvitees[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllRemindersInvitees(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createReminderInvitee(reminderInvitee:RemindersInvitees) {
    return this.http.post(this.basePath, reminderInvitee);
  }
  getReminderInvitee(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateReminderInvitee(id:any, reminderInvitee:RemindersInvitees) {
    return this.http.put(this.basePath + '/' + id, reminderInvitee);
  }
  deleteReminderInvitee(id:any) {
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
  
  findOneByRelatedInviteeModule(relatedInviteeModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedInviteeModule/' + relatedInviteeModule + '?' + attributes);
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
  
  findOneByReminderId(reminderId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByReminderId/' + reminderId + '?' + attributes);
  }
  
  findOneByRelatedInviteeModuleId(relatedInviteeModuleId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedInviteeModuleId/' + relatedInviteeModuleId + '?' + attributes);
  }
  
  
  updateReminderInviteeById(id:any, reminderInvitee:RemindersInvitees) {
      return this.http.post(this.basePath + '/updateReminderInviteeById?id=' + id, reminderInvitee);
  }
  
  updateReminderInviteeByDeleted(deleted:any, reminderInvitee:RemindersInvitees) {
      return this.http.post(this.basePath + '/updateReminderInviteeByDeleted?deleted=' + deleted, reminderInvitee);
  }
  
  updateReminderInviteeByName(name:any, reminderInvitee:RemindersInvitees) {
      return this.http.post(this.basePath + '/updateReminderInviteeByName?name=' + name, reminderInvitee);
  }
  
  updateReminderInviteeByRelatedInviteeModule(relatedInviteeModule:any, reminderInvitee:RemindersInvitees) {
      return this.http.post(this.basePath + '/updateReminderInviteeByRelatedInviteeModule?relatedInviteeModule=' + relatedInviteeModule, reminderInvitee);
  }
  
  updateReminderInviteeByDescription(description:any, reminderInvitee:RemindersInvitees) {
      return this.http.post(this.basePath + '/updateReminderInviteeByDescription?description=' + description, reminderInvitee);
  }
  
  updateReminderInviteeByDateEntered(dateEntered:any, reminderInvitee:RemindersInvitees) {
      return this.http.post(this.basePath + '/updateReminderInviteeByDateEntered?dateEntered=' + dateEntered, reminderInvitee);
  }
  
  updateReminderInviteeByDateModified(dateModified:any, reminderInvitee:RemindersInvitees) {
      return this.http.post(this.basePath + '/updateReminderInviteeByDateModified?dateModified=' + dateModified, reminderInvitee);
  }
  
  updateReminderInviteeByModifiedUserId(modifiedUserId:any, reminderInvitee:RemindersInvitees) {
      return this.http.post(this.basePath + '/updateReminderInviteeByModifiedUserId?modifiedUserId=' + modifiedUserId, reminderInvitee);
  }
  
  updateReminderInviteeByCreatedBy(createdBy:any, reminderInvitee:RemindersInvitees) {
      return this.http.post(this.basePath + '/updateReminderInviteeByCreatedBy?createdBy=' + createdBy, reminderInvitee);
  }
  
  updateReminderInviteeByAssignedUserId(assignedUserId:any, reminderInvitee:RemindersInvitees) {
      return this.http.post(this.basePath + '/updateReminderInviteeByAssignedUserId?assignedUserId=' + assignedUserId, reminderInvitee);
  }
  
  updateReminderInviteeByReminderId(reminderId:any, reminderInvitee:RemindersInvitees) {
      return this.http.post(this.basePath + '/updateReminderInviteeByReminderId?reminderId=' + reminderId, reminderInvitee);
  }
  
  updateReminderInviteeByRelatedInviteeModuleId(relatedInviteeModuleId:any, reminderInvitee:RemindersInvitees) {
      return this.http.post(this.basePath + '/updateReminderInviteeByRelatedInviteeModuleId?relatedInviteeModuleId=' + relatedInviteeModuleId, reminderInvitee);
  }
  
  
  
  //</es-section>
}
