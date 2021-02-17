/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:57 GMT-0400 (Bolivia Time)
 * Time: 2:43:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:57 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:57
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Reminders} from "../models/reminders";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/reminders`;
  dataChange: BehaviorSubject<Reminders[]> = new BehaviorSubject<Reminders[]>([]);
  reminderData: Reminders = new Reminders();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Reminders[] {
    return this.dataChange.value;
  }

  getDataReminders(): void {
    this.getAllReminders().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Reminders[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllReminders(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createReminder(reminder:Reminders) {
    return this.http.post(this.basePath, reminder);
  }
  getReminder(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateReminder(id:any, reminder:Reminders) {
    return this.http.put(this.basePath + '/' + id, reminder);
  }
  deleteReminder(id:any) {
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
  
  findOneByPopup(popup:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPopup/' + popup + '?' + attributes);
  }
  
  findOneByEmail(email:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmail/' + email + '?' + attributes);
  }
  
  findOneByEmailSent(emailSent:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByEmailSent/' + emailSent + '?' + attributes);
  }
  
  findOneByPopupViewed(popupViewed:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPopupViewed/' + popupViewed + '?' + attributes);
  }
  
  findOneByDateWillexecute(dateWillexecute:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateWillexecute/' + dateWillexecute + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByTimerPopup(timerPopup:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTimerPopup/' + timerPopup + '?' + attributes);
  }
  
  findOneByTimerEmail(timerEmail:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByTimerEmail/' + timerEmail + '?' + attributes);
  }
  
  findOneByRelatedEventModule(relatedEventModule:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedEventModule/' + relatedEventModule + '?' + attributes);
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
  
  findOneByRelatedEventModuleId(relatedEventModuleId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByRelatedEventModuleId/' + relatedEventModuleId + '?' + attributes);
  }
  
  
  updateReminderById(id:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderById?id=' + id, reminder);
  }
  
  updateReminderByDeleted(deleted:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByDeleted?deleted=' + deleted, reminder);
  }
  
  updateReminderByPopup(popup:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByPopup?popup=' + popup, reminder);
  }
  
  updateReminderByEmail(email:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByEmail?email=' + email, reminder);
  }
  
  updateReminderByEmailSent(emailSent:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByEmailSent?emailSent=' + emailSent, reminder);
  }
  
  updateReminderByPopupViewed(popupViewed:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByPopupViewed?popupViewed=' + popupViewed, reminder);
  }
  
  updateReminderByDateWillexecute(dateWillexecute:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByDateWillexecute?dateWillexecute=' + dateWillexecute, reminder);
  }
  
  updateReminderByName(name:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByName?name=' + name, reminder);
  }
  
  updateReminderByTimerPopup(timerPopup:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByTimerPopup?timerPopup=' + timerPopup, reminder);
  }
  
  updateReminderByTimerEmail(timerEmail:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByTimerEmail?timerEmail=' + timerEmail, reminder);
  }
  
  updateReminderByRelatedEventModule(relatedEventModule:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByRelatedEventModule?relatedEventModule=' + relatedEventModule, reminder);
  }
  
  updateReminderByDescription(description:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByDescription?description=' + description, reminder);
  }
  
  updateReminderByDateEntered(dateEntered:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByDateEntered?dateEntered=' + dateEntered, reminder);
  }
  
  updateReminderByDateModified(dateModified:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByDateModified?dateModified=' + dateModified, reminder);
  }
  
  updateReminderByModifiedUserId(modifiedUserId:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByModifiedUserId?modifiedUserId=' + modifiedUserId, reminder);
  }
  
  updateReminderByCreatedBy(createdBy:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByCreatedBy?createdBy=' + createdBy, reminder);
  }
  
  updateReminderByAssignedUserId(assignedUserId:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByAssignedUserId?assignedUserId=' + assignedUserId, reminder);
  }
  
  updateReminderByRelatedEventModuleId(relatedEventModuleId:any, reminder:Reminders) {
      return this.http.post(this.basePath + '/updateReminderByRelatedEventModuleId?relatedEventModuleId=' + relatedEventModuleId, reminder);
  }
  
  
  
  //</es-section>
}
