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
import {MeetingsContacts} from "../models/meetingsContacts";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class MeetingContactService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/meetings-contacts`;
  dataChange: BehaviorSubject<MeetingsContacts[]> = new BehaviorSubject<MeetingsContacts[]>([]);
  meetingContactData: MeetingsContacts = new MeetingsContacts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): MeetingsContacts[] {
    return this.dataChange.value;
  }

  getDataMeetingsContacts(): void {
    this.getAllMeetingsContacts().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:MeetingsContacts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllMeetingsContacts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createMeetingContact(meetingContact:MeetingsContacts) {
    return this.http.post(this.basePath, meetingContact);
  }
  getMeetingContact(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateMeetingContact(id:any, meetingContact:MeetingsContacts) {
    return this.http.put(this.basePath + '/' + id, meetingContact);
  }
  deleteMeetingContact(id:any) {
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
  
  findOneByMeetingId(meetingId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMeetingId/' + meetingId + '?' + attributes);
  }
  
  findOneByContactId(contactId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactId/' + contactId + '?' + attributes);
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
  
  
  updateMeetingContactById(id:any, meetingContact:MeetingsContacts) {
      return this.http.post(this.basePath + '/updateMeetingContactById?id=' + id, meetingContact);
  }
  
  updateMeetingContactByDeleted(deleted:any, meetingContact:MeetingsContacts) {
      return this.http.post(this.basePath + '/updateMeetingContactByDeleted?deleted=' + deleted, meetingContact);
  }
  
  updateMeetingContactByMeetingId(meetingId:any, meetingContact:MeetingsContacts) {
      return this.http.post(this.basePath + '/updateMeetingContactByMeetingId?meetingId=' + meetingId, meetingContact);
  }
  
  updateMeetingContactByContactId(contactId:any, meetingContact:MeetingsContacts) {
      return this.http.post(this.basePath + '/updateMeetingContactByContactId?contactId=' + contactId, meetingContact);
  }
  
  updateMeetingContactByRequired(required:any, meetingContact:MeetingsContacts) {
      return this.http.post(this.basePath + '/updateMeetingContactByRequired?required=' + required, meetingContact);
  }
  
  updateMeetingContactByAcceptStatus(acceptStatus:any, meetingContact:MeetingsContacts) {
      return this.http.post(this.basePath + '/updateMeetingContactByAcceptStatus?acceptStatus=' + acceptStatus, meetingContact);
  }
  
  updateMeetingContactByDateModified(dateModified:any, meetingContact:MeetingsContacts) {
      return this.http.post(this.basePath + '/updateMeetingContactByDateModified?dateModified=' + dateModified, meetingContact);
  }
  
  
  
  //</es-section>
}
