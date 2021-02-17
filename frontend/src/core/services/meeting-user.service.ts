/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:14 GMT-0400 (Bolivia Time)
 * Time: 2:43:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:14 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:14
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {MeetingsUsers} from "../models/meetingsUsers";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class MeetingUserService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/meetings-users`;
  dataChange: BehaviorSubject<MeetingsUsers[]> = new BehaviorSubject<MeetingsUsers[]>([]);
  meetingUserData: MeetingsUsers = new MeetingsUsers();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): MeetingsUsers[] {
    return this.dataChange.value;
  }

  getDataMeetingsUsers(): void {
    this.getAllMeetingsUsers().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:MeetingsUsers[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllMeetingsUsers(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createMeetingUser(meetingUser:MeetingsUsers) {
    return this.http.post(this.basePath, meetingUser);
  }
  getMeetingUser(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateMeetingUser(id:any, meetingUser:MeetingsUsers) {
    return this.http.put(this.basePath + '/' + id, meetingUser);
  }
  deleteMeetingUser(id:any) {
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
  
  
  updateMeetingUserById(id:any, meetingUser:MeetingsUsers) {
      return this.http.post(this.basePath + '/updateMeetingUserById?id=' + id, meetingUser);
  }
  
  updateMeetingUserByDeleted(deleted:any, meetingUser:MeetingsUsers) {
      return this.http.post(this.basePath + '/updateMeetingUserByDeleted?deleted=' + deleted, meetingUser);
  }
  
  updateMeetingUserByMeetingId(meetingId:any, meetingUser:MeetingsUsers) {
      return this.http.post(this.basePath + '/updateMeetingUserByMeetingId?meetingId=' + meetingId, meetingUser);
  }
  
  updateMeetingUserByUserId(userId:any, meetingUser:MeetingsUsers) {
      return this.http.post(this.basePath + '/updateMeetingUserByUserId?userId=' + userId, meetingUser);
  }
  
  updateMeetingUserByRequired(required:any, meetingUser:MeetingsUsers) {
      return this.http.post(this.basePath + '/updateMeetingUserByRequired?required=' + required, meetingUser);
  }
  
  updateMeetingUserByAcceptStatus(acceptStatus:any, meetingUser:MeetingsUsers) {
      return this.http.post(this.basePath + '/updateMeetingUserByAcceptStatus?acceptStatus=' + acceptStatus, meetingUser);
  }
  
  updateMeetingUserByDateModified(dateModified:any, meetingUser:MeetingsUsers) {
      return this.http.post(this.basePath + '/updateMeetingUserByDateModified?dateModified=' + dateModified, meetingUser);
  }
  
  
  
  //</es-section>
}
