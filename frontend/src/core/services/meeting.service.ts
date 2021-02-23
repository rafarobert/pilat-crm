/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:12 GMT-0400 (Bolivia Time)
 * Time: 2:43:12
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:12 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:12
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {Meetings} from "../models/meetings";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/meetings`;
  dataChange: BehaviorSubject<Meetings[]> = new BehaviorSubject<Meetings[]>([]);
  meetingData: Meetings = new Meetings();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): Meetings[] {
    return this.dataChange.value;
  }

  getDataMeetings(): void {
    this.getAllMeetings().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:Meetings[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllMeetings(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createMeeting(meeting:Meetings) {
    return this.http.post(this.basePath, meeting);
  }
  getMeeting(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateMeeting(id:any, meeting:Meetings) {
    return this.http.put(this.basePath + '/' + id, meeting);
  }
  deleteMeeting(id:any) {
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
  
  findOneBySequence(sequence:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneBySequence/' + sequence + '?' + attributes);
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
  
  findOneByGsyncLastsync(gsyncLastsync:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGsyncLastsync/' + gsyncLastsync + '?' + attributes);
  }
  
  findOneByName(name:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByName/' + name + '?' + attributes);
  }
  
  findOneByLocation(location:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLocation/' + location + '?' + attributes);
  }
  
  findOneByPassword(password:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByPassword/' + password + '?' + attributes);
  }
  
  findOneByJoinUrl(joinUrl:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByJoinUrl/' + joinUrl + '?' + attributes);
  }
  
  findOneByHostUrl(hostUrl:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByHostUrl/' + hostUrl + '?' + attributes);
  }
  
  findOneByDisplayedUrl(displayedUrl:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDisplayedUrl/' + displayedUrl + '?' + attributes);
  }
  
  findOneByCreator(creator:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreator/' + creator + '?' + attributes);
  }
  
  findOneByExternalId(externalId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByExternalId/' + externalId + '?' + attributes);
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
  
  findOneByType(type:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByType/' + type + '?' + attributes);
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
  
  findOneByGsyncId(gsyncId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByGsyncId/' + gsyncId + '?' + attributes);
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
  
  
  updateMeetingById(id:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingById?id=' + id, meeting);
  }
  
  updateMeetingByDeleted(deleted:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByDeleted?deleted=' + deleted, meeting);
  }
  
  updateMeetingByEmailReminderSent(emailReminderSent:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByEmailReminderSent?emailReminderSent=' + emailReminderSent, meeting);
  }
  
  updateMeetingByDurationHours(durationHours:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByDurationHours?durationHours=' + durationHours, meeting);
  }
  
  updateMeetingByDurationMinutes(durationMinutes:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByDurationMinutes?durationMinutes=' + durationMinutes, meeting);
  }
  
  updateMeetingByReminderTime(reminderTime:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByReminderTime?reminderTime=' + reminderTime, meeting);
  }
  
  updateMeetingByEmailReminderTime(emailReminderTime:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByEmailReminderTime?emailReminderTime=' + emailReminderTime, meeting);
  }
  
  updateMeetingBySequence(sequence:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingBySequence?sequence=' + sequence, meeting);
  }
  
  updateMeetingByRepeatInterval(repeatInterval:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByRepeatInterval?repeatInterval=' + repeatInterval, meeting);
  }
  
  updateMeetingByRepeatCount(repeatCount:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByRepeatCount?repeatCount=' + repeatCount, meeting);
  }
  
  updateMeetingByGsyncLastsync(gsyncLastsync:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByGsyncLastsync?gsyncLastsync=' + gsyncLastsync, meeting);
  }
  
  updateMeetingByName(name:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByName?name=' + name, meeting);
  }
  
  updateMeetingByLocation(location:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByLocation?location=' + location, meeting);
  }
  
  updateMeetingByPassword(password:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByPassword?password=' + password, meeting);
  }
  
  updateMeetingByJoinUrl(joinUrl:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByJoinUrl?joinUrl=' + joinUrl, meeting);
  }
  
  updateMeetingByHostUrl(hostUrl:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByHostUrl?hostUrl=' + hostUrl, meeting);
  }
  
  updateMeetingByDisplayedUrl(displayedUrl:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByDisplayedUrl?displayedUrl=' + displayedUrl, meeting);
  }
  
  updateMeetingByCreator(creator:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByCreator?creator=' + creator, meeting);
  }
  
  updateMeetingByExternalId(externalId:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByExternalId?externalId=' + externalId, meeting);
  }
  
  updateMeetingByParentType(parentType:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByParentType?parentType=' + parentType, meeting);
  }
  
  updateMeetingByStatus(status:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByStatus?status=' + status, meeting);
  }
  
  updateMeetingByType(type:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByType?type=' + type, meeting);
  }
  
  updateMeetingByOutlookId(outlookId:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByOutlookId?outlookId=' + outlookId, meeting);
  }
  
  updateMeetingByRepeatType(repeatType:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByRepeatType?repeatType=' + repeatType, meeting);
  }
  
  updateMeetingByRepeatDow(repeatDow:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByRepeatDow?repeatDow=' + repeatDow, meeting);
  }
  
  updateMeetingByRecurringSource(recurringSource:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByRecurringSource?recurringSource=' + recurringSource, meeting);
  }
  
  updateMeetingByGsyncId(gsyncId:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByGsyncId?gsyncId=' + gsyncId, meeting);
  }
  
  updateMeetingByDescription(description:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByDescription?description=' + description, meeting);
  }
  
  updateMeetingByDateEntered(dateEntered:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByDateEntered?dateEntered=' + dateEntered, meeting);
  }
  
  updateMeetingByDateModified(dateModified:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByDateModified?dateModified=' + dateModified, meeting);
  }
  
  updateMeetingByDateStart(dateStart:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByDateStart?dateStart=' + dateStart, meeting);
  }
  
  updateMeetingByDateEnd(dateEnd:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByDateEnd?dateEnd=' + dateEnd, meeting);
  }
  
  updateMeetingByRepeatUntil(repeatUntil:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByRepeatUntil?repeatUntil=' + repeatUntil, meeting);
  }
  
  updateMeetingByModifiedUserId(modifiedUserId:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByModifiedUserId?modifiedUserId=' + modifiedUserId, meeting);
  }
  
  updateMeetingByCreatedBy(createdBy:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByCreatedBy?createdBy=' + createdBy, meeting);
  }
  
  updateMeetingByAssignedUserId(assignedUserId:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByAssignedUserId?assignedUserId=' + assignedUserId, meeting);
  }
  
  updateMeetingByParentId(parentId:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByParentId?parentId=' + parentId, meeting);
  }
  
  updateMeetingByRepeatParentId(repeatParentId:any, meeting:Meetings) {
      return this.http.post(this.basePath + '/updateMeetingByRepeatParentId?repeatParentId=' + repeatParentId, meeting);
  }
  
  
  
  //</es-section>
}
