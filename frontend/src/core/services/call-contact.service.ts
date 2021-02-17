/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:02 GMT-0400 (Bolivia Time)
 * Time: 2:42:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:02 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:2
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {CallsContacts} from "../models/callsContacts";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class CallContactService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/calls-contacts`;
  dataChange: BehaviorSubject<CallsContacts[]> = new BehaviorSubject<CallsContacts[]>([]);
  callContactData: CallsContacts = new CallsContacts();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): CallsContacts[] {
    return this.dataChange.value;
  }

  getDataCallsContacts(): void {
    this.getAllCallsContacts().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:CallsContacts[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllCallsContacts(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
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
  createCallContact(callContact:CallsContacts) {
    return this.http.post(this.basePath, callContact);
  }
  getCallContact(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateCallContact(id:any, callContact:CallsContacts) {
    return this.http.put(this.basePath + '/' + id, callContact);
  }
  deleteCallContact(id:any) {
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
  
  
  updateCallContactById(id:any, callContact:CallsContacts) {
      return this.http.post(this.basePath + '/updateCallContactById?id=' + id, callContact);
  }
  
  updateCallContactByDeleted(deleted:any, callContact:CallsContacts) {
      return this.http.post(this.basePath + '/updateCallContactByDeleted?deleted=' + deleted, callContact);
  }
  
  updateCallContactByCallId(callId:any, callContact:CallsContacts) {
      return this.http.post(this.basePath + '/updateCallContactByCallId?callId=' + callId, callContact);
  }
  
  updateCallContactByContactId(contactId:any, callContact:CallsContacts) {
      return this.http.post(this.basePath + '/updateCallContactByContactId?contactId=' + contactId, callContact);
  }
  
  updateCallContactByRequired(required:any, callContact:CallsContacts) {
      return this.http.post(this.basePath + '/updateCallContactByRequired?required=' + required, callContact);
  }
  
  updateCallContactByAcceptStatus(acceptStatus:any, callContact:CallsContacts) {
      return this.http.post(this.basePath + '/updateCallContactByAcceptStatus?acceptStatus=' + acceptStatus, callContact);
  }
  
  updateCallContactByDateModified(dateModified:any, callContact:CallsContacts) {
      return this.http.post(this.basePath + '/updateCallContactByDateModified?dateModified=' + dateModified, callContact);
  }
  
  
  
  //</es-section>
}
