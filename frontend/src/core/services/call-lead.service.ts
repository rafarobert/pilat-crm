/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:03 GMT-0400 (Bolivia Time)
 * Time: 2:42:3
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:03 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:3
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {CallsLeads} from "../models/callsLeads";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CallLeadService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/calls-leads`;
  dataChange: BehaviorSubject<CallsLeads[]> = new BehaviorSubject<CallsLeads[]>([]);
  callLeadData: CallsLeads = new CallsLeads();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): CallsLeads[] {
    return this.dataChange.value;
  }

  getDataCallsLeads(): void {
    this.getAllCallsLeads().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:CallsLeads[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCallsLeads(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCallLead(callLead:CallsLeads) {
    return this.http.post(this.basePath, callLead);
  }
  getCallLead(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCallLead(id:any, callLead:CallsLeads) {
    return this.http.put(this.basePath + '/' + id, callLead);
  }
  deleteCallLead(id:any) {
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
  
  
  updateCallLeadById(id:any, callLead:CallsLeads) {
      return this.http.post(this.basePath + '/updateCallLeadById?id=' + id, callLead);
  }
  
  updateCallLeadByDeleted(deleted:any, callLead:CallsLeads) {
      return this.http.post(this.basePath + '/updateCallLeadByDeleted?deleted=' + deleted, callLead);
  }
  
  updateCallLeadByCallId(callId:any, callLead:CallsLeads) {
      return this.http.post(this.basePath + '/updateCallLeadByCallId?callId=' + callId, callLead);
  }
  
  updateCallLeadByLeadId(leadId:any, callLead:CallsLeads) {
      return this.http.post(this.basePath + '/updateCallLeadByLeadId?leadId=' + leadId, callLead);
  }
  
  updateCallLeadByRequired(required:any, callLead:CallsLeads) {
      return this.http.post(this.basePath + '/updateCallLeadByRequired?required=' + required, callLead);
  }
  
  updateCallLeadByAcceptStatus(acceptStatus:any, callLead:CallsLeads) {
      return this.http.post(this.basePath + '/updateCallLeadByAcceptStatus?acceptStatus=' + acceptStatus, callLead);
  }
  
  updateCallLeadByDateModified(dateModified:any, callLead:CallsLeads) {
      return this.http.post(this.basePath + '/updateCallLeadByDateModified?dateModified=' + dateModified, callLead);
  }
  
  
  
  //</es-section>
}
