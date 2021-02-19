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
import {MeetingsLeads} from "../models/meetingsLeads";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class MeetingLeadService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/meetings-leads`;
  dataChange: BehaviorSubject<MeetingsLeads[]> = new BehaviorSubject<MeetingsLeads[]>([]);
  meetingLeadData: MeetingsLeads = new MeetingsLeads();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): MeetingsLeads[] {
    return this.dataChange.value;
  }

  getDataMeetingsLeads(): void {
    this.getAllMeetingsLeads().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:MeetingsLeads[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllMeetingsLeads(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createMeetingLead(meetingLead:MeetingsLeads) {
    return this.http.post(this.basePath, meetingLead);
  }
  getMeetingLead(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateMeetingLead(id:any, meetingLead:MeetingsLeads) {
    return this.http.put(this.basePath + '/' + id, meetingLead);
  }
  deleteMeetingLead(id:any) {
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
  
  findOneByLeadId(leadId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByLeadId/' + leadId + '?' + attributes);
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
  
  
  updateMeetingLeadById(id:any, meetingLead:MeetingsLeads) {
      return this.http.post(this.basePath + '/updateMeetingLeadById?id=' + id, meetingLead);
  }
  
  updateMeetingLeadByDeleted(deleted:any, meetingLead:MeetingsLeads) {
      return this.http.post(this.basePath + '/updateMeetingLeadByDeleted?deleted=' + deleted, meetingLead);
  }
  
  updateMeetingLeadByMeetingId(meetingId:any, meetingLead:MeetingsLeads) {
      return this.http.post(this.basePath + '/updateMeetingLeadByMeetingId?meetingId=' + meetingId, meetingLead);
  }
  
  updateMeetingLeadByLeadId(leadId:any, meetingLead:MeetingsLeads) {
      return this.http.post(this.basePath + '/updateMeetingLeadByLeadId?leadId=' + leadId, meetingLead);
  }
  
  updateMeetingLeadByRequired(required:any, meetingLead:MeetingsLeads) {
      return this.http.post(this.basePath + '/updateMeetingLeadByRequired?required=' + required, meetingLead);
  }
  
  updateMeetingLeadByAcceptStatus(acceptStatus:any, meetingLead:MeetingsLeads) {
      return this.http.post(this.basePath + '/updateMeetingLeadByAcceptStatus?acceptStatus=' + acceptStatus, meetingLead);
  }
  
  updateMeetingLeadByDateModified(dateModified:any, meetingLead:MeetingsLeads) {
      return this.http.post(this.basePath + '/updateMeetingLeadByDateModified?dateModified=' + dateModified, meetingLead);
  }
  
  
  
  //</es-section>
}
